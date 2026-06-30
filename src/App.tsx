import Hero from './components/Hero'
import ClientsBar from './components/ClientsBar'
import Statement from './components/Statement'
import Features from './components/Features'
import PromiseBand from './components/PromiseBand'
import RadarSection from './components/RadarSection'
import Fleet from './components/Fleet'
import UseCases from './components/UseCases'
import CTA from './components/CTA'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <main className="relative bg-vanta-ink">
      <Hero />
      <ClientsBar />
      <Statement />
      <Features />
      <PromiseBand />
      <RadarSection />
      <Fleet />
      <UseCases />
      <CTA />
      <BackToTop />
    </main>
  )
}
