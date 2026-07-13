import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const testimonials = [
  {
    name: 'Carolina Mendez',
    role: 'Dueña de casa',
    content: 'Antes perdía horas buscando boletas en mi correo. Ahora todo está en un solo lugar y nunca más he pagado una multa por atraso.',
    avatar: 'CM',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Ingeniero de Software',
    content: 'La visualización de gastos me ayudó a darme cuenta que estaba pagando de más en electricidad. Cambié de plan y ahorro $15.000 mensuales.',
    avatar: 'RS',
  },
  {
    name: 'María José Torres',
    role: 'Administradora de edificios',
    content: 'Gestiono los servicios de 3 propiedades. Nextura me simplificó la vida de una manera que no creí posible. Totalmente recomendado.',
    avatar: 'MT',
  },
  {
    name: 'Andrés Villalobos',
    role: 'Emprendedor',
    content: 'La detección de anomalías me avisó de un cobro raro en internet que no correspondía a mi historial. Pude reclamar a tiempo. Un cambio de juego.',
    avatar: 'AV',
  },
  {
    name: 'Francisca Rojas',
    role: 'Contadora',
    content: 'Como contadora, valoro mucho el historial detallado y los reportes. Facilita enormemente mi trabajo al declarar impuestos.',
    avatar: 'FR',
  },
  {
    name: 'Diego Morales',
    role: 'Padre de familia',
    content: 'Con 3 hijos, cualquier ahorro es bienvenido. La proyección del monto me deja anticipar cuánto llegará la boleta de agua y electricidad. Increíble herramienta.',
    avatar: 'DM',
  },
]

export default function TestimonialsSection() {
  return (
    <Box component="section" id="testimonials" sx={{ position: 'relative', py: { xs: 12, sm: 16 }, overflow: 'hidden' }}>
      {/* Background */}
      <Box sx={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}>
        <Box sx={{ position: 'absolute', top: '50%', left: 0, width: 400, height: 400, transform: 'translateY(-50%)', borderRadius: '50%', bgcolor: 'rgba(107,140,255,0.05)', filter: 'blur(100px)' }} />
        <Box sx={{ position: 'absolute', top: '50%', right: 0, width: 400, height: 400, transform: 'translateY(-50%)', borderRadius: '50%', bgcolor: 'rgba(168,85,247,0.05)', filter: 'blur(100px)' }} />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="Testimonios"
              sx={{
                borderRadius: 10,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'rgba(42,42,62,0.5)',
                color: 'primary.main',
                fontWeight: 500,
                fontSize: '0.75rem',
              }}
            />
            <Typography variant="h2" sx={{ mt: 3, fontSize: { xs: '1.875rem', sm: '2.25rem', lg: '3rem' } } as any}>
              Lo que dicen nuestros usuarios
            </Typography>
            <Typography sx={{ mx: 'auto', mt: 2, maxWidth: 600, color: 'text.secondary', fontSize: '1.125rem' }}>
              Miles de personas ya confían en Nextura para gestionar sus servicios del hogar.
            </Typography>
          </Box>
        </motion.div>

        {/* Testimonials grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box sx={{
                height: '100%',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'rgba(24,24,31,0.5)',
                p: 3,
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: 'rgba(107,140,255,0.3)',
                  bgcolor: 'rgba(24,24,31,0.8)',
                },
              }}>
                {/* Stars */}
                <Box sx={{ display: 'flex', gap: 0.25, mb: 2 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 20 20" fill="#eab308">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </Box>

                {/* Quote */}
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                  &ldquo;{testimonial.content}&rdquo;
                </Typography>

                {/* Author */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{
                    display: 'flex',
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6b8cff, #a855f7)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}>
                    {testimonial.avatar}
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{testimonial.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{testimonial.role}</Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
