import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { Link } from "react-router-dom";
import Container from "../components/primitives/Container";
import {
  blogPosts,
  courses,
  focusAreas,
  methodSteps,
  stats,
} from "../data/cafeContent";
import { useI18n } from "../lang/i18n";

function HomePage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="hero">
        <Container className="hero__grid">
          <div className="hero__copy">
            <div className="hero__brand-row">
              <img src="/images/cafesiniestro-logo.jpeg" alt="" />
              <span>{t("home.hero.eyebrow")}</span>
            </div>
            <h1>{t("home.hero.title")}</h1>
            <p>{t("home.hero.description")}</p>
            <div className="hero__actions">
              <Link className="btn btn-primary" to="/cursos">
                {t("home.hero.primaryCta")}
                <ArrowForwardIcon />
              </Link>
              <Link className="btn btn-secondary" to="/blog">
                {t("home.hero.secondaryCta")}
              </Link>
            </div>
            <div className="hero__topics" aria-label={t("home.hero.topicsAria")}>
              <span>{t("home.hero.topic1")}</span>
              <span>{t("home.hero.topic2")}</span>
              <span>{t("home.hero.topic3")}</span>
            </div>
            <div className="hero__proof">
              <span>{t("home.hero.proof")}</span>
            </div>
          </div>

          <div className="hero__visual" aria-label={t("home.hero.visualAria")}>
            <div className="hero__visual-main">
              <img className="hero__visual-logo" src="/images/cafesiniestro-logo.jpeg" alt="" />
              <div>
                <p className="eyebrow">{t("brand.name")}</p>
                <h2>{t("home.hero.visualTitle")}</h2>
              </div>
            </div>
            <div className="hero__signal-grid">
              <div>
                <ShieldOutlinedIcon />
                <span>{t("home.hero.signalRisk")}</span>
              </div>
              <div>
                <RouteOutlinedIcon />
                <span>{t("home.hero.signalSupply")}</span>
              </div>
              <div>
                <LocalCafeOutlinedIcon />
                <span>{t("home.hero.signalTalks")}</span>
              </div>
            </div>
            <article className="hero__event-card">
              <span>{t("home.hero.eventEyebrow")}</span>
              <strong>{t("home.hero.eventText")}</strong>
            </article>
          </div>
        </Container>
      </section>

      <section className="stats-band" aria-label={t("home.statsAria")}>
        <Container className="stats-grid">
          {stats.map((id) => (
            <div className="stat-card" key={id}>
              <strong>{t(`stats.${id}.value`)}</strong>
              <span>{t(`stats.${id}.label`)}</span>
            </div>
          ))}
        </Container>
      </section>

      <section className="section section-dark">
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

      <section className="section origin-section">
        <Container className="origin-layout">
          <div>
            <p className="eyebrow">{t("home.origin.eyebrow")}</p>
            <h2>{t("home.origin.title")}</h2>
          </div>
          <article className="origin-story">
            <p>{t("home.origin.paragraph1")}</p>
            <p>{t("home.origin.paragraph2")}</p>
          </article>
        </Container>
      </section>

      <section className="section home-about-section">
        <Container>
          <div className="split-heading">
            <div>
              <p className="eyebrow">{t("home.about.eyebrow")}</p>
              <h2>{t("home.about.title")}</h2>
            </div>
            <p>{t("home.about.description")}</p>
          </div>
          <div className="feature-grid">
            {focusAreas.map((id) => (
              <article className="feature-card" key={id}>
                <span>{t(`focusAreas.${id}.title`)}</span>
                <p>{t(`focusAreas.${id}.description`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section agenda-section">
        <Container className="agenda-layout">
          <div className="agenda-feature">
            <p className="eyebrow">{t("home.agenda.eyebrow")}</p>
            <h2>{t("home.agenda.title")}</h2>
            <p>{t("home.agenda.description")}</p>
            <div className="agenda-feature__actions">
              <Link className="btn btn-primary" to="/cursos">
                {t("home.agenda.primaryCta")}
              </Link>
              <Link className="text-link" to="/contacto">
                {t("home.agenda.secondaryCta")}
              </Link>
            </div>
          </div>
          <div className="course-stack">
            {courses.slice(0, 3).map((course, index) => (
              <article className="course-card course-card--stacked" key={course.id}>
                <div>
                  <span className="pill">{t(`courses.${course.id}.tag`)}</span>
                  <h3>{t(`courses.${course.id}.title`)}</h3>
                  <p>{t(`courses.${course.id}.description`)}</p>
                </div>
                <small>
                  <CalendarMonthOutlinedIcon />
                  {t(`courses.${course.id}.duration`)} · {t(`courses.${course.id}.mode`)}
                </small>
                <span className="course-card__index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
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
