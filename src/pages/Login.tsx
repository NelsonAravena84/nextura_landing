import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from 'react-router-dom'
import GoogleSignInButton from '../components/GoogleSignInButton'
import { loginUser } from '../API/auth'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setSnackbar({ open: true, message: 'Completa todos los campos.', severity: 'error' })
      return
    }

    setLoading(true)
    try {
      const data = await loginUser({ email, password })
      localStorage.setItem('token', data.token)
      setSnackbar({ open: true, message: 'Inicio de sesion exitoso.', severity: 'success' })
      setTimeout(() => window.location.href = `https://nextura-app.pages.dev/?token=${data.token}`, 1000)
    } catch (err: any) {
      if (err.response?.status === 429) {
        setSnackbar({ open: true, message: 'Demasiados intentos. Espera unos minutos antes de intentar de nuevo.', severity: 'error' })
      } else {
        const msg = err.response?.data?.error || 'Error al iniciar sesion. Intenta de nuevo.'
        setSnackbar({ open: true, message: msg, severity: 'error' })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 6, bgcolor: 'rgba(15,15,20,0.8)', backdropFilter: 'blur(24px)', border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
            Iniciar sesion
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Accede a tu cuenta de Nextura
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Correo electronico"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ maxLength: 255, autoComplete: 'email' }}
            />
            <TextField
              label="Contrasena"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{ maxLength: 128, autoComplete: 'current-password' }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Iniciar sesion'}
            </Button>
            <Divider sx={{ my: 1, color: 'text.secondary', '&::before, &::after': { borderColor: 'divider' } }}>
              <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>o</Typography>
            </Divider>
            <GoogleSignInButton />
            <Button variant="text" onClick={() => navigate('/')} sx={{ color: 'text.secondary' }}>
              Volver al inicio
            </Button>
          </Box>
        </Paper>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
