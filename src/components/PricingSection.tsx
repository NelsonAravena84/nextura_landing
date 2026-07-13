import { useState } from 'react'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'

const plans = [
  {
    name: 'Gratis',
    description: 'Perfecto para comenzar a organizar tus servicios.',
    price: 0,
    period: 'para siempre',
    features: [
      'Hasta 4 servicios',
      'Registro manual de boletas',
      'Lectura de medidores',
      'Historial de 3 meses',
      'Soporte por email',
    ],
    cta: 'Comenzar gratis',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Ideal para hogares que quieren control total.',
    price: 4990,
    period: '/mes',
    features: [
      'Servicios ilimitados',
      'Subida de boletas y respaldos',
      'Configuración de tarifas y estimaciones',
      'Detección de anomalías de consumo',
      'Dashboard de gastos completo',
      'Historial ilimitado',
      'Soporte prioritario',
    ],
    cta: 'Probar Pro',
    popular: true,
  },
  {
    name: 'Familia',
    description: 'Para familias con múltiples propiedades.',
    price: 9990,
    period: '/mes',
    features: [
      'Todo en Pro',
      'Hasta 5 propiedades',
      'Usuarios compartidos',
      'Roles y permisos',
      'Exportar reportes',
      'API access',
      'Soporte dedicado 24/7',
    ],
    cta: 'Contactar ventas',
    popular: false,
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <Box component="section" id="pricing" sx={{ position: 'relative', py: { xs: 12, sm: 16 } }}>
      {/* Background */}
      <Box sx={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', width: 600, height: 600, transform: 'translateX(-50%)', borderRadius: '50%', bgcolor: 'rgba(107,140,255,0.05)', filter: 'blur(120px)' }} />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Precios"
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
              Planes para cada necesidad
            </Typography>
            <Typography sx={{ mx: 'auto', mt: 2, maxWidth: 600, color: 'text.secondary', fontSize: '1.125rem' }}>
              Elige el plan que mejor se adapte a tu hogar. Todos incluyen 14 días de prueba gratis.
            </Typography>

            {/* Billing toggle */}
            <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Typography variant="body2" sx={{ color: !isAnnual ? 'text.primary' : 'text.secondary' }}>
                Mensual
              </Typography>
              <Switch
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
                sx={{
                  '& .MuiSwitch-thumb': { bgcolor: 'primary.main' },
                  '& .MuiSwitch-track': { bgcolor: 'secondary.main' },
                }}
              />
              <Typography variant="body2" sx={{ color: isAnnual ? 'text.primary' : 'text.secondary' }}>
                Anual
                <Box component="span" sx={{ ml: 0.5, color: 'primary.main', fontSize: '0.75rem' }}>(-20%)</Box>
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Pricing cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  ...(plan.popular ? { mt: { md: -2 }, mb: { md: 2 } } : {}),
                }}
              >
                {plan.popular && (
                  <Box sx={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                    <Chip
                      label="Más popular"
                      sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', fontSize: '0.75rem', fontWeight: 500 }}
                    />
                  </Box>
                )}

                <Box sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: plan.popular ? 'rgba(107,140,255,0.5)' : 'divider',
                  background: plan.popular
                    ? 'linear-gradient(180deg, rgba(107,140,255,0.1), transparent)'
                    : 'rgba(24,24,31,0.5)',
                  p: 3,
                  transition: 'all 0.3s',
                  '&:hover': !plan.popular ? {
                    borderColor: 'rgba(107,140,255,0.3)',
                    bgcolor: 'rgba(24,24,31,0.8)',
                  } : {},
                  ...(plan.popular ? {
                    boxShadow: '0 10px 30px 0 rgba(107,140,255,0.1)',
                  } : {}),
                }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{plan.name}</Typography>
                    <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>{plan.description}</Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        ${isAnnual && plan.price > 0
                          ? Math.round(plan.price * 0.8).toLocaleString()
                          : plan.price.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{plan.period}</Typography>
                    </Box>
                    {isAnnual && plan.price > 0 && (
                      <Typography variant="caption" sx={{ color: 'primary.main', mt: 0.5, display: 'block' }}>
                        Ahorra ${Math.round(plan.price * 12 * 0.2).toLocaleString()} al año
                      </Typography>
                    )}
                  </Box>

                  <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {plan.features.map((feature) => (
                      <Box key={feature} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? '#6b8cff' : '#9ca3af'} strokeWidth={2} style={{ flexShrink: 0 }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{feature}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant={plan.popular ? 'contained' : 'outlined'}
                    color="primary"
                    fullWidth
                    href="#"
                    sx={!plan.popular ? {
                      borderColor: 'divider',
                      color: 'text.primary',
                      bgcolor: 'rgba(42,42,62,0.5)',
                      '&:hover': {
                        borderColor: 'divider',
                        bgcolor: 'secondary.main',
                      },
                    } : {}}
                  >
                    {plan.cta}
                  </Button>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Box sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              borderRadius: 10,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'rgba(42,42,62,0.3)',
              px: 2,
              py: 1,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Garantía de devolución de 30 días. Sin preguntas.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
