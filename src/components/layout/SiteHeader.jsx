import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { siteNav } from "../../data/cafeContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import BrandLogo from "./BrandLogo";
import LanguageSwitcher from "./LanguageSwitcher";

function SiteHeader() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${menuOpen ? "is-menu-open" : ""}`.trim()}>
      <Container className="header-top">
        <NavLink to="/" aria-label={t("header.homeAria")}>
          <BrandLogo />
        </NavLink>

        <div className="header-mobile-actions">
          <LanguageSwitcher />
          <button
            type="button"
            className="header-menu-button"
            aria-label={menuOpen ? t("header.closeMenu") : t("header.openMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <nav className="header-links" aria-label={t("header.navAria")}>
          {siteNav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t(`navigation.${link.key}`)}
            </NavLink>
          ))}
          <NavLink className="header-cta" to="/contacto" onClick={closeMenu}>
            {t("header.cta")}
          </NavLink>
          <div className="header-desktop-language">
            <LanguageSwitcher />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default SiteHeader;
