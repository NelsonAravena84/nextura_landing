import React from 'react'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

type Category = {
  name: string
  boletas: number
  accumulated: string
  color: string
  icon: React.ReactNode
  points: number[]
  periods: string[]
}

const categories: Category[] = [
  {
    name: 'Electricidad',
    boletas: 4,
    accumulated: '$99.750',
    color: '#4ade80',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    points: [24390, 26780, 25430, 23150],
    periods: ['2025-08', '2025-09', '2025-10', '2025-11'],
  },
  {
    name: 'Agua',
    boletas: 4,
    accumulated: '$76.200',
    color: '#38bdf8',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
    points: [19800, 20900, 18700, 16800],
    periods: ['2025-08', '2025-09', '2025-10', '2025-11'],
  },
  {
    name: 'Internet',
    boletas: 4,
    accumulated: '$120.960',
    color: '#38bdf8',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M5.052 13.344a9.5 9.5 0 0113.896 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0M12 20h.01" />
      </svg>
    ),
    points: [28800, 30240, 30240, 33900],
    periods: ['2025-08', '2025-09', '2025-10', '2025-11'],
  },
  {
    name: 'Telefonía',
    boletas: 4,
    accumulated: '$64.470',
    color: '#4ade80',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    points: [14800, 16100, 16220, 17350],
    periods: ['2025-08', '2025-09', '2025-10', '2025-11'],
  },
]

function LineChart({ points, color }: { points: number[]; color: string }) {
  const width = 320
  const height = 120
  const padX = 8
  const padY = 12
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1

  const coords = points.map((p, i) => {
    const x = padX + (i / (points.length - 1)) * (width - padX * 2)
    const y = padY + (1 - (p - min) / range) * (height - padY * 2)
    return { x, y }
  })

  const linePath = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ')
  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${height} L ${coords[0].x} ${height} Z`
  const gradientId = `grad-${color.replace('#', '')}`

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="120" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.25} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1={padX}
            x2={width - padX}
            y1={padY + g * (height - padY * 2)}
            y2={padY + g * (height - padY * 2)}
            stroke="rgba(255,255,255,0.06)"
            strokeDasharray="3 4"
          />
        ))}
        <motion.path
          d={areaPath}
          fill={`url(#${gradientId})`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        {coords.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={3.5} fill={color} />
        ))}
      </svg>
    </Box>
  )
}

export default function DashboardPreviewSection() {
  return (
    <Box component="section" id="dashboard" sx={{ position: 'relative', py: { xs: 12, sm: 16 }, overflow: 'hidden' }}>
      {/* Background */}
      <Box sx={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}>
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: 600, height: 600, borderRadius: '50%', bgcolor: 'rgba(107,140,255,0.1)', filter: 'blur(120px)' }} />
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 400, height: 400, borderRadius: '50%', bgcolor: 'rgba(74,222,128,0.08)', filter: 'blur(100px)' }} />
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
              label="Dashboard de gastoss"
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
              Evolución histórica de tus servicios
            </Typography>
            <Typography sx={{ mx: 'auto', mt: 2, maxWidth: 600, color: 'text.secondary', fontSize: '1.125rem' }}>
              Visualiza la evolución de montos por categoría de servicio y detecta variaciones de consumo mes a mes.
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
              background: 'linear-gradient(90deg, rgba(107,140,255,0.2), rgba(74,222,128,0.15), rgba(107,140,255,0.2))',
              filter: 'blur(16px)',
            }}
          />

          <Box sx={{
            position: 'relative',
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'rgba(24,24,31,0.8)',
            p: { xs: 2, sm: 3 },
            backdropFilter: 'blur(24px)',
            boxShadow: '0 25px 50px 0 rgba(0,0,0,0.5)',
          }}>
            {/* Header inside panel */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(107,140,255,0.15)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a1 1 0 00-1-1H6a1 1 0 00-1 1v6m4 0h6m-6 0v-9a1 1 0 011-1h2a1 1 0 011 1v9m0 0h4a1 1 0 001-1V8a1 1 0 00-1-1h-2a1 1 0 00-1 1v10" />
                </svg>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>Dashboard de gastos</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Evolución histórica de montos por categoría de servicio.</Typography>
              </Box>
            </Box>

            {/* Category cards grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2, sm: 3 } }}>
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <Box sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(15,15,20,0.6)', p: { xs: 2, sm: 2.5 } }}>
                    {/* Card header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Box sx={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(42,42,62,0.6)' }}>
                        {cat.icon}
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>{cat.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {cat.boletas} boletas · {cat.accumulated} acumulado
                        </Typography>
                      </Box>
                    </Box>

                    {/* Chart */}
                    <LineChart points={cat.points} color={cat.color} />

                    {/* X axis labels */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      {cat.periods.map((p) => (
                        <Typography key={p} variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>{p}</Typography>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
