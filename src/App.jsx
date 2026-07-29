import './App.scss'
import Faq from './components/Faq'
import Footer from './components/Footer'
import FormSection from './components/FormSection'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Navbar from './components/Navbar'
import PopularServices from './components/PopularServices'
import Services from './components/Services'
import Steps from './components/Steps'
import Types from './components/Types'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Types/>
      <PopularServices/>
      <Logos/>
      <Steps/>
      <Faq/>
      <FormSection/>
      <Footer/>
      <a href="tel:+998919486767" className="mobile-call-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.466 15.466 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>
    </>
  )
}

export default App
