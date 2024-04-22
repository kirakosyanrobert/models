import Image from 'next/image';
import { Avatar, Box, Button, Container, Grid, Stack, TextField, Typography, styled } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import { DataType } from '@/app/page';
import { Portfolio } from './Portfolio';

const getContactIcon = (type: string) => {
  switch(type) {
    case 'email':
      return <MailOutlineIcon fontSize="medium" />;
    case 'phone':
      return <LocalPhoneOutlinedIcon fontSize="medium" />;
    case 'instagram':
      return <InstagramIcon fontSize="medium" />;
    default:
      return null;
  }
}

export const Home = async ({data}: {data: DataType}) => {

  const { general, banner, params, instagram, portfolio, bio, contacts } = data;
  
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
            bottom: 40,
            fontWeight: 200,
            zIndex: 1,
            px: 1,
            fontSize: { xs: '64px', sm: '96px'},
            whiteSpace: 'pre-wrap'
          }}
        >
          {general.title}
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
          <source src={banner[0]?.url} type="video/mp4" />
          <source src="" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </Container>


      {/* Params */}
      <Container maxWidth={false} sx={{ backgroundColor: 'black', mb: { xs: 8, sm: 10 }}}>
        <Box maxWidth="xl" mx="auto">
          <Grid container justifyContent="center">
            {
              params.map((param) => (
                <Grid item xs={4} sm={3} md={3} lg={2} key={`param-${param.id}`}>
                  <Stack direction="row" spacing={0.5} justifyContent="center" py={2}>
                    <Typography color="white" variant="subtitle2" fontWeight={300} textTransform="uppercase">
                      {param.label}
                    </Typography>
                    <Typography color="white" variant="subtitle2" fontWeight={500}>
                      {param.value}
                    </Typography>
                  </Stack>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>

      {/* Portfolio */}
      <Portfolio data={data} />

      {/* BIO */}
      <Container maxWidth={false} disableGutters sx={{ backgroundColor: 'black', mt: { xs: 8, sm: 14 } }}>
        <Box maxWidth="xl" mx="auto" sx={{ px: 2, py: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <Avatar
                  alt="Remy Sharp"
                  src={bio.media.url}
                  sx={{ width: 240, height: 240 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <Typography color="white" letterSpacing={4} fontWeight={300} sx={{ textAlign: { xs: 'center', sm: 'left' }}}>
                  {bio.content}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Instagram */}
      <Container disableGutters maxWidth="xl" sx={ { px: 1, mt: { xs: 8, sm: 14 } }}>
        <Stack justifyContent="center" mb={4}>
          <Typography variant="h4" align="center" textTransform="uppercase" letterSpacing={2} fontWeight={300}>
            Instagram
          </Typography>
          <Typography variant="subtitle2" align="center" fontWeight={600} sx={{ textDecoration: 'underline'}}>
            {instagram.nickname}
          </Typography>
        </Stack>

        <Grid container spacing={0.5}>
          {
            instagram.media.map((item) => (
              <Grid key={`item-${item.id}`} item xs={6} sm={4} md={3} lg={2}>
                <Image
                  key={`item-${item.id}`}
                  alt={item.alt}
                  src={item.url || ''}
                  width={220}
                  height={220}
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

      {/* Contact */}
      <Container maxWidth="xl" sx={{ backgroundColor: 'white', py: { xs: 8, sm: 14 }}}>
        <Grid container spacing={{ xs: 8, sm: 4 }} direction={{ xs: 'column-reverse', sm: 'row' }}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="flex-start" justifyContent={{ xs: 'flex-start', sm: 'center' }} height="100%">
              <Box>
                <Typography variant="h4" textTransform="uppercase" letterSpacing={2} fontWeight={300} mb={4}>
                  Contacts
                </Typography>

                <Stack spacing={2}>
                  {
                    contacts.map((contact) => (
                      <Stack direction="row" alignItems="center" spacing={1} key={`contact-${contact.id}`}>
                        {getContactIcon(contact.type)}
                        <Typography variant="subtitle1">{contact.value}</Typography>
                      </Stack>
                    ))
                  }
                </Stack>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h4" textTransform="uppercase" letterSpacing={2} fontWeight={300} mb={4}>
              Get in Touch
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'stretch', sm: 'flex-start' }, gap: 2 }}>
              <TextField fullWidth label="Name" variant="standard" color="info" />
              <TextField fullWidth label="Email" variant="standard" color="info" />
              <TextField multiline minRows={4} fullWidth label="Message" variant="standard" color="info" />
              <Button 
                variant="contained"
                size="large"
                color="info"
                disableRipple
                sx={{ mt: 4, px: 7, height: 48, letterSpacing: 3, fontSize: 18, ":hover": { backgroundColor: '#212121' } }}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Container maxWidth={false} disableGutters sx={{ backgroundColor: 'black', py: 1, px: 2 }}>
          <Typography variant="subtitle2" color="white" align="center" fontWeight={300}>
            Copyright © 2024 B5 Studio. All Rights Reserved.
          </Typography>
      </Container>
    </>
  );
}
