import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const mockData = {
  monthlyExpenses: [
    { month: 'Ene', amount: 185000 },
    { month: 'Feb', amount: 162000 },
    { month: 'Mar', amount: 198000 },
    { month: 'Abr', amount: 171000 },
    { month: 'May', amount: 189000 },
    { month: 'Jun', amount: 156000 },
  ],
  services: [
    { name: 'Electricidad', amount: 45200, status: 'paid', icon: '\u26A1', color: 'from-yellow-500/20 to-yellow-500/5' },
    { name: 'Agua', amount: 18500, status: 'pending', icon: '\uD83D\uDCA7', color: 'from-blue-500/20 to-blue-500/5' },
    { name: 'Gas', amount: 32100, status: 'paid', icon: '\uD83D\uDD25', color: 'from-orange-500/20 to-orange-500/5' },
    { name: 'Internet', amount: 29990, status: 'upcoming', icon: '\uD83D\uDCE1', color: 'from-purple-500/20 to-purple-500/5' },
  ],
  stats: {
    totalMonth: 156890,
    savings: 12500,
    nextPayment: '15 Jun',
  }
}

export default function DashboardMockup() {
  const maxAmount = Math.max(...mockData.monthlyExpenses.map(d => d.amount))

  return (
    <Box sx={{ borderRadius: 2, bgcolor: 'rgba(15,15,20,0.5)', overflow: 'hidden' }}>
      {/* Window header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, borderBottom: '1px solid', borderColor: 'divider', px: 2, py: 1.5 }}>
        <Box sx={{ display: 'flex', gap: 0.75 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444', opacity: 0.8 }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#eab308', opacity: 0.8 }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#22c55e', opacity: 0.8 }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 2, bgcolor: 'rgba(42,42,62,0.5)', borderRadius: 0.5, px: 1.5, py: 0.5 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>app.nextura.io/dashboard</Typography>
        </Box>
      </Box>

      {/* Dashboard content */}
      <Box sx={{ p: { xs: 2, sm: 3 } }}>
        {/* Top stats */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2, mb: 3 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', p: 2 }}>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Total este mes</Typography>
              <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 600 }}>${mockData.stats.totalMonth.toLocaleString()}</Typography>
              <Typography variant="caption" sx={{ color: 'success.main' }}>↓ 8% vs mes anterior</Typography>
            </Box>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', p: 2 }}>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Ahorro estimado</Typography>
              <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 600, color: 'primary.main' }}>${mockData.stats.savings.toLocaleString()}</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Con recordatorios activos</Typography>
            </Box>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
            <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', p: 2 }}>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Próximo pago</Typography>
              <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 600 }}>{mockData.stats.nextPayment}</Typography>
              <Typography variant="caption" sx={{ color: 'warning.main' }}>Agua - $18,500</Typography>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '3fr 2fr' }, gap: 3 }}>
          {/* Chart section */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
            <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>Gastos mensuales</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Últimos 6 meses</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5, height: 128 }}>
                {mockData.monthlyExpenses.map((data, i) => (
                  <Box key={data.month} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.amount / maxAmount) * 100}%` }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                      style={{ width: '100%', borderRadius: '4px 4px 0 0', background: 'linear-gradient(to top, #6b8cff, rgba(107,140,255,0.5))' }}
                    />
                    <Typography variant="caption" sx={{ fontSize: '0.625rem', color: 'text.secondary' }}>{data.month}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Services list */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', p: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 2 }}>Servicios activos</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {mockData.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + i * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderRadius: 1,
                        bgcolor: 'rgba(42,42,62,0.3)',
                        p: 1.5,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Typography variant="h6">{service.icon}</Typography>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>{service.name}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>${service.amount.toLocaleString()}</Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          px: 1,
                          py: 0.25,
                          borderRadius: 10,
                          fontSize: '0.75rem',
                          bgcolor: service.status === 'paid' ? 'rgba(74,222,128,0.2)' : service.status === 'pending' ? 'rgba(251,191,36,0.2)' : 'rgba(96,165,250,0.2)',
                          color: service.status === 'paid' ? 'success.main' : service.status === 'pending' ? 'warning.main' : 'primary.light',
                        }}
                      >
                        {service.status === 'paid' ? 'Pagado' : service.status === 'pending' ? 'Pendiente' : 'Próximo'}
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  )
}
