import { useI18n } from "../../lang/i18n";

function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="language-inline" aria-label={t("language.switchLabel")}>
      <button
        type="button"
        className={`language-inline__option ${language === "es" ? "is-active" : ""}`.trim()}
        onClick={() => setLanguage("es")}
      >
        {t("language.es")}
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        className={`language-inline__option ${language === "en" ? "is-active" : ""}`.trim()}
        onClick={() => setLanguage("en")}
      >
        {t("language.en")}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
