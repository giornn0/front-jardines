import {
  Typography,
  Grid,
  Stack,
  MenuItem,
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
    <Grid  className=" flex justify-center">
      <Container className="fixed bottom-1 " >
        <Stack spacing={2}>
          <Box>
            <Grid container spacing={4}>
              <Grid  className="text-center" item xs={4} md={3}>
                <Stack spacing={1}>
                  <h2>About Us</h2>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>Careers</Link>
                  </Typography>
              
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>
                     
                      Privacy Policy
                    </Link>
                  </Typography>
                </Stack>
              </Grid>
              <Grid  className="text-center" item xs={6} md={3}>
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
                    <Link style={{ textDecoration: "none",color:'black' }}> Legals</Link>
                  </Typography>
                </Stack>
              </Grid>
              <Grid className="text-center" item xs={6} md={3}>
                <Stack spacing={1}>
                  <h2>Help & Support</h2>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>
                     
                    Terms and Conditions
                    </Link>
                  </Typography>
                  <Typography>
                    <Link style={{ textDecoration: "none",color:'black' }}>
                      Contact
                    </Link>
                  </Typography>
                </Stack>
              </Grid>
              <Grid className="text-center" item xs={6} md={3}>
                <Stack  spacing={1}>
                  <h2 >Social Media</h2>
                
                    <Grid >
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[#345ead]">
                        <Link style={{ textDecoration: "none",color:'black' }} href="https://www.facebook.com/" target="_blank" spacing={0.5}>
                          <FacebookIcon />
                        </Link>
                      </Button>
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[#b1476a]">
                        <Link style={{ textDecoration: "none",color:'black' }}  href="https://www.instagram.com/" spacing={0.5}>
                          <InstagramIcon />
                        </Link>
                      </Button>
                      <Button className="h-10 px-5 text-black-100 transition-colors duration-150 bg-black-700 rounded-lg focus:shadow-outline hover:bg-black-800 cursor-pointer hover:bg-[#357d8f]">
                        <Link style={{ textDecoration: "none",color:'black' }}  href="https://twitter.com/" spacing={0.5}>
                          <TwitterIcon />
                        </Link>
                      </Button>
                    </Grid>
                   
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <p className="text-center p-4"> © 2022 Schools.com, Inc. All Rights Reserved </p>
        </Stack>
      </Container>
    </Grid>
  );
};