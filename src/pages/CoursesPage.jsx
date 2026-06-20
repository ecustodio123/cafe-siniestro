import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Link } from "react-router-dom";
import Container from "../components/primitives/Container";
import { courses } from "../data/cafeContent";
import { useI18n } from "../lang/i18n";

function CoursesPage() {
  const { t } = useI18n();
  const featuredCourse = courses[0];

  return (
    <main>
      <section className="page-hero page-hero--courses">
        <Container className="page-hero__layout">
          <div>
            <p className="eyebrow">{t("coursesPage.hero.eyebrow")}</p>
            <h1>{t("coursesPage.hero.title")}</h1>
            <p>{t("coursesPage.hero.description")}</p>
            <div className="page-hero__actions">
              <Link className="btn btn-primary" to="/contacto">
                {t("coursesPage.hero.primaryCta")}
              </Link>
              <Link className="btn btn-secondary" to="/blog">
                {t("coursesPage.hero.secondaryCta")}
              </Link>
            </div>
          </div>

          <aside className="course-feature">
            <span className="pill pill-white">{t(`courses.${featuredCourse.id}.tag`)}</span>
            <h2>{t(`courses.${featuredCourse.id}.title`)}</h2>
            <p>{t(`courses.${featuredCourse.id}.outcome`)}</p>
            <dl>
              <div>
                <dt>{t("coursesPage.feature.duration")}</dt>
                <dd>{t(`courses.${featuredCourse.id}.duration`)}</dd>
              </div>
              <div>
                <dt>{t("coursesPage.feature.mode")}</dt>
                <dd>{t(`courses.${featuredCourse.id}.mode`)}</dd>
              </div>
              <div>
                <dt>{t("coursesPage.feature.level")}</dt>
                <dd>{t(`courses.${featuredCourse.id}.level`)}</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="section courses-catalog-section">
        <Container>
          <div className="section-header section-header--with-action">
            <div>
              <p className="eyebrow">{t("coursesPage.agenda.eyebrow")}</p>
              <h2>{t("coursesPage.agenda.title")}</h2>
            </div>
            <Link className="text-link" to="/contacto">
              {t("coursesPage.agenda.cta")}
            </Link>
          </div>
          <div className="course-catalog">
            <article className="speaker-card">
              <img src="/images/carlos-miguel-expositor-card.jpeg" alt={t("coursesPage.speaker.cardAlt")} />
              <div className="speaker-card__content">
                <span className="pill">{t("coursesPage.speaker.badge")}</span>
                <h3>{t("coursesPage.speaker.name")}</h3>
                <p className="speaker-card__role">{t("coursesPage.speaker.role")}</p>
                <p>{t("coursesPage.speaker.description")}</p>
                <Link className="course-program-card__link" to="/contacto">
                  <AccountCircleOutlinedIcon />
                  {t("coursesPage.speaker.cta")}
                </Link>
              </div>
            </article>
            {courses.map((course, index) => (
              <article className="course-program-card" key={course.id}>
                <div className="course-program-card__top">
                  <span className="pill">{t(`courses.${course.id}.tag`)}</span>
                  <span className="course-program-card__number">0{index + 1}</span>
                </div>
                <h3>{t(`courses.${course.id}.title`)}</h3>
                <p>{t(`courses.${course.id}.description`)}</p>
                <div className="course-program-card__meta">
                  <span>
                    <CalendarMonthOutlinedIcon />
                    {t(`courses.${course.id}.duration`)}
                  </span>
                  <span>{t(`courses.${course.id}.mode`)}</span>
                  <span>{t(`courses.${course.id}.level`)}</span>
                </div>
                <div className="topic-list">
                  {course.topics.map((topic) => (
                    <span key={topic}>{t(`courses.${course.id}.topics.${topic}`)}</span>
                  ))}
                </div>
                <Link className="course-program-card__link" to="/contacto">
                  {t("coursesPage.courseLink")}
                  <EastOutlinedIcon />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="cta-section">
        <Container className="cta-panel">
          <div>
            <p className="eyebrow">{t("coursesPage.cta.eyebrow")}</p>
            <h2>{t("coursesPage.cta.title")}</h2>
            <p>{t("coursesPage.cta.description")}</p>
          </div>
          <Link className="btn btn-primary" to="/contacto">
            {t("common.talk")}
          </Link>
        </Container>
      </section>
    </main>
  );
}

export default CoursesPage;
