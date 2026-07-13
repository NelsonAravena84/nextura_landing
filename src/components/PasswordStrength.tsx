import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Check from '@mui/icons-material/Check'
import Close from '@mui/icons-material/Close'
import { getPasswordRules, getPasswordStrength } from '../API/passwordValidation'

interface Props {
  password: string
}

export default function PasswordStrength({ password }: Props) {
  if (!password) return null

  const rules = getPasswordRules(password)
  const strength = getPasswordStrength(password)
  const allPassed = rules.every((r) => r.passed)

  const strengthPercent = (strength.score / 5) * 100

  const progressColor = strength.color === 'success' ? 'success'
    : strength.color === 'info' ? 'info'
    : strength.color === 'warning' ? 'warning'
    : 'error'

  return (
    <Box sx={{ mt: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Typography variant="caption" color="text.secondary">
          Fuerza:
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontWeight: 600, color: `${strength.color}.main` }}
        >
          {strength.label}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={strengthPercent}
        color={progressColor}
        sx={{
          height: 4,
          borderRadius: 2,
          mb: 1.5,
          bgcolor: 'rgba(255,255,255,0.08)',
          '& .MuiLinearProgress-bar': { borderRadius: 2 },
        }}
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0.5 }}>
        {rules.map((rule) => (
          <Box key={rule.id} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {rule.passed ? (
              <Check sx={{ fontSize: 14, color: 'success.main' }} />
            ) : (
              <Close sx={{ fontSize: 14, color: 'text.secondary', opacity: 0.5 }} />
            )}
            <Typography
              variant="caption"
              sx={{
                color: rule.passed ? 'success.main' : 'text.secondary',
                opacity: rule.passed ? 1 : 0.6,
              }}
            >
              {rule.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
