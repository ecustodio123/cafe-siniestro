import emailjs from "@emailjs/browser";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { useRef, useState } from "react";
import Container from "../components/primitives/Container";
import { SHOW_COURSES } from "../data/cafeContent";
import { useI18n } from "../lang/i18n";

function ContactPage() {
  const { t } = useI18n();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isConfigured) {
      setStatus("config_error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS send error", error);
      setStatus("error");
    }
  };

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
              {SHOW_COURSES ? (
                <div>
                  <GroupsOutlinedIcon />
                  <span>{t("contactPage.options.course")}</span>
                </div>
              ) : null}
              <div>
                <EmailOutlinedIcon />
                <span>{t("contactPage.options.content")}</span>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form_source" value="Página de contacto" />
            <label>
              {t("contactPage.form.name")}
              <input type="text" name="user_name" placeholder={t("contactPage.form.namePlaceholder")} required />
            </label>
            <label>
              {t("contactPage.form.email")}
              <input type="email" name="user_email" placeholder={t("contactPage.form.emailPlaceholder")} required />
            </label>
            <label>
              {t("contactPage.form.interest")}
              <select name="interest" defaultValue="" required>
                <option value="" disabled>
                  {t("contactPage.form.selectPlaceholder")}
                </option>
                {SHOW_COURSES ? <option>{t("contactPage.form.options.course")}</option> : null}
                <option>{t("contactPage.form.options.webinar")}</option>
                <option>{t("contactPage.form.options.event")}</option>
                <option>{t("contactPage.form.options.content")}</option>
              </select>
            </label>
            <label>
              {t("contactPage.form.message")}
              <textarea name="message" rows="5" placeholder={t("contactPage.form.messagePlaceholder")} required />
            </label>
            {status === "success" ? <p className="contact-feedback is-success">{t("contactPage.form.feedback.success")}</p> : null}
            {status === "error" ? <p className="contact-feedback is-error">{t("contactPage.form.feedback.error")}</p> : null}
            {status === "config_error" ? (
              <p className="contact-feedback is-error">{t("contactPage.form.feedback.configError")}</p>
            ) : null}
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? t("contactPage.form.sending") : t("contactPage.form.submit")}
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
}

export default ContactPage;
