'use client'
import Image from 'next/image';
import { Box, Button, Container, Grid, Stack, Typography, styled } from '@mui/material';
import { DataType } from '@/app/page';

const StyledImage = styled(Image)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out",
  cursor: 'pointer',
  "&:hover": { filter: 'brightness(.5)' },
}))

export const Instagram = ({data}: {data: DataType}) => {

  const { instagram } = data;
  return (
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
              <StyledImage
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
  )
}