import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'

const dashboardData = {
  categories: [
    { name: 'Electricidad', percentage: 35, color: '#eab308' },
    { name: 'Internet', percentage: 25, color: '#a855f7' },
    { name: 'Gas', percentage: 22, color: '#f97316' },
    { name: 'Agua', percentage: 18, color: '#3b82f6' },
  ],
  recentPayments: [
    { service: 'Enel Distribución', date: '12 Jun 2024', amount: 45200, status: 'completed' },
    { service: 'Movistar Fibra', date: '10 Jun 2024', amount: 29990, status: 'completed' },
    { service: 'Metrogas', date: '08 Jun 2024', amount: 32100, status: 'completed' },
    { service: 'Aguas Andinas', date: '05 Jun 2024', amount: 18500, status: 'pending' },
  ],
  upcomingPayments: [
    { service: 'Aguas Andinas', dueDate: '15 Jun', amount: 18500 },
    { service: 'Enel Distribución', dueDate: '20 Jun', amount: 47000 },
    { service: 'Netflix', dueDate: '25 Jun', amount: 12990 },
  ],
}

export default function DashboardPreviewSection() {
  return (
    <Box component="section" id="dashboard" sx={{ position: 'relative', py: { xs: 12, sm: 16 }, overflow: 'hidden' }}>
      {/* Background */}
      <Box sx={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}>
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: 600, height: 600, borderRadius: '50%', bgcolor: 'rgba(107,140,255,0.1)', filter: 'blur(120px)' }} />
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 400, height: 400, borderRadius: '50%', bgcolor: 'rgba(168,85,247,0.1)', filter: 'blur(100px)' }} />
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
              label="Dashboard"
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
              Un panel diseñado para ti
            </Typography>
            <Typography sx={{ mx: 'auto', mt: 2, maxWidth: 600, color: 'text.secondary', fontSize: '1.125rem' }}>
              Visualiza tus gastos, pagos pendientes y estadísticas en tiempo real con una interfaz intuitiva.
            </Typography>
          </Box>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative' }}
        >
          {/* Glow effect */}
          <Box
            sx={{
              position: 'absolute',
              top: -8, left: -8, right: -8, bottom: -8,
              borderRadius: 4,
              background: 'linear-gradient(90deg, rgba(107,140,255,0.2), rgba(168,85,247,0.2), rgba(107,140,255,0.2))',
              filter: 'blur(16px)',
            }}
          />

          <Box sx={{
            position: 'relative',
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'rgba(24,24,31,0.8)',
            p: 3,
            backdropFilter: 'blur(24px)',
            boxShadow: '0 25px 50px 0 rgba(0,0,0,0.5)',
          }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
              {/* Left column - Pie chart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(15,15,20,0.5)', p: 2.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 2 }}>Distribución de gastos</Typography>
                  
                  {/* Simple pie chart visualization */}
                  <Box sx={{ position: 'relative', mx: 'auto', width: 192, height: 192 }}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ transform: 'rotate(-90deg)' }}>
                      {(() => {
                        let accumulated = 0
                        const colors = ['#eab308', '#a855f7', '#f97316', '#3b82f6']
                        return dashboardData.categories.map((cat, i) => {
                          const circumference = 2 * Math.PI * 40
                          const strokeDasharray = `${(cat.percentage / 100) * circumference} ${circumference}`
                          const strokeDashoffset = -(accumulated / 100) * circumference
                          accumulated += cat.percentage
                          return (
                            <circle
                              key={cat.name}
                              cx="50" cy="50" r="40"
                              fill="none"
                              stroke={colors[i]}
                              strokeWidth="20"
                              strokeDasharray={strokeDasharray}
                              strokeDashoffset={strokeDashoffset}
                              style={{ transition: 'all 0.5s' }}
                            />
                          )
                        })
                      })()}
                    </svg>
                    <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>$125k</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Total mes</Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Legend */}
                  <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                    {dashboardData.categories.map((cat) => (
                      <Box key={cat.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: cat.color }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{cat.name}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>

              {/* Middle column - Recent payments */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(15,15,20,0.5)', p: 2.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 2 }}>Pagos recientes</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {dashboardData.recentPayments.map((payment, i) => (
                      <motion.div
                        key={payment.service}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      >
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderRadius: 1,
                          bgcolor: 'rgba(42,42,62,0.3)',
                          p: 1.5,
                        }}>
                          <Box sx={{ minWidth: 0, flex: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {payment.service}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>{payment.date}</Typography>
                          </Box>
                          <Box sx={{ textAlign: 'right', ml: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>${payment.amount.toLocaleString()}</Typography>
                            <Typography variant="caption" sx={{ color: payment.status === 'completed' ? 'success.main' : 'warning.main' }}>
                              {payment.status === 'completed' ? 'Pagado' : 'Pendiente'}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>

              {/* Right column - Upcoming & alerts */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {/* Upcoming payments */}
                  <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(15,15,20,0.5)', p: 2.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, mb: 2 }}>Próximos vencimientos</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {dashboardData.upcomingPayments.map((payment) => (
                        <Box key={payment.service} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{
                              display: 'flex',
                              width: 32,
                              height: 32,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 1,
                              bgcolor: 'rgba(107,140,255,0.1)',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              color: 'primary.main',
                            }}>
                              {payment.dueDate.split(' ')[0]}
                            </Box>
                            <Typography variant="body2">{payment.service}</Typography>
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>${payment.amount.toLocaleString()}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Quick action card */}
                  <Box sx={{
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'rgba(107,140,255,0.3)',
                    background: 'linear-gradient(135deg, rgba(107,140,255,0.1), rgba(168,85,247,0.1))',
                    p: 2.5,
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box sx={{
                        display: 'flex',
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        bgcolor: 'rgba(107,140,255,0.2)',
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Pago rápido</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}>
                          Paga todas tus boletas pendientes con un solo clic.
                        </Typography>
                        <Button variant="text" size="small" sx={{ mt: 1, color: 'primary.main', fontSize: '0.75rem', p: 0, minWidth: 0 }}>
                          Pagar ahora →
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
