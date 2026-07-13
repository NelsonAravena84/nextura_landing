import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const features = [
  {
    title: 'Sube tus boletas',
    description: 'Registra cada boleta con su período, monto y consumo. Sube el documento y mantén todo respaldado por servicio.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    title: 'Lectura de medidores',
    description: 'Registra la lectura oficial y las lecturas de tu medidor para estimar el consumo antes de que llegue la boleta.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: 'Configuración de tarifas',
    description: 'Ingresa tarifa por unidad, cargo fijo, impuestos y fecha de vigencia para calcular estimaciones precisas de tus cuentas.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Detección de anomalías',
    description: 'Configura un umbral de anomalía y recibe alertas cuando un consumo o monto se dispara respecto a tu promedio.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Dashboard de gastos',
    description: 'Analiza la evolución de montos por categoría, el promedio de los últimos 12 meses y compara pagado vs pendiente.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Estados y vencimientos',
    description: 'Controla en un vistazo qué boletas están pagadas, pendientes o vencidas y cuánto suma tu total por pagar.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function FeaturesSection() {
  return (
    <Box component="section" id="features" sx={{ position: 'relative', py: { xs: 12, sm: 16 } }}>
      {/* Background */}
      <Box sx={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '25%',
            width: 400,
            height: 400,
            transform: 'translateY(-50%)',
            borderRadius: '50%',
            bgcolor: 'rgba(107,140,255,0.05)',
            filter: 'blur(100px)',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Chip
              label="Funcionalidades"
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
              Todo lo que necesitas en un solo lugar
            </Typography>
            <Typography sx={{ mx: 'auto', mt: 2, maxWidth: 600, color: 'text.secondary', fontSize: '1.125rem' }}>
              Herramientas poderosas diseñadas para simplificar la gestión de tus servicios del hogar.
            </Typography>
          </Box>
        </motion.div>

        {/* Features grid */}
        <Box sx={{ mt: 8, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'rgba(24,24,31,0.5)',
                  p: 3,
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(107,140,255,0.3)',
                    bgcolor: 'rgba(24,24,31,0.8)',
                  },
                }}
              >
                {/* Hover glow */}
                <Box
                  sx={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, rgba(107,140,255,0.1), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    '.MuiBox-root:hover &': { opacity: 1 },
                  }}
                />

                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      width: 48,
                      height: 48,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1.5,
                      bgcolor: 'rgba(107,140,255,0.1)',
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
