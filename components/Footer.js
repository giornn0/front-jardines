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
import {useState} from "react"

export const Footer = () => {
  const [hovering,setHovering] = useState('')

  return (
    <Grid >
      <Container className="h-max" sx={{ py: 6 }}>
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
                    <Grid className="icons">
                      <Typography><Link style={{ textDecoration: "none",color:'black' }} href="https://www.facebook.com/" target="_blank" spacing={0.5}>
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[#345ead]" onMouseEnter={()=>{setHovering('face')}} onMouseLeave={()=>setHovering('')}>
                          <FacebookIcon className={hovering=='face'?'text-white':'text-black'} />
                      </Button>
                        </Link></Typography>
                      <Typography><Link style={{ textDecoration: "none",color:'black' }}  href="https://www.instagram.com/" target="_blank" spacing={0.5}>
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[#da385b]" onMouseEnter={()=>{setHovering('insta')}} onMouseLeave={()=>setHovering('')}>
                          <InstagramIcon className={hovering=='insta'?'text-white':'text-black'}/>
                      </Button>
                        </Link></Typography>
                      <Typography><Link style={{ textDecoration: "none",color:'black' }}  href="https://www.twitter.com/" target="_blank" spacing={0.5}>
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[#acddec]" onMouseEnter={()=>{setHovering('twitter')}} onMouseLeave={()=>setHovering('')}>
                          <TwitterIcon className={hovering=='twitter'?'text-white':'text-black'}/>
                      </Button>
                        </Link></Typography>
                        
                        
                        
                    </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Grid>
  );
};