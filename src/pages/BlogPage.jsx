import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import { Link } from "react-router-dom";
import Container from "../components/primitives/Container";
import { blogPosts } from "../data/cafeContent";
import { useI18n } from "../lang/i18n";

function BlogPage() {
  const { t } = useI18n();
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1);

  return (
    <main>
      <section className="page-hero page-hero--blog">
        <Container className="page-hero__layout">
          <div>
            <p className="eyebrow">{t("blogPage.hero.eyebrow")}</p>
            <h1>{t("blogPage.hero.title")}</h1>
            <p>{t("blogPage.hero.description")}</p>
          </div>

          <aside className="blog-brief">
            <LocalCafeOutlinedIcon />
            <h2>{t("blogPage.brief.title")}</h2>
            <p>{t("blogPage.brief.description")}</p>
          </aside>
        </Container>
      </section>

      <section className="section">
        <Container className="blog-feature-layout">
          <article className="featured-post">
            <div className="post-card__meta">
              <span>{t(`blogPosts.${featuredPost.id}.category`)}</span>
              <span>{t(`blogPosts.${featuredPost.id}.readTime`)}</span>
            </div>
            <span className="featured-post__type">{t(`blogPosts.${featuredPost.id}.type`)}</span>
            <h2>{t(`blogPosts.${featuredPost.id}.title`)}</h2>
            <p>{t(`blogPosts.${featuredPost.id}.excerpt`)}</p>
            <Link className="featured-post__link" to={`/blog/${featuredPost.slug}`}>
              {t("common.readMore")}
              <ArrowForwardIcon />
            </Link>
          </article>

          <div className="blog-side-stack">
            {secondaryPosts.map((post) => (
              <article className="post-card post-card--compact" key={post.id}>
                <div className="post-card__meta">
                  <span>{t(`blogPosts.${post.id}.category`)}</span>
                  <span>{t(`blogPosts.${post.id}.readTime`)}</span>
                </div>
                <h3>{t(`blogPosts.${post.id}.title`)}</h3>
                <p>{t(`blogPosts.${post.id}.excerpt`)}</p>
                <Link className="post-card__link" to={`/blog/${post.slug}`}>
                  {t("common.readMore")}
                  <ArrowForwardIcon />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="cta-section">
        <Container className="cta-panel">
          <div>
            <p className="eyebrow">{t("blogPage.cta.eyebrow")}</p>
            <h2>{t("blogPage.cta.title")}</h2>
            <p>{t("blogPage.cta.description")}</p>
          </div>
          <Link className="btn btn-primary" to="/contacto">
            {t("blogPage.cta.button")}
          </Link>
        </Container>
      </section>
    </main>
  );
}

export default BlogPage;
