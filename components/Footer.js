import {
  Typography,
  Grid,
  Stack,
  MenuItem,
  Select,
  Container,
  Box,
  Link,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <Grid>
      <Container className="h-24" sx={{ py: 6 }}>
        <Stack spacing={2}>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={4} md={3}>
                <Stack spacing={1}>
                  <h2>About Us</h2>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>Careers</Link>
                  </Typography>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>
                      Terms & Conditions
                    </Link>
                  </Typography>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>
                     
                      Privacy Policy
                    </Link>
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={1}>
                  <h2>Custumer Care</h2>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}> Help Center</Link>
                  </Typography>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>
                      Returns & Refunds
                    </Link>
                  </Typography>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}> Legales</Link>
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={1}>
                  <h2>Help & Support</h2>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>
                     
                      Terminos y Condiciones
                    </Link>
                  </Typography>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>Contacto</Link>
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={1}>
                  <h2>Social Media</h2>
                  <Typography>
                    <Grid className="icons">
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[white]">
                        <Link style={{ textDecoration: "none",color:'black' }} spacing={0.5}>
                          <FacebookIcon />
                        </Link>
                      </Button>
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[white]">
                        <Link style={{ textDecoration: "none",color:'black' }} spacing={0.5}>
                          <InstagramIcon />
                        </Link>
                      </Button>
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[white]">
                        <Link style={{ textDecoration: "none",color:'black' }} spacing={0.5}>
                          <TwitterIcon />
                        </Link>
                      </Button>
                    </Grid>
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
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <MenuItem value="ESP">Español</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </Select>
          </Box>
        </Stack>
      </Container>
    </Grid>
  );
};
