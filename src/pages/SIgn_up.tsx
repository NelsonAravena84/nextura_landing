import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import GoogleSignInButton from '../components/GoogleSignInButton'

export default function Signup() {
  const navigate = useNavigate()

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 6, bgcolor: 'rgba(15,15,20,0.8)', backdropFilter: 'blur(24px)', border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
            Crear Cuenta
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Empieza gratis y administra todo desde un solo panel.          </Typography>
          <Box component="form" sx={{ display: 'grid', gap: 2 }}>
            <TextField label="Nombre" type="text" fullWidth required />
            <TextField label="Correo Electronico" type="email" fullWidth required />
            <TextField label="Contraseña" type="password" fullWidth required />
            <TextField label="Confirmar Contraseña" type="password" fullWidth required />
            <Box
              sx={{
                display: "grid",
                gap: 1,
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Acepto los términos y condiciones."
              />

              <FormControlLabel
                control={<Checkbox />}
                label="He leído la política de privacidad."
              />

              <FormControlLabel
                control={<Checkbox />}
                label="Deseo recibir correos y novedades."
              />
            </Box>
            <Button variant="contained" color="primary" fullWidth size="large" sx={{ mt: 2 }}>
              Registrarse
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
    </Box>
  )
}
