import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 6, bgcolor: 'rgba(15,15,20,0.8)', backdropFilter: 'blur(24px)', border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
            Iniciar sesión
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Accede a tu cuenta de Nextura
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Correo electrónico" type="email" fullWidth required />
            <TextField label="Contraseña" type="password" fullWidth required />
            <Button variant="contained" color="primary" fullWidth size="large" sx={{ mt: 2 }}>
              Iniciar sesión
            </Button>
            <Button variant="text" onClick={() => navigate('/')} sx={{ color: 'text.secondary' }}>
              Volver al inicio
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
