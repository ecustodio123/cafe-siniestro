import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Container from "../components/primitives/Container";
import { useI18n } from "../lang/i18n";

function ContactPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="page-intro">
        <Container className="page-intro__inner">
          <p className="eyebrow">{t("contactPage.hero.eyebrow")}</p>
          <h1>{t("contactPage.hero.title")}</h1>
          <p>{t("contactPage.hero.description")}</p>
        </Container>
      </section>

      <section className="section">
        <Container className="contact-layout">
          <div className="contact-panel">
            <h2>{t("contactPage.panelTitle")}</h2>
            <div className="contact-options">
              <div>
                <EventAvailableOutlinedIcon />
                <span>{t("contactPage.options.talk")}</span>
              </div>
              <div>
                <GroupsOutlinedIcon />
                <span>{t("contactPage.options.course")}</span>
              </div>
              <div>
                <EmailOutlinedIcon />
                <span>{t("contactPage.options.content")}</span>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <label>
              {t("contactPage.form.name")}
              <input type="text" name="name" placeholder={t("contactPage.form.namePlaceholder")} />
            </label>
            <label>
              {t("contactPage.form.email")}
              <input type="email" name="email" placeholder={t("contactPage.form.emailPlaceholder")} />
            </label>
            <label>
              {t("contactPage.form.interest")}
              <select name="interest" defaultValue="">
                <option value="" disabled>
                  {t("contactPage.form.selectPlaceholder")}
                </option>
                <option>{t("contactPage.form.options.course")}</option>
                <option>{t("contactPage.form.options.webinar")}</option>
                <option>{t("contactPage.form.options.event")}</option>
                <option>{t("contactPage.form.options.content")}</option>
              </select>
            </label>
            <label>
              {t("contactPage.form.message")}
              <textarea name="message" rows="5" placeholder={t("contactPage.form.messagePlaceholder")} />
            </label>
            <button className="btn btn-primary" type="submit">
              {t("contactPage.form.submit")}
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
}

export default ContactPage;
