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
import { Checkbox, FormControlLabel } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import GoogleSignInButton from '../components/GoogleSignInButton'
import { registerUser } from '../API/auth'

export default function Signup() {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [acceptEmails, setAcceptEmails] = useState(false)
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nombre || !email || !password || !confirmPassword) {
      setSnackbar({ open: true, message: 'Completa todos los campos.', severity: 'error' })
      return
    }

    if (password !== confirmPassword) {
      setSnackbar({ open: true, message: 'Las contraseñas no coinciden.', severity: 'error' })
      return
    }

    if (password.length < 6) {
      setSnackbar({ open: true, message: 'La contraseña debe tener al menos 6 caracteres.', severity: 'error' })
      return
    }

    if (!acceptTerms || !acceptPrivacy) {
      setSnackbar({ open: true, message: 'Debes aceptar los términos y la política de privacidad.', severity: 'error' })
      return
    }

    setLoading(true)
    try {
      const data = await registerUser({
        nombre,
        email,
        password,
        confirmPassword,
        acceptTerms,
        acceptPrivacy,
        acceptEmails,
      })
      localStorage.setItem('token', data.token)
      setSnackbar({ open: true, message: 'Registro exitoso. Bienvenido a Nextura.', severity: 'success' })
      setTimeout(() => window.location.href = `https://nextura-app.pages.dev/?token=${data.token}`, 1000)
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Error al registrarse. Intenta de nuevo.'
      setSnackbar({ open: true, message: msg, severity: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 6, bgcolor: 'rgba(15,15,20,0.8)', backdropFilter: 'blur(24px)', border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
            Crear Cuenta
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Empieza gratis y administra todo desde un solo panel.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              fullWidth
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirmar Contraseña"
              type="password"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Box sx={{ display: 'grid', gap: 1 }}>
              <FormControlLabel
                control={<Checkbox checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />}
                label="Acepto los términos y condiciones."
              />
              <FormControlLabel
                control={<Checkbox checked={acceptPrivacy} onChange={(e) => setAcceptPrivacy(e.target.checked)} />}
                label="He leído la política de privacidad."
              />
              <FormControlLabel
                control={<Checkbox checked={acceptEmails} onChange={(e) => setAcceptEmails(e.target.checked)} />}
                label="Deseo recibir correos y novedades."
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Registrarse'}
            </Button>
            <Divider sx={{ my: 1, color: 'text.secondary', '&::before, &::after': { borderColor: 'divider' } }}>
              <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>o</Typography>
            </Divider>
            <GoogleSignInButton />
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
              ¿Ya tienes una cuenta?{' '}
              <Box
                component="span"
                onClick={() => navigate('/login')}
                sx={{ color: 'primary.light', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
              >
                Inicia sesión
              </Box>
            </Typography>
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
