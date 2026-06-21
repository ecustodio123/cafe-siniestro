import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import Container from "../components/primitives/Container";
import {
  blogPosts,
  methodSteps,
} from "../data/cafeContent";
import { useI18n } from "../lang/i18n";

function EmphasizedCafeTitle({ title }) {
  const brand = "Café Siniestro";
  const [before, after] = title.split(brand);

  if (after === undefined) {
    return title;
  }

  return (
    <>
      {before}
      <strong>{brand}</strong>
      {after}
    </>
  );
}

function HomePage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="speaker-hero" aria-label={t("home.hero.visualAria")}>
        <div className="speaker-hero__image" aria-hidden="true" />
        <Container className="speaker-hero__content">
          <div className="speaker-hero__copy">
            <h1>{t("home.hero.title")}</h1>
            <p>{t("home.hero.description")}</p>
            <div className="speaker-hero__social" aria-label={t("home.hero.socialAria")}>
              <a href="https://www.linkedin.com/company/cafesiniestro/" aria-label={t("home.hero.linkedin")}>
                <LinkedInIcon />
              </a>
              <a href="https://www.youtube.com/@CafeSiniestro" aria-label={t("home.hero.youtube")}>
                <YouTubeIcon />
              </a>
              <a href="https://www.instagram.com/cafesiniestro/" aria-label={t("home.hero.instagram")}>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </Container>
        <div className="speaker-hero__bar">
          <Container className="speaker-hero__bar-inner">
            <nav className="speaker-hero__tabs" aria-label={t("home.hero.tabsAria")}>
              <a href="#origen">{t("home.hero.tabAbout")}</a>
              <a href="#metodo">{t("home.hero.tabMethod")}</a>
              <a href="#blog">{t("home.hero.tabBlog")}</a>
            </nav>
            <Link className="speaker-hero__cta" to="/contacto">
              {t("home.hero.primaryCta")}
              <ArrowForwardIcon />
            </Link>
          </Container>
        </div>
      </section>

      {/* <section className="stats-band" aria-label={t("home.statsAria")}>
        <Container className="stats-grid">
          {stats.map((id) => (
            <div className="stat-card" key={id}>
              <strong>{t(`stats.${id}.value`)}</strong>
              <span>{t(`stats.${id}.label`)}</span>
            </div>
          ))}
        </Container>
      </section> */}

      <section className="about-carlos-section" id="origen">
        <Container>
          <div className="about-carlos-heading">
            <p className="eyebrow">{t("home.aboutCarlos.eyebrow")}</p>
            <h2>{t("home.aboutCarlos.title")}</h2>
          </div>

          <article className="about-panel about-panel--origin">
            <div className="about-panel__copy">
              <span className="about-panel__number">01</span>
              <p className="eyebrow">{t("home.origin.eyebrow")}</p>
              <h3>
                <EmphasizedCafeTitle title={t("home.origin.title")} />
              </h3>
            </div>
            <div className="origin-story">
              <p>{t("home.origin.paragraph1")}</p>
              <p>{t("home.origin.paragraph2")}</p>
            </div>
          </article>

          <article className="about-panel about-panel--what">
            <div className="about-panel__media">
              <img src="/images/cafe-siniestro-consultoria-cafe.png" alt={t("home.aboutCarlos.what.imageAlt")} />
            </div>
            <div className="about-panel__copy">
              <span className="about-panel__number">02</span>
              <p className="eyebrow">{t("home.aboutCarlos.what.eyebrow")}</p>
              <h3>{t("home.aboutCarlos.what.title")}</h3>
              <p>{t("home.aboutCarlos.what.description")}</p>
            </div>
          </article>

          <div className="speaker-options">
            <article className="speaker-option speaker-option--formats">
              <div className="speaker-option__copy">
                <span className="about-panel__number">03</span>
                <p className="eyebrow">{t("home.aboutCarlos.speaker.option2.eyebrow")}</p>
                <h3>{t("home.aboutCarlos.speaker.option2.title")}</h3>
                <p>{t("home.aboutCarlos.speaker.option2.description")}</p>
                <Link className="btn btn-primary" to="/contacto">
                  {t("home.aboutCarlos.speaker.cta")}
                  <ArrowForwardIcon />
                </Link>
              </div>
              <div className="speaker-format-side">
                <figure className="speaker-format-photo">
                  <img src="/images/carlos_miguel_speaker.png" alt={t("home.aboutCarlos.speaker.option2.imageAlt")} />
                </figure>
                <div className="speaker-format-list">
                  <div>
                    <strong>{t("home.aboutCarlos.speaker.option2.format1Title")}</strong>
                    <span>{t("home.aboutCarlos.speaker.option2.format1Text")}</span>
                  </div>
                  <div>
                    <strong>{t("home.aboutCarlos.speaker.option2.format2Title")}</strong>
                    <span>{t("home.aboutCarlos.speaker.option2.format2Text")}</span>
                  </div>
                  <div>
                    <strong>{t("home.aboutCarlos.speaker.option2.format3Title")}</strong>
                    <span>{t("home.aboutCarlos.speaker.option2.format3Text")}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section section-dark" id="metodo">
        <Container className="method-layout">
          <div className="method-intro">
            <p className="eyebrow">{t("home.method.eyebrow")}</p>
            <h2>{t("home.method.title")}</h2>
            <p>{t("home.method.description")}</p>
          </div>
          <div className="method-steps">
            {methodSteps.map((id) => (
              <article className="method-step" key={id}>
                <span>{t(`methodSteps.${id}.number`)}</span>
                <h3>{t(`methodSteps.${id}.title`)}</h3>
                <p>{t(`methodSteps.${id}.description`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="blog">
        <Container>
          <div className="section-header section-header--with-action">
            <div>
              <p className="eyebrow">{t("home.blog.eyebrow")}</p>
              <h2>{t("home.blog.title")}</h2>
            </div>
            <Link className="text-link" to="/blog">
              {t("home.blog.cta")}
            </Link>
          </div>
          <div className="post-grid">
            {blogPosts.map((post) => (
              <article className="post-card" key={post.id}>
                <div className="post-card__meta">
                  <span>{t(`blogPosts.${post.id}.category`)}</span>
                  <span>{t(`blogPosts.${post.id}.readTime`)}</span>
                </div>
                <h3>{t(`blogPosts.${post.id}.title`)}</h3>
                <p>{t(`blogPosts.${post.id}.excerpt`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="cta-section">
        <Container className="cta-panel">
          <div>
            <p className="eyebrow">{t("home.cta.eyebrow")}</p>
            <h2>{t("home.cta.title")}</h2>
            <p>{t("home.cta.description")}</p>
          </div>
          <Link className="btn btn-primary" to="/contacto">
            {t("common.contact")}
          </Link>
        </Container>
      </section>
    </main>
  );
}

export default HomePage;
