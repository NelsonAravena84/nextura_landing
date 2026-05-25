import Box from '@mui/material/Box'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import DashboardPreviewSection from '../components/DashboardPreviewSection'
import BenefitsSection from '../components/BenefitsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PricingSection from '../components/PricingSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreviewSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </Box>
  )
}
