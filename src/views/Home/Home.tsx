import { Avatar, Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export const data = {
  portfolio: [
    {id: 1, url: 'images/evelinastavila/img-1.jpg', alt: 'evelinastavila-1'},
    {id: 2, url: 'images/evelinastavila/img-2.jpg', alt: 'evelinastavila-2'},
    {id: 3, url: 'images/evelinastavila/img-3.jpg', alt: 'evelinastavila-3'},
    // {id: 4, url: 'images/evelinastavila/img-4.jpg', alt: 'evelinastavila-4'},
    {id: 8, url: 'images/evelinastavila/img-8.jpg', alt: 'evelinastavila-8'},
    {id: 9, url: 'images/evelinastavila/img-9.jpg', alt: 'evelinastavila-9'},
    {id: 5, url: 'images/evelinastavila/img-5.jpg', alt: 'evelinastavila-5'},
    // {id: 7, url: 'images/evelinastavila/img-7.jpg', alt: 'evelinastavila-7'},
    // {id: 6, url: 'images/evelinastavila/img-6.jpg', alt: 'evelinastavila-6'},
    {id: 10, url: 'images/evelinastavila/img-10.jpg', alt: 'evelinastavila-10'},
    {id: 11, url: 'images/evelinastavila/img-11.jpg', alt: 'evelinastavila-11'},
    {id: 12, url: 'images/evelinastavila/img-12.jpg', alt: 'evelinastavila-12'},
  ],
  contacts: {
    imgUrl: 'images/evelinastavila/img-10.jpg', 
    imgAlt: 'evelinastavila-10',
  }
}
export const Home = async () => {
  // const res = await fetch('http://37.157.215.65:8080/api/gyms');
  // const data = await res.json();
  // const gyms = data.results as GymType[];

  // const res2 = await fetch('http://37.157.215.65:8080/api/coaches');
  // const data2 = await res2.json();
  // const coaches = data2.results as CoachType[];

  return (
    <>
      <Container maxWidth={false} disableGutters component="section" sx={{position: 'relative', backgroundColor: 'white'}}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          background: 'black',
          opacity: 0.3,
        }} />
        <Typography 
          variant="h1"
          sx={{
            position: 'absolute',
            color: 'white',
            left: 32,
            right: 0,
            bottom: 32,
            fontWeight: 200,
          }}
        >
          Evelina Stavila
        </Typography>
        <video width="1536px" height="600px" muted autoPlay loop 
          style={{
            width: '100%', 
            height: '100vh', 
            objectFit: 'cover',
            objectPosition: 'center',
            marginBottom: '-6px',
          }}
        >
          <source src="images/evelinastavila/video-1.mp4" type="video/mp4" />
          <source src="images/evelinastavila/video-1.mp4" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </Container>


      {/* Params */}
      <Container maxWidth={false} disableGutters sx={{backgroundColor: 'black', mb: {xs: 8, sm: 10}}}>
        <Grid container>
          <Grid item xs={6} md={3}>
            <Stack direction="row" spacing={0.5} justifyContent="center" py={2}>
              <Typography color="white" variant="subtitle2" fontWeight={300} textTransform="uppercase">
                Height:
              </Typography>
              <Typography color="white" variant="subtitle2" fontWeight={500}>
                1.75
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Stack direction="row" spacing={0.5} justifyContent="center" py={2}>
              <Typography color="white" variant="subtitle2" fontWeight={300} textTransform="uppercase">
                Bust:
              </Typography>
              <Typography color="white" variant="subtitle2" fontWeight={500}>
                86
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Stack direction="row" spacing={0.5} justifyContent="center" py={2}>
              <Typography color="white" variant="subtitle2" fontWeight={300} textTransform="uppercase">
                Waist:
              </Typography>
              <Typography color="white" variant="subtitle2" fontWeight={500}>
                69
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Stack direction="row" spacing={0.5} justifyContent="center" py={2}>
              <Typography color="white" variant="subtitle2" fontWeight={300} textTransform="uppercase">
                Hips:
              </Typography>
              <Typography color="white" variant="subtitle2" fontWeight={500}>
                94
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Portfolio */}
      <Container disableGutters maxWidth="xl" sx={{px: 1}}>
        <Typography variant="h4" align="center" textTransform="uppercase" letterSpacing={2} fontWeight={300} mb={4}>
          Portfolio
        </Typography>

        <Grid container spacing={0.5}>
        {
          [...data.portfolio].map((item) => (
            <Grid key={`item-${item.id}`} item xs={12} sm={6} md={4}>
              <Image
                  key={`item-${item.id}`}
                  alt={item.alt}
                  src={item.url || ''}
                  width={512}
                  height={512}
                  style={{
                    minWidth: '100%',
                    minHeight: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    // height: '600px',
                    // width: '384px',
                    objectFit: 'cover',
                  }}
                />
            </Grid>
          ))
        }
      </Grid>
      </Container>

      {/* BIO */}
      <Container maxWidth={false} disableGutters sx={{backgroundColor: 'black', mt: 10, px: 2, py: 6}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <Avatar
                alt="Remy Sharp"
                src={data.contacts.imgUrl}
                sx={{ width: 240, height: 240 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <Typography color="white" letterSpacing={4} fontWeight={300} sx={{textAlign: {xs: 'center', sm: 'left'}}}>
                Hey, I'm Evelina Stavila, represented by WOT Models in Yerevan. 
                Fashion is my passion, and I've walked the runways of Berlin to Yerevan, embracing diversity every step of the way. 
                Let's collaborate on something extraordinary. 
                Reach out via Instagram or WOT Models to make magic happen!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Contact */}
      <Container maxWidth={false} disableGutters sx={{backgroundColor: 'white', px: 2, py: {xs: 8, sm: 10}}}>
        <Grid container spacing={{xs: 8, sm: 4}} direction={{xs: 'column-reverse', sm: 'row'}}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="flex-start" justifyContent={{xs: 'flex-start', sm: 'center'}} height="100%">
              <Box>
                <Typography variant="h4" textTransform="uppercase" letterSpacing={2} fontWeight={300} mb={4}>
                  Contacts
                </Typography>

                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <MailOutlineIcon fontSize="medium" />
                    <Typography variant="subtitle1">evelinastavila@gmail.com</Typography>
                  </Stack>
            
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocalPhoneOutlinedIcon fontSize="medium" />
                    <Typography variant="subtitle1">+37499663322</Typography>
                  </Stack>

                  <Stack direction="row" alignItems="center" spacing={1}>
                    <InstagramIcon fontSize="medium" />
                    <Typography variant="subtitle1">@evelinastavila</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h4" textTransform="uppercase" letterSpacing={2} fontWeight={300} mb={4}>
              Get in Touch
            </Typography>

            <Box component="form" sx={{display: 'flex', flexDirection: 'column', alignItems: {xs: 'stretch', sm: 'flex-start'}, gap: 2}}>
              <TextField fullWidth label="Name" variant="standard" color="info" />
              <TextField fullWidth label="Email" variant="standard" color="info" />
              <TextField multiline minRows={4} fullWidth label="Message" variant="standard" color="info" />
              <Button variant="contained" size="large" color="info" sx={{height: 48, letterSpacing: 3, fontSize: 18}}>
                Submit
              </Button>
            </Box>
          </Grid>
      </Grid>
      </Container>


      {/* Footer */}
      <Container maxWidth={false} disableGutters sx={{backgroundColor: 'black', py: 1, px: 2}}>
          <Typography variant="subtitle2" color="white" align="center" fontWeight={300}>
            Copyright © 2024 B5 Studio. All Rights Reserved.
          </Typography>
      </Container>
    </>
  );
}
