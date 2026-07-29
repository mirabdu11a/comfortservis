import React, { useState } from 'react'
import p1 from '../assets/images/services/typ1.png'
import p2 from '../assets/images/services/typ2.png'
import p3 from '../assets/images/services/typ3.png'
import p4 from '../assets/images/services/typ4.png'

const tabs = [
  {
    id: 'split',
    label: 'Сплит кондиционер',
    title: 'СПЛИТ КОНДИЦИОНЕР',
    description:
      'Мы предоставляем профессиональную установку, ремонт и техническое обслуживание сплит-кондиционеров. Быстро и надёжно устраняем такие проблемы, как отсутствие охлаждения, протечки воды, шум или отсутствие нагрева. Качественный и безопасный сервис для дома и офиса.',
    features: [
      { label: 'Быстрое охлаждение', value: 95 },
      { label: 'Низкий уровень шума', value: 88 },
      { label: 'Энергоэффективность', value: 80 },
      { label: 'Современный дизайн', value: 92 },
    ],
    image: p1,
  },
  {
    id: 'inverter',
    label: 'Инверторный кондиционер',
    title: 'ИНВЕРТОРНЫЙ КОНДИЦИОНЕР',
    description:
      'Инверторные кондиционеры — это передовая технология энергосбережения. Они автоматически регулируют скорость компрессора, благодаря чему потребление электроэнергии снижается на 40–60%. Обеспечивают быстрое охлаждение и нагрев, а также стабильную работу.',
    features: [
      { label: 'Энергоэффективность', value: 98 },
      { label: 'Быстрое охлаждение/нагрев', value: 90 },
      { label: 'Низкий уровень шума', value: 95 },
      { label: 'Долгий срок службы', value: 93 },
    ],
    image: p2,
  },
  {
    id: 'kasseta',
    label: 'Кассетный кондиционер',
    title: 'КАССЕТНЫЙ КОНДИЦИОНЕР',
    description:
      'Кассетные кондиционеры — идеальное решение для офисов и коммерческих помещений. Устанавливаются в потолок и распределяют воздух на 360°. Обеспечивают равномерное охлаждение или нагрев больших площадей.',
    features: [
      { label: 'Охват большой площади', value: 97 },
      { label: 'Равномерное распределение воздуха', value: 94 },
      { label: 'Профессиональный внешний вид', value: 96 },
      { label: 'Удобное управление', value: 85 },
    ],
    image: p3,
  },
  {
    id: 'kanal',
    label: 'Канальный кондиционер',
    title: 'КАНАЛЬНЫЙ КОНДИЦИОНЕР',
    description:
      'Канальные кондиционеры предназначены для скрытой установки. Воздух подаётся через воздуховоды одновременно в несколько помещений. Обеспечивают профессиональный климат-контроль без нарушения интерьера.',
    features: [
      { label: 'Охват нескольких комнат', value: 99 },
      { label: 'Скрытая установка', value: 100 },
      { label: 'Централизованное управление', value: 88 },
      { label: 'Низкий уровень шума', value: 82 },
    ],
    image: p4,
  },
];

export default function Types() {
  const [activeId, setActiveId] = useState('split')

  const active = tabs.find((t) => t.id === activeId)

  return (
    <section className="Types">
      <div className="container">

        {/* Header */}
        <div className="Types__header">
          <div className="Types__header-left">
            <span className="Types__eyebrow">Услуги по кондиционерам</span>
            <h2 className="Types__title">
              ПРОФЕССИОНАЛЬНЫЙ СЕРВИС И  НАДЁЖНЫЕ РЕШЕНИЯ
            </h2>
          </div>
          <div className="Types__header-right">
            <p className="Types__subtitle">
              Обслуживание всех типов кондиционеров: установка, ремонт и другие услуги. Работаем быстро и качественно.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="Types__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`Types__tab${activeId === tab.id ? ' Types__tab--active' : ''}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="Types__content">

          {/* Left — image */}
          <div className="Types__image">
            {active.image ? (
              <img src={active.image} alt={active.title} />
            ) : (
              <div className="Types__image-placeholder">
                <span>❄️</span>
              </div>
            )}
          </div>

          {/* Right — info */}
          <div className="Types__info">
            <h3 className="Types__info-title">{active.title}</h3>
            <p className="Types__info-desc">{active.description}</p>

            <p className="Types__features-label">Преимущества:</p>
            <div className="Types__features">
              {active.features.map((f) => (
                <div className="Types__feature" key={f.label}>
                  <span className="Types__feature-label">{f.label}</span>
                  <div className="Types__bar">
                    <div
                      className="Types__bar-fill"
                      style={{ width: `${f.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
