import { Link } from "react-router-dom";
import Container from "../components/primitives/Container";
import { useI18n } from "../lang/i18n";

function NotFoundPage() {
  const { t } = useI18n();

  return (
    <main className="surface-section">
      <Container>
        <h1 style={{ color: "var(--color-primary)", marginTop: 0 }}>{t("pages.notFound.title")}</h1>
        <p style={{ color: "var(--color-text-muted)" }}>{t("pages.notFound.description")}</p>
        <Link className="btn btn-primary" to="/">{t("pages.notFound.backHome")}</Link>
      </Container>
    </main>
  );
}

export default NotFoundPage;
