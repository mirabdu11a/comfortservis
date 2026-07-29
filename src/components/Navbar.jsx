import React, { useState } from 'react'
import logo from '../assets/footer-logo.svg'
import telegram from '../assets/telegram.svg'
import phoneIcon from '../assets/phoneIcon.svg'
import burger from '../assets/burger.svg'
import clsoeBurger from '../assets/close-burger.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='Navbar'>
      <div className='nav-head'>
        <div className="container">
          <div className='nav-head__body'>
            <div className='block1'>
              <img src={logo} alt="brand logo" />
              <div>Ремонт котлов и кондиционеров</div>
            </div>

            <div className="block2">
              <a href="https://t.me/Javlon_6767" target='_blank'>
                <img src={telegram} alt="telegram" />
              </a>
              <div className='phone-block'>
                <a href="tel:+998919486767">
                  <img src={phoneIcon} alt="phone" /> +998 91 948 67 67
                </a>
                <p>Работаем 24/7, включая выходные</p>
              </div>
              <button>Контакты</button>
            </div>

            {/* Burger button - faqat mobileda ko'rinadi */}
            <div className='burger-btn' onClick={() => setIsOpen(!isOpen)}>
              <img src={isOpen ? clsoeBurger : burger} alt="menu" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop nav-links */}
      <div className="nav-links">
        <div className="container">
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Сервис кондиционеров</a></li>
            <li><a href="#">Сплит-кондиционеры</a></li>
            <li><a href="#">Инверторные кондиционеры</a></li>
            <li><a href="#">Заправка фреоном</a></li>
            <li><a href="#">Чистка</a></li>
            <li><a href="#">Профилактика</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" onClick={() => setIsOpen(false)}>Главная</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Сервис кондиционеров</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Сплит-кондиционеры</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Инверторные кондиционеры</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Заправка фреоном</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Чистка</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Профилактика</a></li>
        </ul>
      </div>
    </nav>
  )
}