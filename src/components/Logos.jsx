import React from 'react'
import p1 from '../assets/logos/1.svg'
import p2 from '../assets/logos/2.svg'
import p3 from '../assets/logos/3.svg'
import p4 from '../assets/logos/4.svg'
import p5 from '../assets/logos/5.svg'
import p6 from '../assets/logos/6.svg'
import p7 from '../assets/logos/7.svg'
import p8 from '../assets/logos/8.svg'


export default function Logos() {
  const logos = [
    p1, p2, p3, p4,
    p5, p6, p7, p8,
   
  ]

  return (
    <section className="Logos">
      <div className="container">
        <div className="section-title">
          <h5>Ishonchli brendlar</h5>
          <h2>Biz xizmat ko‘rsatadigan brendlar</h2>
        </div>

        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}