import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, Navigate, useParams } from "react-router-dom";
import Container from "../components/primitives/Container";
import { blogPosts } from "../data/cafeContent";
import { useI18n } from "../lang/i18n";

function BlogPostPage() {
  const { t } = useI18n();
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const body = t(`blogPosts.${post.id}.body`, { returnObjects: true });

  return (
    <main>
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
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>{t("article.placeholderTitle")}</h2>
            <p>{t("article.placeholderParagraph1")}</p>
            <p>{t("article.placeholderParagraph2")}</p>
          </Container>
        </section>
      </article>
    </main>
  );
}

export default BlogPostPage;
