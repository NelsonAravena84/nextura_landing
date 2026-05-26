import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Divider from '@mui/material/Divider'

const navLinks = [
  { label: 'Funciones', href: '/#features' },
  { label: 'Dashboard', href: '/#dashboard' },
  { label: 'Precios', href: '/#pricing' },
  { label: 'Testimonios', href: '/#testimonials' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'rgba(15,15,20,0.8)',
          backdropFilter: 'blur(24px)',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', height: 64, alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              component="button"
              onClick={() => navigate('/')}
              sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'transparent', border: 'none', cursor: 'pointer', p: 0 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  height: 32,
                  width: 32,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1.5,
                  bgcolor: 'primary.main',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                Nextura
              </Typography>
            </Box>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navLinks.map((link) => (
                <MuiLink
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{ color: 'text.secondary', fontSize: '0.875rem', '&:hover': { color: 'text.primary' } }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>

            {/* Desktop auth */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <MuiLink
                component="button"
                underline="none"
                onClick={() => navigate('/login')}
                sx={{ color: 'text.secondary', fontSize: '0.875rem', '&:hover': { color: 'text.primary' } }}
              >
                Iniciar sesión
              </MuiLink>
              <Button variant="contained" color="primary" size="small" onClick={() => navigate('/sign-up')}>
                Comenzar gratis
              </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              sx={{ display: { md: 'none' }, color: 'text.secondary' }}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </IconButton>
          </Box>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Box sx={{ borderTop: '1px solid', borderColor: 'divider', py: 2, display: { md: 'none' } }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {navLinks.map((link) => (
                      <MuiLink
                        key={link.label}
                        href={link.href}
                        underline="none"
                        onClick={() => setIsOpen(false)}
                        sx={{ color: 'text.secondary', fontSize: '0.875rem', '&:hover': { color: 'text.primary' } }}
                      >
                        {link.label}
                      </MuiLink>
                    ))}
                    <Divider sx={{ borderColor: 'divider' }} />
                    <MuiLink
                      component="button"
                      underline="none"
                      onClick={() => { setIsOpen(false); navigate('/login') }}
                      sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                    >
                      Iniciar sesión
                    </MuiLink>
                    <Button variant="contained" color="primary" fullWidth onClick={() => { setIsOpen(false); navigate('/sign-up') }}>
                      Comenzar gratis
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </motion.nav>
  )
}
