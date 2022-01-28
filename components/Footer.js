import {
  Typography,
  Grid,
  Stack,
  MenuItem,
  Select,
  Container,
  Box,
} from "@mui/material";

export const Footer = () => {
  return (
    <Box>
      <Container className="h-24" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <h2>About Us</h2>
            <Typography variant="caption" component="a" href="#">
                    Careers
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Terms & Conditions
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Privacy Policy
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                <h2>Custumer Care</h2>
                  <Typography variant="caption" component="a" href="#">
                   Help Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                  Returns & Refunds
                   </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Legales
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                <h2>Contact US</h2>
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
    </Box>
  );
};
