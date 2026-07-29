import React, { useState } from 'react'
import close from '../assets/x.svg'
import plus from '../assets/+.svg'

export default function Faq() {
  const [openItems, setOpenItems] = useState([0, 6])

  const faqData = [
  {
    question: 'СКОЛЬКО СТОИТ РЕМОНТ КОНДИЦИОНЕРА?',
    answer:
      'Стоимость зависит от типа неисправности и необходимых работ. Точную цену мастер назовёт после диагностики.'
  },
  {
    question: 'С КАКИМИ ТИПАМИ КОНДИЦИОНЕРОВ ВЫ РАБОТАЕТЕ?',
    answer:
      'Мы обслуживаем все популярные бренды и типы кондиционеров: сплит, инверторные, кассетные и канальные системы.'
  },
  {
    question: 'СКОЛЬКО ВРЕМЕНИ ЗАНИМАЕТ РЕМОНТ?',
    answer:
      'В зависимости от неисправности ремонт обычно занимает от 1 до 3 часов.'
  },
  {
    question: 'РАБОТАЕТЕ ЛИ ВЫ В ВЫХОДНЫЕ ДНИ?',
    answer:
      'Да, при необходимости мы предоставляем услуги и в выходные дни.'
  },
  {
    question: 'ПРЕДОСТАВЛЯЕТСЯ ЛИ ГАРАНТИЯ?',
    answer:
      'Да, гарантия предоставляется на выполненные работы и заменённые запчасти.'
  },
  {
    question: 'КОГДА НУЖНА ПРОФИЛАКТИКА КОНДИЦИОНЕРА?',
    answer:
      'Профилактика рекомендуется, если кондиционер хуже охлаждает, появились посторонние шумы или снизилась эффективность работы.'
  },
  {
    question: 'МОЖНО ЛИ ВЫЗВАТЬ МАСТЕРА НА ДОМ?',
    answer:
      'Да, мастер выезжает по указанному адресу и проводит диагностику кондиционера на месте.'
  }
];

  const toggleFaq = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="Faq">
      <div className="container">
        <div className="section-title">
          <h5>Часто задаваемые вопросы</h5>
          <h2>ВОПРОСЫ И ОТВЕТЫ ПО УСЛУГАМ КОНДИЦИОНЕРОВ</h2>
        </div>

        <div className="faq-grid">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index)

            return (
              <div
                className={`faq-item ${isOpen ? 'active' : ''}`}
                key={index}
              >
                <button
                  className="faq-header"
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{item.question}</h3>

                  <span className="faq-icon">
                    <img
                      src={isOpen ? close : plus}
                      alt=""
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}