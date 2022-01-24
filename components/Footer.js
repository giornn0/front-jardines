import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
export const Footer = () => {
  return (
    <Box >

      <Container className='h-24'   sx={{ py: 6 }}>
        <Stack spacing={4}>

          <Typography>
            Telefono ? Call 0800-321-2130
          </Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    FAQ
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Investor Relations
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Privacidad
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Speed Test
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Help Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Jobs
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Cookie Preferences
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Legales
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Cuenta
                  </Typography>
                <Typography variant="caption" component="a" href="#">
                    Corporate Information
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                  Contact Us
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Media Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                  Terminos y Condiciones
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Social Media
                  </Typography>
                </Stack>
              </Grid>

            </Grid>
          </Box>

          <Box>
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="EN"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
               
              }}
            >
             
             <MenuItem value="ESP">Español</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </Select>
              
          </Box>
          <Typography variant="caption">Colegios App</Typography>
        

        </Stack>
      </Container>

    </Box>
  )
}

