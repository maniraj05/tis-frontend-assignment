import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Academics from './components/Academics'
import Activities from './components/Activities'
import AdmissionsCTA from './components/AdmissionsCTA'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Testimonials from './components/Testimonials'
import WhyTIS from './components/WhyTIS'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-accent px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Academics />
        <Facilities />
        <WhyTIS />
        <Activities />
        <Testimonials />
        <AdmissionsCTA />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
