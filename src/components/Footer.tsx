import { Mail, MapPin, BookOpen, TreePine, Leaf, Globe } from "lucide-react"

const data = {
  sections: {
    plan: "#plan",
    facts: "#",
    cta: "#cta",
  },
  contact: {
    email: "eco-adygea@school.ru",
    address: "Республика Адыгея, Россия",
  },
  authors: {
    names: "Соколова Ульяна и Воронцов Кирилл",
    grade: "9«Б» класс",
  },
  company: {
    name: "Леса Адыгеи",
    description:
      "Школьный проект по восстановлению и охране лесных экосистем Республики Адыгея через посадку деревьев и образовательные программы.",
  },
}

const planLinks = [
  { text: "Введение и актуальность", href: data.sections.plan },
  { text: "География и климат", href: data.sections.plan },
  { text: "Проблемы экосистем", href: data.sections.plan },
  { text: "Методы восстановления", href: data.sections.plan },
]

const methodLinks = [
  { text: "Селекция видов деревьев", href: data.sections.plan },
  { text: "Организация посадки", href: data.sections.plan },
  { text: "Образовательная программа", href: data.sections.plan },
  { text: "Оценка эффективности", href: data.sections.plan },
]

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: MapPin, text: data.contact.address, isAddress: true },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .ai-footer {
          background-color: #012a10;
          position: relative;
          overflow: hidden;
        }

        .ai-footer::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #2d8a2d;
          filter: blur(140px);
          height: 60%;
          width: 50%;
          position: absolute;
          top: 20%;
          left: -25%;
          z-index: 0;
        }

        .ai-footer::after {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.2;
          background: #4ab44a;
          filter: blur(120px);
          height: 40%;
          width: 40%;
          position: absolute;
          bottom: 10%;
          right: -20%;
          z-index: 0;
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 30px 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .brand-icon {
          width: 50px;
          height: 50px;
          background: #4ab44a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #012a10;
        }

        .brand-name {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: #ffffff;
          text-transform: uppercase;
        }

        .brand-description {
          font-family: "Montserrat";
          font-size: 16px;
          line-height: 1.8;
          color: #aaa;
          margin-bottom: 40px;
          max-width: 400px;
        }

        .authors-block {
          background: rgba(74, 180, 74, 0.08);
          border: 1px solid #1a4a1a;
          border-radius: 12px;
          padding: 20px;
          margin-top: 10px;
        }

        .authors-block p {
          font-family: "Montserrat";
          font-size: 13px;
          color: #aaa;
          margin: 0 0 6px;
        }

        .authors-block strong {
          color: #4ab44a;
          font-size: 14px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .link-column h3 {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #4ab44a;
          text-transform: uppercase;
          margin: 0 0 25px;
          letter-spacing: 1px;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          margin-bottom: 15px;
        }

        .link-item a {
          font-family: "Montserrat";
          font-size: 14px;
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .link-item a:hover {
          color: #ffffff;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          color: #4ab44a;
          flex-shrink: 0;
        }

        .contact-text {
          font-family: "Montserrat";
          font-size: 14px;
          color: #aaa;
        }

        .footer-bottom {
          border-top: 1px solid #1a4a1a;
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          font-family: "Montserrat";
          font-size: 14px;
          color: #aaa;
        }

        .copyright span {
          color: #4ab44a;
        }

        @media screen and (max-width: 1199px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 767px) {
          .footer-container {
            padding: 60px 16px 24px;
          }
          .footer-links {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <footer className="ai-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="brand-icon">
                  <TreePine size={24} />
                </div>
                <span className="brand-name">Леса Адыгеи</span>
              </div>
              <p className="brand-description">{data.company.description}</p>
              <div className="authors-block">
                <p>Авторы проекта:</p>
                <strong>{data.authors.names}</strong>
                <p style={{ marginTop: "4px" }}>{data.authors.grade}</p>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-column">
                <h3>
                  <BookOpen size={14} style={{ display: "inline", marginRight: "6px" }} />
                  План проекта
                </h3>
                <ul className="link-list">
                  {planLinks.map((link, i) => (
                    <li className="link-item" key={i}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h3>
                  <Leaf size={14} style={{ display: "inline", marginRight: "6px" }} />
                  Методология
                </h3>
                <ul className="link-list">
                  {methodLinks.map((link, i) => (
                    <li className="link-item" key={i}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h3>
                  <Globe size={14} style={{ display: "inline", marginRight: "6px" }} />
                  Контакты
                </h3>
                {contactInfo.map((item, i) => (
                  <div className="contact-item" key={i}>
                    <item.icon className="contact-icon" />
                    <span className="contact-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © 2026 <span>Леса Адыгеи</span> — школьный экологический проект
            </p>
            <p className="copyright">
              Сохраним природу <span>Адыгеи</span> вместе
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
