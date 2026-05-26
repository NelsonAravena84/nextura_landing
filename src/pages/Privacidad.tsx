import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: 'Introducción',
    content:
      'En Nextura, nos tomamos muy en serio la privacidad de tus datos. Esta política explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas nuestra plataforma de gestión de servicios del hogar. Cumplimos con la legislación chilena vigente en materia de protección de datos personales.',
  },
  {
    title: 'Marco Legal Aplicable',
    content:
      'Nextura se rige por la Ley N° 19.628 sobre Protección de la Vida Privada y su reforma moderna, la Ley N° 21.719 (publicada en 2025), que fortalece la protección de datos personales en Chile. Esta nueva normativa crea la Agencia de Protección de Datos Personales, establece el consentimiento explícito como regla general, incorpora los principios de finalidad, proporcionalidad y calidad de los datos, y otorga a los titulares los derechos de acceso, rectificación, cancelación, oposición (ARCO) y portabilidad. Asimismo, seguimos los lineamientos del Reglamento General de Protección de Datos (GDPR) de la Unión Europea como estándar internacional de buenas prácticas.',
  },
  {
    title: 'Datos que Recopilamos',
    content:
      'Recopilamos únicamente los datos necesarios para brindarte nuestros servicios: nombre, correo electrónico, dirección de tu hogar, información de servicios básicos (agua, luz, gas, internet) y datos de pago. Toda recolección se realiza con tu consentimiento previo y explícito, conforme al artículo 4° de la Ley N° 19.628 y los estándares de la Ley N° 21.719.',
  },
  {
    title: 'Finalidad del Tratamiento',
    content:
      'Tus datos son utilizados exclusivamente para: (a) proporcionar y mejorar nuestra plataforma de gestión de servicios del hogar, (b) enviar notificaciones sobre tus cuentas y vencimientos, (c) procesar pagos de manera segura, (d) enviar comunicaciones relevantes sobre el servicio previo consentimiento, y (e) cumplir con obligaciones legales y regulatorias. No utilizamos tus datos para fines distintos a los informados sin obtener primero tu autorización.',
  },
  {
    title: 'Almacenamiento y Seguridad',
    content:
      'Implementamos medidas técnicas y organizativas de seguridad acordes a los estándares de la industria: cifrado SSL/TLS en todas las comunicaciones, cifrado en reposo de datos sensibles, autenticación multifactor, monitoreo continuo de accesos y auditorías periódicas de seguridad. Tus datos se almacenan en servidores ubicados dentro de Chile y la región, cumpliendo con las exigencias de la Ley N° 21.719 en materia de seguridad de los datos.',
  },
  {
    title: 'Derechos del Titular (ARCO y Portabilidad)',
    content:
      'De acuerdo con la legislación chilena, tienes derecho a: (i) Acceder a tus datos personales que tenemos en nuestro poder, (ii) Rectificar datos inexactos o incompletos, (iii) Cancelar o suprimir tus datos cuando no sean necesarios para los fines informados, (iv) Oponerte al tratamiento de tus datos para fines específicos, y (v) Solicitar la portabilidad de tus datos a otro proveedor. Puedes ejercer estos derechos escribiéndonos a privacidad@nextura.cl. Responderemos tu solicitud dentro del plazo legal de 10 días hábiles.',
  },
  {
    title: 'Consentimiento y Revocación',
    content:
      'Tu consentimiento es la base del tratamiento de tus datos. Puedes revocarlo en cualquier momento contactándonos a privacidad@nextura.cl. La revocación del consentimiento no afectará la licitud del tratamiento realizado antes de su retiro, conforme al artículo 5° de la Ley N° 21.719.',
  },
  {
    title: 'Transferencias a Terceros',
    content:
      'No compartimos tus datos personales con terceros sin tu consentimiento, salvo cuando sea necesario para cumplir con una obligación legal o para procesar pagos a través de plataformas autorizadas (como sistemas de pago electrónico). En tales casos, exigimos a los terceros el cumplimiento de estándares de protección de datos equivalentes a los nuestros.',
  },
  {
    title: 'Agencia de Protección de Datos Personales',
    content:
      'Con la entrada en vigencia de la Ley N° 21.719, la Agencia de Protección de Datos Personales es el organismo fiscalizador encargado de velar por el cumplimiento de la normativa de protección de datos en Chile. Si consideras que hemos vulnerado tus derechos, puedes presentar un reclamo ante esta agencia. Como empresa comprometida con la privacidad, colaboramos plenamente con la autoridad y mantenemos un registro de todas las actividades de tratamiento de datos.',
  },
  {
    title: 'Actualizaciones de esta Política',
    content:
      'Esta política de privacidad se actualiza al 2026 y puede ser modificada para reflejar cambios en nuestras prácticas o en la legislación aplicable. Notificaremos cualquier cambio significativo a través de nuestra plataforma y por correo electrónico. Te recomendamos revisar esta política periódicamente.',
  },
  {
    title: 'Contacto',
    content:
      'Si tienes preguntas, comentarios o inquietudes sobre esta política de privacidad o sobre el tratamiento de tus datos personales, puedes contactarnos a través de: Correo electrónico: privacidad@nextura.cl / Dirección: Santiago, Chile. Estaremos encantados de atenderte.',
  },
]

export default function Privacidad() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />

      <Box
        sx={{
          pt: { xs: 12, sm: 16 },
          pb: { xs: 6, sm: 10 },
          background: 'linear-gradient(to bottom, rgba(107,140,255,0.08), transparent)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.875rem', sm: '2.5rem', lg: '3rem' },
              letterSpacing: '-0.03em',
              mb: 2,
            }}
          >
            Política de Privacidad
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.125rem' }, mb: 0.5 }}
          >
            Última actualización: mayo de 2026
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.125rem' } }}
          >
            En cumplimiento con la Ley N° 19.628 y la Ley N° 21.719 de la República de Chile
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ pb: { xs: 8, sm: 12 } }}>
        {sections.map((section, index) => (
          <Box key={section.title}>
            {index > 0 && <Divider sx={{ borderColor: 'divider', my: { xs: 4, sm: 5 } }} />}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                mb: 2,
                color: 'primary.light',
              }}
            >
              {index + 1}. {section.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
              }}
            >
              {section.content}
            </Typography>
          </Box>
        ))}
      </Container>

      <Footer />
    </Box>
  )
}
