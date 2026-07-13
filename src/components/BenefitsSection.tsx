import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const benefits = [
  {
    title: 'Anticipa tu próxima factura',
    description: 'Para los servicios medidos, Nextura proyecta el monto de la próxima boleta a partir del consumo registrado, las tarifas configuradas, los cargos fijos y los impuestos.',
    stat: '01',
    statLabel: 'estimación antes de que llegue la boleta',
  },
  {
    title: 'Verifica que los cobros sean correctos',
    description: 'Detecta anomalías en servicios como internet y telefonía y recibe alertas cuando una factura presenta una variación significativa respecto a tu historial de pagos.',
    stat: '02',
    statLabel: 'alertas ante cobros irregulares',
  },
  {
    title: 'Control y transparencia total',
    description: 'Registra boletas, revisa el historial de pagos y visualiza el estado de cada servicio desde un único panel, con exportación de información y gestión segura de usuarios.',
    stat: '03',
    statLabel: 'toda la información de tu hogar en un lugar',
  },
]

export default function BenefitsSection() {
  return (
    <Box component="section" sx={{ position: 'relative', py: { xs: 12, sm: 16 } }}>
      {/* Background */}
      <Box sx={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Box sx={{
          position: 'absolute', bottom: 0, left: '50%', width: 500, height: 500,
          transform: 'translateX(-50%)', borderRadius: '50%',
          bgcolor: 'rgba(107,140,255,0.05)', filter: 'blur(100px)',
        }} />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, lg: 8 }, alignItems: 'center' }}>
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Chip
              label="Beneficios"
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
              Tu hogar financiero bajo control
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '1.125rem' }}>
              Nextura centraliza la gestión de tus servicios básicos, te ayuda a anticipar
              tus gastos y verifica que los cobros sean correctos, con mayor control y
              transparencia sobre las finanzas de tu hogar.
            </Typography>

            <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ flexShrink: 0 }}>
                      <Box sx={{
                        display: 'flex',
                        width: 48,
                        height: 48,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1.5,
                        bgcolor: 'rgba(107,140,255,0.1)',
                        color: 'primary.main',
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        transition: 'background-color 0.3s',
                      }}>
                        {benefit.stat}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{benefit.title}</Typography>
                      <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary', lineHeight: 1.7 }}>
                        {benefit.description}
                      </Typography>
                      <Typography variant="caption" sx={{ mt: 1, color: 'primary.main', display: 'block' }}>
                        {benefit.statLabel}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Decorative elements */}
            <Box sx={{
              position: 'absolute', top: -8, left: -8, right: -8, bottom: -8,
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(107,140,255,0.2), transparent, rgba(168,85,247,0.2))',
              filter: 'blur(16px)',
            }} />

            <Box sx={{
              position: 'relative',
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'rgba(24,24,31,0.8)',
              p: 3,
              backdropFilter: 'blur(24px)',
            }}>
              {/* Meter reading panel */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box sx={{
                    display: 'flex', width: 36, height: 36, alignItems: 'center', justifyContent: 'center',
                    borderRadius: 1.5, bgcolor: 'rgba(74,222,128,0.12)', color: 'success.main',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Departamento Providencia</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Electricidad · Enel Distribución</Typography>
                  </Box>
                </Box>

                {/* Última lectura oficial */}
                <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.625rem' }}>
                  Última lectura oficial
                </Typography>
                <Box sx={{
                  mt: 1, mb: 2.5,
                  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
                  borderRadius: 1.5, border: '1px solid', borderColor: 'divider',
                  bgcolor: 'rgba(42,42,62,0.35)', p: 1.5,
                }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.625rem' }}>Valor</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>15200</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.625rem' }}>Fecha</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>30 sept 2025</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.625rem' }}>Origen</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Boleta</Typography>
                  </Box>
                </Box>

                {/* Registrar lectura */}
                <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.625rem' }}>
                  Registrar lectura del medidor
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                  <Box sx={{
                    flex: 1, borderRadius: 1.5, border: '1px solid', borderColor: 'divider',
                    bgcolor: 'rgba(42,42,62,0.35)', px: 1.5, py: 1,
                  }}>
                    <Typography variant="caption" sx={{ color: 'rgba(156,163,175,0.7)' }}>Lectura actual (unidad)</Typography>
                  </Box>
                  <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 0.75,
                    borderRadius: 1.5, bgcolor: 'primary.main', color: '#0b0b12',
                    px: 1.75, fontWeight: 600, fontSize: '0.8125rem', whiteSpace: 'nowrap',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Registrar
                  </Box>
                </Box>
              </Box>

              {/* Progress indicators */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', mb: 1 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Boletas pagadas</Typography>
                    <Typography variant="caption" sx={{ color: 'success.main' }}>8 de 16</Typography>
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 10, bgcolor: 'secondary.main' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '50%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      style={{ height: '100%', borderRadius: 10, background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', mb: 1 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Total por pagar</Typography>
                    <Typography variant="caption" sx={{ color: 'primary.main' }}>$181.620 pendiente</Typography>
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 10, bgcolor: 'secondary.main' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '55%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      style={{ height: '100%', borderRadius: 10, background: 'linear-gradient(90deg, #6b8cff, #a78bfa)' }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Alert card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Box sx={{
                  mt: 3,
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'rgba(251,191,36,0.3)',
                  bgcolor: 'rgba(251,191,36,0.1)',
                  p: 2,
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth={2} style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: 'warning.main' }}>Boleta vencida</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}>
                        Electricidad · Enel Distribución - $23.150
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
