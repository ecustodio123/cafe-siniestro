import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Container from "../components/primitives/Container";
import { blogPosts } from "../data/cafeContent";
import { useI18n } from "../lang/i18n";

const articleHeadings = new Set([
  "El Contexto y el Incidente",
  "El Gigante Atrapado",
  "Consecuencias Inmediatas: El Tráfico Paralizado",
  "El Rescate, la Crisis Logística y el Impacto en Seguros",
  "La Odisea del Rescate",
  "Impacto en la Cadena de Suministro Global",
  "El Terremoto en el Mercado de Seguros",
  "Anatomía de un Colapso Logístico y Lecciones en la Gestión de Riesgos",
  "El Antecedente: Del Modelo Descentralizado al Punto de Fallo Único",
  "La Tormenta Perfecta: El Día del \"Go-Live\"",
  "Comparativa de Modelos: Resiliencia vs. Eficiencia",
  "Consecuencias Financieras y Reputacionales",
  "Lecciones Críticas para la Gestión de Riesgos y Seguros",
  "La Solución: Trade Disruption Insurance (TDI) y Parametría",
  "Cuando el Defecto se Convierte en Amenaza Existencial",
  "El Origen: La Paradoja del Nitrato de Amonio",
  "Anatomía de un Desastre en la Gestión de Riesgos",
  "Impacto Financiero y el Camino a la Quiebra",
  "Lecciones para la Comunidad de Seguros",
  "Conclusión",
]);

function renderArticleParagraph(paragraph) {
  if (articleHeadings.has(paragraph)) {
    return <h2 key={paragraph}>{paragraph}</h2>;
  }

  const isListItem = paragraph.startsWith("•") || /^\d+\.\s/.test(paragraph);
  const leadMatch = isListItem ? paragraph.match(/^(.+?:)(\s.*)$/) : null;

  if (leadMatch) {
    return (
      <p className="article-list-item" key={paragraph}>
        <strong>{leadMatch[1]}</strong>
        {leadMatch[2]}
      </p>
    );
  }

  if (isListItem) {
    return (
      <p className="article-list-item" key={paragraph}>
        {paragraph}
      </p>
    );
  }

  return <p key={paragraph}>{paragraph}</p>;
}

const articleTableConfigs = [
  {
    marker: "Atributo Modelo Anterior",
    key: "kfc-comparison-table",
    headers: ["Atributo", "Modelo Anterior (Bidvest)", "Modelo DHL (2018)", "Resultado del Riesgo"],
    rowCount: 4,
    parseRow: parseKfcComparisonRow,
  },
  {
    marker: "Concepto de Seguro:",
    key: "takata-insurance-lessons-table",
    headers: ["Concepto de Seguro", "Lección de la Crisis Takata"],
    rowCount: 4,
    parseRow: parseTakataInsuranceRow,
  },
];

function parseKfcComparisonRow(row) {
  const [attribute, values] = row.split(": ");
  const [previousModel, dhlModel, riskResult] = values.split(" | ");

  return [attribute, previousModel, dhlModel, riskResult];
}

function parseTakataInsuranceRow(row) {
  const separatorIndex = row.indexOf(": ");

  return [row.slice(0, separatorIndex), row.slice(separatorIndex + 2)];
}

function renderArticleTable(config, rows) {
  return (
    <div className="article-table-wrap" key={config.key}>
      <table className="article-table">
        <thead>
          <tr>
            {config.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const cells = config.parseRow(row);
            const [headingCell, ...bodyCells] = cells;

            return (
              <tr key={headingCell}>
                <th scope="row">{headingCell}</th>
                {bodyCells.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function renderArticleBody(body) {
  const nodes = [];

  for (let index = 0; index < body.length; index += 1) {
    const paragraph = body[index];
    const tableConfig = articleTableConfigs.find((config) => paragraph.startsWith(config.marker));

    if (tableConfig) {
      nodes.push(renderArticleTable(tableConfig, body.slice(index + 1, index + 1 + tableConfig.rowCount)));
      index += tableConfig.rowCount;
      continue;
    }

    nodes.push(renderArticleParagraph(paragraph));
  }

  return nodes;
}

function BlogPostPage() {
  const { t } = useI18n();
  const { slug } = useParams();
  const [readingProgress, setReadingProgress] = useState(0);
  const post = blogPosts.find((entry) => entry.slug === slug);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    updateReadingProgress();
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress);

    return () => {
      window.removeEventListener("scroll", updateReadingProgress);
      window.removeEventListener("resize", updateReadingProgress);
    };
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const body = t(`blogPosts.${post.id}.body`, { returnObjects: true });

  return (
    <main>
      <div className="reading-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${readingProgress / 100})` }} />
      </div>
      <article>
        <section className="article-hero">
          <Container className="article-hero__inner">
            <Link className="article-back-link" to="/blog">
              <ArrowBackIcon />
              {t("common.backToBlog")}
            </Link>
            <div className="post-card__meta">
              <span>{t(`blogPosts.${post.id}.category`)}</span>
              <span>{t(`blogPosts.${post.id}.readTime`)}</span>
            </div>
            <h1>{t(`blogPosts.${post.id}.title`)}</h1>
            <p>{t(`blogPosts.${post.id}.excerpt`)}</p>
          </Container>
        </section>

        <section className="article-body-section">
          <Container className="article-body">
            {renderArticleBody(body)}
          </Container>
        </section>
      </article>
    </main>
  );
}

export default BlogPostPage;
