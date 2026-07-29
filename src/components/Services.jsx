import React from 'react'
import serviceBg from '../assets/service-card-bg.png'
import p1 from '../assets/images/services/1.png'
import p2 from '../assets/images/services/2.png'
import p3 from '../assets/images/services/3.png'
import p4 from '../assets/images/services/4.png'
import p5 from '../assets/images/services/5.png'
import p6 from '../assets/images/services/6.png'
import p7 from '../assets/images/services/7.png'

export default function Services() {
  return (
    <section className='Services'>
      <div className="container">
        <div className='section-title'>
          <h5>Наши услуги</h5>
          <h2>ВСЕ УСЛУГИ ДЛЯ КОНДИЦИОНЕРОВ</h2>
        </div>

        <div className="row">
          <div className="col-md-4 service-col">
            <div className="block b1">
              <img src={p1} alt="service image" />
              <div className='price-block'>
                <p>Цена:</p>
                <h5>от 150 000 сумов</h5>
              </div>

              <div className='info-block'>
                <h3>РЕМОНТ КОНДИЦИОНЕРОВ</h3>
                <p>Не охлаждает, течёт вода или издаёт шум? Быстро определяем неисправность и выполняем качественный ремонт.</p>
                <a href="tel:+998919486767">
                  <button>
                    <span></span>
                    Позвонить
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="38" height="38" rx="5" fill="white"/>
                      <path d="M24.3957 14.4038C24.3957 13.962 24.0375 13.6038 23.5957 13.6038L16.3957 13.6038C15.9539 13.6038 15.5957 13.962 15.5957 14.4038C15.5957 14.8456 15.9539 15.2038 16.3957 15.2038H22.7957V21.6038C22.7957 22.0456 23.1539 22.4038 23.5957 22.4038C24.0375 22.4038 24.3957 22.0456 24.3957 21.6038L24.3957 14.4038ZM14.4033 23.5962L14.969 24.1619L24.1614 14.9695L23.5957 14.4038L23.03 13.8381L13.8376 23.0305L14.4033 23.5962Z" fill="#30A0F6"/>
                    </svg>
                  </button>
                </a>
              </div>

            </div>
          </div>
          
          <div className="col-md-4 service-col">
            <div className="block b1">
              <img src={p2} alt="service image" />
              <div className='price-block'>
                <p>Цена:</p>
                <h5>от 500 000 сумов</h5>
              </div>

              <div className='info-block'>
                <h3>УСТАНОВКА КОНДИЦИОНЕРОВ</h3>
                <p>Безопасно и профессионально устанавливаем новые кондиционеры.</p>
                <a href="tel:+998919486767">
                  <button>
                    <span></span>
                    Позвонить
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="38" height="38" rx="5" fill="white"/>
                      <path d="M24.3957 14.4038C24.3957 13.962 24.0375 13.6038 23.5957 13.6038L16.3957 13.6038C15.9539 13.6038 15.5957 13.962 15.5957 14.4038C15.5957 14.8456 15.9539 15.2038 16.3957 15.2038H22.7957V21.6038C22.7957 22.0456 23.1539 22.4038 23.5957 22.4038C24.0375 22.4038 24.3957 22.0456 24.3957 21.6038L24.3957 14.4038ZM14.4033 23.5962L14.969 24.1619L24.1614 14.9695L23.5957 14.4038L23.03 13.8381L13.8376 23.0305L14.4033 23.5962Z" fill="#30A0F6"/>
                    </svg>
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div className="col-md-4 service-col">
            <div className="block b1">
              <img src={p3} alt="service image" />
              <div className='price-block'>
                <p>Цена:</p>
                <h5>от 80 000 сумов</h5>
              </div>

              <div className='info-block'>
                <h3>ДИАГНОСТИКА</h3>
                <p>Проводим полную диагностику кондиционера для точного выявления проблемы.</p>
                <a href="tel:+998919486767">
                  <button>
                    <span></span>
                    Позвонить
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="38" height="38" rx="5" fill="white"/>
                      <path d="M24.3957 14.4038C24.3957 13.962 24.0375 13.6038 23.5957 13.6038L16.3957 13.6038C15.9539 13.6038 15.5957 13.962 15.5957 14.4038C15.5957 14.8456 15.9539 15.2038 16.3957 15.2038H22.7957V21.6038C22.7957 22.0456 23.1539 22.4038 23.5957 22.4038C24.0375 22.4038 24.3957 22.0456 24.3957 21.6038L24.3957 14.4038ZM14.4033 23.5962L14.969 24.1619L24.1614 14.9695L23.5957 14.4038L23.03 13.8381L13.8376 23.0305L14.4033 23.5962Z" fill="#30A0F6"/>
                    </svg>
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div className="col-md-4 service-col">
            <div className="block b1">
              <img src={p4} alt="service image" />
              <div className='price-block'>
                <p>Цена:</p>
                <h5>от 300 000 сумов</h5>
              </div>

              <div className='info-block'>
                <h3>ЗАПРАВКА ФРЕОНОМ</h3>
                <p>Восстанавливаем эффективность охлаждения с помощью заправки фреоном.</p>
                <a href="tel:+998919486767">
                  <button>
                    <span></span>
                    Позвонить
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="38" height="38" rx="5" fill="white"/>
                      <path d="M24.3957 14.4038C24.3957 13.962 24.0375 13.6038 23.5957 13.6038L16.3957 13.6038C15.9539 13.6038 15.5957 13.962 15.5957 14.4038C15.5957 14.8456 15.9539 15.2038 16.3957 15.2038H22.7957V21.6038C22.7957 22.0456 23.1539 22.4038 23.5957 22.4038C24.0375 22.4038 24.3957 22.0456 24.3957 21.6038L24.3957 14.4038ZM14.4033 23.5962L14.969 24.1619L24.1614 14.9695L23.5957 14.4038L23.03 13.8381L13.8376 23.0305L14.4033 23.5962Z" fill="#30A0F6"/>
                    </svg>
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div className="col-md-4 service-col">
            <div className="block b1">
              <img src={p5} alt="service image" />
              <div className='price-block'>
                <p>Цена:</p>
                <h5>от 100 000 сумов</h5>
              </div>

              <div className='info-block'>
                <h3>ОБСЛУЖИВАНИЕ НАРУЖНОГО БЛОКА</h3>
                <p>Проверка, чистка и замена неисправных деталей наружного блока.</p>
                <a href="tel:+998919486767">
                  <button>
                    <span></span>
                    Позвонить
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="38" height="38" rx="5" fill="white"/>
                      <path d="M24.3957 14.4038C24.3957 13.962 24.0375 13.6038 23.5957 13.6038L16.3957 13.6038C15.9539 13.6038 15.5957 13.962 15.5957 14.4038C15.5957 14.8456 15.9539 15.2038 16.3957 15.2038H22.7957V21.6038C22.7957 22.0456 23.1539 22.4038 23.5957 22.4038C24.0375 22.4038 24.3957 22.0456 24.3957 21.6038L24.3957 14.4038ZM14.4033 23.5962L14.969 24.1619L24.1614 14.9695L23.5957 14.4038L23.03 13.8381L13.8376 23.0305L14.4033 23.5962Z" fill="#30A0F6"/>
                    </svg>
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div className="col-md-4 service-col">
            <div className="block b1">
              <img src={p6} alt="service image" />
              <div className='price-block'>
                <p>Цена:</p>
                <h5>от 150 000 сумов</h5>
              </div>

              <div className='info-block'>
                <h3>ЧИСТКА КОНДИЦИОНЕРОВ</h3>
                <p>Профессиональная чистка внутренних и внешних блоков для улучшения качества воздуха.</p>
                <a href="tel:+998919486767">
                  <button>
                    <span></span>
                    Позвонить
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="38" height="38" rx="5" fill="white"/>
                      <path d="M24.3957 14.4038C24.3957 13.962 24.0375 13.6038 23.5957 13.6038L16.3957 13.6038C15.9539 13.6038 15.5957 13.962 15.5957 14.4038C15.5957 14.8456 15.9539 15.2038 16.3957 15.2038H22.7957V21.6038C22.7957 22.0456 23.1539 22.4038 23.5957 22.4038C24.0375 22.4038 24.3957 22.0456 24.3957 21.6038L24.3957 14.4038ZM14.4033 23.5962L14.969 24.1619L24.1614 14.9695L23.5957 14.4038L23.03 13.8381L13.8376 23.0305L14.4033 23.5962Z" fill="#30A0F6"/>
                    </svg>
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div className="col-md-4 service-col">
            <div className="block b1">
              <img src={p7} alt="service image" />
              <div className='price-block'>
                <p>Цена:</p>
                <h5>от 80 000 сумов</h5>
              </div>

              <div className='info-block'>
                <h3>ПРОФИЛАКТИКА</h3>
                <p>Профилактическое обслуживание для стабильной и долгой работы кондиционера.</p>
                <a href="tel:+998919486767">
                  <button>
                    <span></span>
                    Позвонить
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="38" height="38" rx="5" fill="white"/>
                      <path d="M24.3957 14.4038C24.3957 13.962 24.0375 13.6038 23.5957 13.6038L16.3957 13.6038C15.9539 13.6038 15.5957 13.962 15.5957 14.4038C15.5957 14.8456 15.9539 15.2038 16.3957 15.2038H22.7957V21.6038C22.7957 22.0456 23.1539 22.4038 23.5957 22.4038C24.0375 22.4038 24.3957 22.0456 24.3957 21.6038L24.3957 14.4038ZM14.4033 23.5962L14.969 24.1619L24.1614 14.9695L23.5957 14.4038L23.03 13.8381L13.8376 23.0305L14.4033 23.5962Z" fill="#30A0F6"/>
                    </svg>
                  </button>
                </a>
              </div>

            </div>
          </div>

        

          <div className="col-md-4 service-col">
            <div className="block2 ">
              <img src={serviceBg} alt="service bacground" />
              <div className='block-info1'>
                <h3>НУЖНА КОНСУЛЬТАЦИЯ ИЛИ ВЫЗОВ МАСТЕРА?</h3>
                <p>Свяжитесь с нами — быстро предоставим информацию о стоимости и необходимых работах.</p>
              </div>

              <div className="block-info2">
                <a href="https://t.me/Javlon_6767" target='_blank'>

                <button className='tg-button'>
                  <span></span>
                  Написать в Telegram
                  <a href="https://t.me/Javlon_6767" target='_blank'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="6" fill="white"/>
                    <path d="M32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24ZM24 34C29.5228 34 34 29.5228 34 24C34 18.4771 29.5228 14 24 14C18.4771 14 14 18.4771 14 24C14 29.5228 18.4771 34 24 34ZM24.3584 21.3825C23.3857 21.787 21.4418 22.6244 18.5266 23.8945C18.0532 24.0827 17.8052 24.2669 17.7827 24.4469C17.7445 24.7513 18.1256 24.8711 18.6446 25.0343C18.7152 25.0565 18.7883 25.0795 18.8633 25.1039C19.3739 25.2698 20.0607 25.464 20.4178 25.4717C20.7416 25.4787 21.1031 25.3452 21.5022 25.0711C24.226 23.2325 25.632 22.3032 25.7203 22.2832C25.7826 22.269 25.8689 22.2513 25.9273 22.3032C25.9858 22.3552 25.98 22.4536 25.9739 22.48C25.9361 22.641 24.4401 24.0318 23.6659 24.7515C23.4351 24.9661 23.2101 25.1853 22.9833 25.4039C22.509 25.8611 22.1533 26.204 23.003 26.764C23.8644 27.3317 24.7323 27.8982 25.5724 28.4971C25.9867 28.7925 26.359 29.0579 26.8188 29.0156C27.0861 28.991 27.3621 28.7397 27.5022 27.9903C27.8335 26.2193 28.4847 22.3821 28.6352 20.8008C28.6484 20.6623 28.6318 20.485 28.6185 20.4072C28.6052 20.3293 28.5773 20.2184 28.4762 20.1363C28.3563 20.0391 28.1714 20.0186 28.0887 20.0201C27.7125 20.0267 27.1355 20.2274 24.3584 21.3825Z" fill="#177DE9"/>
                    </svg>
                  </a>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
