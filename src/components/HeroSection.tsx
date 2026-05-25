import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import DashboardMockup from './DashboardMockup'

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Background gradient effects */}
      <Box sx={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            width: 800,
            height: 800,
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            bgcolor: 'rgba(107,140,255,0.2)',
            filter: 'blur(120px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            left: '-25%',
            width: 600,
            height: 600,
            borderRadius: '50%',
            bgcolor: 'rgba(107,140,255,0.1)',
            filter: 'blur(100px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 500,
            height: 500,
            borderRadius: '50%',
            bgcolor: 'rgba(107,140,255,0.05)',
            filter: 'blur(80px)',
          }}
        />
      </Box>

      {/* Grid pattern overlay */}
      <Box
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', px: { xs: 2, sm: 3, lg: 4 }, py: { xs: 12, sm: 16 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Chip
              icon={
                <Box sx={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { opacity: 1 },
                        '50%': { opacity: 0.3 },
                      },
                    }}
                  />
                </Box>
              }
              label="Nuevo: Integración con bancos"
              sx={{
                borderRadius: 10,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'rgba(42,42,62,0.5)',
                color: 'text.secondary',
                backdropFilter: 'blur(12px)',
                mb: 4,
                '& .MuiChip-icon': { ml: 0.5 },
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                maxWidth: 960,
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem', lg: '4.5rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Control total de tus{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #6b8cff, #6b8cff, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                servicios del hogar
              </Box>
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography
              variant="h6"
              sx={{
                mt: 3,
                maxWidth: 600,
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: { xs: '1rem', sm: '1.125rem' },
              }}
            >
              Centraliza, registra y gestiona todas tus boletas y servicios básicos
              desde un único panel inteligente. Organización, tranquilidad y control financiero.
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box sx={{ mt: 5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#"
                endIcon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
              >
                Comenzar gratis
              </Button>
              <Button
                variant="outlined"
                href="#"
                startIcon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                sx={{
                  borderColor: 'divider',
                  color: 'text.primary',
                  bgcolor: 'rgba(42,42,62,0.5)',
                  backdropFilter: 'blur(12px)',
                  '&:hover': {
                    borderColor: 'divider',
                    bgcolor: 'secondary.main',
                  },
                }}
              >
                Ver demo
              </Button>
            </Box>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: 'background.default',
                      background: 'linear-gradient(135deg, #3a3a3a, rgba(156,163,175,0.3))',
                      ml: i > 1 ? -1 : 0,
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ textAlign: 'left' }}>
                <Box sx={{ display: 'flex', gap: 0.25 }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#eab308">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  <Box component="span" sx={{ fontWeight: 500, color: 'text.primary' }}>+2,500</Box> usuarios activos
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ width: '100%', maxWidth: 1024, marginTop: 64 }}
          >
            <Box sx={{ position: 'relative' }}>
              {/* Glow effect behind mockup */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 4,
                  background: 'linear-gradient(90deg, rgba(107,140,255,0.3), rgba(107,140,255,0.2), rgba(168,85,247,0.3))',
                  filter: 'blur(48px)',
                }}
              />
              {/* Mockup container */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'rgba(24,24,31,0.8)',
                  p: 1,
                  backdropFilter: 'blur(24px)',
                  boxShadow: '0 25px 50px 0 rgba(0,0,0,0.5)',
                }}
              >
                <DashboardMockup />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
