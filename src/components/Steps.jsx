import React from 'react'

export default function Steps() {
  const steps = [
    {
      number: '01',
      title: 'ОСТАВЛЯЕТЕ ЗАЯВКУ',
      text: 'Свяжитесь с нами по телефону или через мессенджер. Мы выслушаем вашу проблему и предоставим информацию по необходимой услуге.'
    },
    {
      number: '02',
      title: 'ДИАГНОСТИКА И ПРОВЕРКА',
      text: 'Мастер проверяет устройство, выявляет причину неисправности и предлагает решение по ремонту.'
    },
    {
      number: '03',
      title: 'СОГЛАСОВАНИЕ ЦЕНЫ И РАБОТ',
      text: 'Заранее согласовываются необходимые работы, запасные части и стоимость услуг.'
    },
    {
      number: '04',
      title: 'ВЫПОЛНЯЕМ РЕМОНТ',
      text: 'Качественно ремонтируем котёл, проверяем его работу и сдаём готовым к эксплуатации. При необходимости предоставляется гарантия.'
    }
    ];

  return (
    <section className="Steps">
      <div className="container">

        <div className="section-title">
          <h5>Как мы работаем</h5>
          <h2>ПРОЦЕСС ОТ ЗАЯВКИ ДО РЕМОНТА</h2>
        </div>

        <div className="steps-body">
          {steps.map((item, index) => (
            <div className="steps-card" key={index}>
              <h3>{item.number}</h3>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}