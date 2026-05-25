import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const benefits = [
  {
    title: 'Reduce el estrés financiero',
    description: 'Olvídate de fechas de vencimiento, multas por atraso y pagos duplicados. Nextura se encarga de recordarte todo.',
    stat: '87%',
    statLabel: 'usuarios reportan menos estrés',
  },
  {
    title: 'Ahorra tiempo cada mes',
    description: 'Deja de buscar boletas en correos y cajones. Todo está organizado y accesible en segundos.',
    stat: '5h',
    statLabel: 'ahorradas al mes en promedio',
  },
  {
    title: 'Optimiza tus gastos',
    description: 'Identifica patrones de consumo y encuentra oportunidades de ahorro con estadísticas inteligentes.',
    stat: '15%',
    statLabel: 'ahorro promedio mensual',
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
              Nextura transforma la forma en que gestionas los servicios de tu hogar,
              brindándote tranquilidad y control sobre tus finanzas domésticas.
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
              {/* Calendar-like visualization */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>Calendario de pagos</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Junio 2024</Typography>
                </Box>

                {/* Mini calendar grid */}
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0.25, textAlign: 'center' }}>
                  {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day) => (
                    <Box key={day} sx={{ fontSize: '0.625rem', color: 'text.secondary', py: 0.5 }}>{day}</Box>
                  ))}
                  {Array.from({ length: 30 }, (_, i) => {
                    const day = i + 1
                    const hasDueDate = [5, 15, 20, 25].includes(day)
                    const isPast = day < 12
                    return (
                      <Box
                        key={day}
                        sx={{
                          fontSize: '0.75rem',
                          py: 0.75,
                          borderRadius: 1,
                          bgcolor: hasDueDate ? (isPast ? 'rgba(74,222,128,0.2)' : 'rgba(107,140,255,0.2)') : 'transparent',
                          color: hasDueDate ? (isPast ? 'success.main' : 'primary.main') : (isPast ? 'rgba(156,163,175,0.5)' : 'text.secondary'),
                          fontWeight: hasDueDate ? 500 : 400,
                        }}
                      >
                        {day}
                      </Box>
                    )
                  })}
                </Box>
              </Box>

              {/* Progress indicators */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', mb: 1 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Pagos completados</Typography>
                    <Typography variant="caption" sx={{ color: 'success.main' }}>4 de 6</Typography>
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 10, bgcolor: 'secondary.main' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '66.67%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      style={{ height: '100%', borderRadius: 10, background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', mb: 1 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Presupuesto utilizado</Typography>
                    <Typography variant="caption" sx={{ color: 'primary.main' }}>$125,790 / $180,000</Typography>
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 10, bgcolor: 'secondary.main' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
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
                      <Typography variant="body2" sx={{ fontWeight: 500, color: 'warning.main' }}>Próximo vencimiento</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}>
                        Aguas Andinas vence en 3 días - $18,500
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
