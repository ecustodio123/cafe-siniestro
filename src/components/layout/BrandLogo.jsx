import { useI18n } from "../../lang/i18n";

function BrandLogo({ className = "" }) {
  const { t } = useI18n();

  return (
    <div className={`brand-logo ${className}`.trim()}>
      <span className="brand-logo__mark">
        <img src="/images/cafesiniestro-logo.jpeg" alt="" />
      </span>
      <span>
        <span className="brand-logo__word">{t("brand.name")}</span>
        <span className="brand-logo__sub">{t("brand.subtitle")}</span>
      </span>
    </div>
  );
}

export default BrandLogo;
