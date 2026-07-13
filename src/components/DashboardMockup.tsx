import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const stats = [
  { label: 'Servicios', value: '4', hint: 'Activos en tu hogar', tone: 'primary' },
  { label: 'Boletas pendientes', value: '8', hint: 'Por pagar este ciclo', tone: 'warning' },
  { label: 'Total por pagar', value: '$181.620', hint: 'Suma de pendientes', tone: 'default' },
  { label: 'Vencidas', value: '8', hint: 'Requieren atención', tone: 'error' },
]

const categories = ['Electricidad', 'Agua', 'Internet', 'Telefonía']

const boletas = [
  { period: '01 nov 2025 → 30 nov 2025', amount: '$23.150', consumo: 370, status: 'Vencida' },
  { period: '01 oct 2025 → 31 oct 2025', amount: '$25.430', consumo: 380, status: 'Vencida' },
  { period: '01 sept 2025 → 30 sept 2025', amount: '$26.780', consumo: 390, status: 'Pagada' },
  { period: '01 ago 2025 → 31 ago 2025', amount: '$24.390', consumo: 390, status: 'Pagada' },
]

function StatIcon({ tone }: { tone: string }) {
  const color = tone === 'primary' ? '#6b8cff' : tone === 'warning' ? '#fbbf24' : tone === 'error' ? '#f87171' : '#9ca3af'
  return (
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(42,42,62,0.6)',
      }}
    >
      <Box sx={{ width: 12, height: 12, borderRadius: tone === 'error' ? 0.5 : '50%', bgcolor: color, opacity: 0.9 }} />
    </Box>
  )
}

export default function DashboardMockup() {
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
        {/* Page header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(107,140,255,0.15)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
              </svg>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>Servicios del hogar</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Todos tus suministros y boletas en un único lugar.</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 0.75,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'rgba(42,42,62,0.4)',
              px: 1.5,
              py: 0.75,
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <Typography variant="caption" sx={{ fontWeight: 500 }}>Nuevo servicio</Typography>
          </Box>
        </Box>

        {/* Top stats */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2, mb: 3 }}>
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.08 }}>
              <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', p: 2, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                  <StatIcon tone={stat.tone} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>{stat.value}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{stat.hint}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Category tabs */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: 2, flexWrap: 'wrap' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>Categoría:</Typography>
          {categories.map((cat, i) => (
            <Typography
              key={cat}
              variant="body2"
              sx={{
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? 'text.primary' : 'text.secondary',
                position: 'relative',
                pb: 0.5,
                borderBottom: i === 0 ? '2px solid' : '2px solid transparent',
                borderColor: i === 0 ? 'primary.main' : 'transparent',
              }}
            >
              {cat}
            </Typography>
          ))}
        </Box>

        {/* Service card */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', p: { xs: 2, sm: 2.5 } }}>
            {/* Service title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'rgba(74,222,128,0.15)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>Departamento Providencia</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Electricidad · Enel Distribución</Typography>
              </Box>
            </Box>

            {/* Accumulated + actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, py: 2, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Boletas</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>4</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Total acumulado</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>$99.750</Typography>
                </Box>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(42,42,62,0.4)', px: 1.5, py: 0.75 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 8h.01M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
                  </svg>
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>Subir Boleta</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, borderRadius: 2, bgcolor: 'text.primary', px: 1.5, py: 0.75 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0f0f14" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'background.default' }}>Nueva boleta</Typography>
                </Box>
              </Box>
            </Box>

            {/* Boletas table */}
            <Box sx={{ overflowX: 'auto' }}>
              {/* Table head */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1.6fr 1fr 0.8fr 0.9fr', sm: '2fr 1fr 1fr 1fr' }, gap: 1, px: 0.5, pb: 1 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Período</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'right' }}>Monto</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'right' }}>Consumo</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'right' }}>Estado</Typography>
              </Box>
              {boletas.map((boleta, i) => (
                <motion.div
                  key={boleta.period}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1.6fr 1fr 0.8fr 0.9fr', sm: '2fr 1fr 1fr 1fr' },
                      gap: 1,
                      alignItems: 'center',
                      px: 0.5,
                      py: 1.25,
                      borderTop: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'text.primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {boleta.period}
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, textAlign: 'right' }}>{boleta.amount}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'right' }}>{boleta.consumo}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Box
                        sx={{
                          px: 1,
                          py: 0.25,
                          borderRadius: 1,
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          bgcolor: boleta.status === 'Pagada' ? 'rgba(74,222,128,0.15)' : 'rgba(248,113,113,0.15)',
                          color: boleta.status === 'Pagada' ? 'success.main' : 'error.main',
                        }}
                      >
                        {boleta.status}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}
