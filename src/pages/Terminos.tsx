import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: 'Aceptación de los Términos',
    content:
      'Al acceder y utilizar la plataforma Nextura, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios. Estos términos se rigen por la legislación de la República de Chile.',
  },
  {
    title: 'Marco Legal Aplicable',
    content:
      'Estos Términos y Condiciones se rigen por las leyes vigentes en Chile, incluyendo: la Ley N° 19.628 sobre Protección de la Vida Privada, su reforma Ley N° 21.719 (2025) sobre Protección de Datos Personales, la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, la Ley N° 19.799 sobre Documentos Electrónicos y Firma Electrónica, y el Código Civil y Código de Comercio en lo que corresponda. Cualquier controversia será sometida a los tribunales de justicia de Santiago, Chile.',
  },
  {
    title: 'Descripción del Servicio',
    content:
      'Nextura es una plataforma SaaS que permite a los usuarios gestionar y organizar los servicios de su hogar (agua, luz, gas, internet, entre otros) en un solo lugar. La plataforma ofrece funcionalidades de seguimiento de pagos, recordatorios de vencimiento, visualización de historial de consumo y herramientas de planificación financiera familiar. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto del servicio en cualquier momento, previa notificación a los usuarios.',
  },
  {
    title: 'Registro y Cuenta de Usuario',
    content:
      'Para utilizar Nextura, debes registrarte creando una cuenta proporcionando información veraz y completa. Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de todas las actividades que ocurran bajo tu cuenta. Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta. Nextura no será responsable por pérdidas derivadas del uso no autorizado de tu cuenta.',
  },
  {
    title: 'Obligaciones del Usuario',
    content:
      'Como usuario, te comprometes a: (a) proporcionar información exacta y mantenerla actualizada, (b) no utilizar la plataforma para actividades ilícitas o fraudulentas, (c) no intentar acceder a áreas restringidas del sistema, (d) no interferir con el funcionamiento de la plataforma, (e) no reproducir, distribuir o modificar el contenido de Nextura sin autorización, y (f) cumplir con todas las leyes y regulaciones aplicables.',
  },
  {
    title: 'Propiedad Intelectual',
    content:
      'Todo el contenido, diseño, logotipos, marcas, código fuente, y materiales presentes en Nextura son propiedad exclusiva de Nextura o de sus licenciantes y están protegidos por las leyes de propiedad intelectual chilenas e internacionales. Queda prohibida la reproducción, distribución, comunicación pública o transformación de estos contenidos sin autorización expresa de Nextura, conforme a la Ley N° 17.336 sobre Propiedad Intelectual.',
  },
  {
    title: 'Suscripciones y Pagos',
    content:
      'Nextura ofrece planes gratuitos y de pago. Los términos específicos de cada plan se describen en nuestra sección de precios. Los pagos se procesan a través de plataformas de pago seguras. Al suscribirte a un plan de pago, autorizas el cobro periódico según la frecuencia seleccionada. Puedes cancelar tu suscripción en cualquier momento; el acceso al servicio se mantendrá hasta el final del período facturado. No se realizarán reembolsos parciales por períodos no utilizados, en cumplimiento con la Ley N° 19.496.',
  },
  {
    title: 'Privacidad y Protección de Datos',
    content:
      'El tratamiento de tus datos personales se rige por nuestra Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones. Nextura cumple con la Ley N° 19.628 y la Ley N° 21.719, garantizando la confidencialidad, integridad y disponibilidad de tus datos. Puedes ejercer tus derechos ARCO y de portabilidad contactándonos a privacidad@nextura.cl.',
  },
  {
    title: 'Limitación de Responsabilidad',
    content:
      'Nextura no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del servicio, incluyendo pero no limitado a pérdida de datos, interrupción del servicio, o errores en la información proporcionada por terceros. Nuestra responsabilidad máxima ante cualquier reclamo no excederá el monto total pagado por el usuario durante los 12 meses anteriores al evento que dio origen al reclamo.',
  },
  {
    title: 'Cancelación y Terminación',
    content:
      'Puedes cancelar tu cuenta en cualquier momento desde la configuración de tu perfil. Nextura se reserva el derecho de suspender o terminar tu acceso al servicio si violas estos términos o incurres en conductas que puedan dañar la plataforma u otros usuarios. En caso de terminación, cesará tu derecho a usar el servicio, pero las disposiciones de propiedad intelectual, limitación de responsabilidad y solución de controversias seguirán vigentes.',
  },
  {
    title: 'Modificaciones de los Términos',
    content:
      'Nextura puede modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán notificadas a los usuarios a través de la plataforma y por correo electrónico con al menos 15 días de anticipación. El uso continuado del servicio después de la entrada en vigencia de las modificaciones constituye la aceptación de los nuevos términos.',
  },
  {
    title: 'Contacto y Notificaciones',
    content:
      'Para cualquier consulta relacionada con estos Términos y Condiciones, puedes contactarnos a través de: Correo electrónico: legal@nextura.cl / Dirección: Santiago, Chile. Las notificaciones legales se realizarán por escrito y se enviarán al último correo electrónico registrado por el usuario.',
  },
]

export default function Terminos() {
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
            Términos y Condiciones
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
            En cumplimiento con la legislación vigente de la República de Chile
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
