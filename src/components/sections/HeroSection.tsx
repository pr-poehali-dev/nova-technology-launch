import type React from "react"
import { useState, useEffect } from "react"

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["АДЫГЕИ.", "ПЛАНЕТЫ."]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section className="info-section">
      <div className="left-part">
        <h1>
          <span className="d-flex">
            {["Л", "Е", "С", "А"].map((char, index) => (
              <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="text tracking-tighter">{currentText}</span>
        </h1>
        <p className="tracking-widest">
          Школьный экологический проект по восстановлению и охране лесных экосистем Адыгеи через посадку деревьев.<br />
          Авторы: Соколова Ульяна и Воронцов Кирилл, 9«Б» класс.
        </p>
        <a href="#plan" className="book-link">
          <span className="linktext tracking-tighter text-3xl">Изучить проект</span>
          <span className="arrow">
            <span></span>
          </span>
        </a>
      </div>
      <div className="right-part">
        <div className="particles-container">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div className="bg-line">
          <img
            src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
            alt="Line"
            style={{ filter: "hue-rotate(80deg) saturate(1.5)" }}
          />
          <img
            src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
            alt="Line"
            style={{ filter: "hue-rotate(80deg) saturate(1.5)" }}
          />
        </div>
        <div className="bg-dash-circle">
          <img
            src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
            alt="dash-circle"
            style={{ filter: "hue-rotate(80deg) saturate(1.5)" }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
