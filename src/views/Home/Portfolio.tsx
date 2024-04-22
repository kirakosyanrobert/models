'use client'
import Image from 'next/image';
import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import { DataType } from '@/app/page';

const StyledImage = styled(Image)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out",
  "&:hover": { transform: "scale(1.15)" },
}))

export const Portfolio = ({data}: {data: DataType}) => {

  const { portfolio } = data;
  return (
    <Container disableGutters maxWidth="xl" sx={{px: 1}}>
      <Typography variant="h4" align="center" textTransform="uppercase" letterSpacing={2} fontWeight={300} mb={5}>
        Portfolio
      </Typography>

      <Grid container spacing={0.5}>
        {
          portfolio.map((item) => (
            <Grid key={`item-${item.id}`} item xs={12} sm={6} md={4}>
              <Box sx={{ position: 'relative', width: '100%', background: 'cover', overflow: 'hidden', cursor: 'pointer' }}>
                <StyledImage
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
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}