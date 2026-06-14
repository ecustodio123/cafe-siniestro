import { NavLink } from "react-router-dom";
import { siteNav } from "../../data/cafeContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div className="footer-brand">
          <h3>{t("brand.name")}</h3>
          <p>{t("footer.description")}</p>
        </div>
        <ul className="footer-links">
          {siteNav.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to}>{t(`navigation.${link.key}`)}</NavLink>
            </li>
          ))}
        </ul>
        <ul className="footer-links">
          <li>{t("footer.highlights.courses")}</li>
          <li>{t("footer.highlights.publications")}</li>
          <li>{t("footer.highlights.events")}</li>
        </ul>
      </Container>
      <div className="footer-bottom">{t("footer.rights")}</div>
    </footer>
  );
}

export default SiteFooter;
