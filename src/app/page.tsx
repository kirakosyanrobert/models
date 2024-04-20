import { resources } from '@/mock';
import { Home } from '@/views/Home';
import { Container, Typography } from '@mui/material';

export type DataType = {
  id: number;
  meta: {
    title: string;
    description: string;
  };
  general: {
    title: string;
  };
  banner: {
    id: number;
    url: string;
    alt: string;
  }[];
  params: {
    id: number;
    label: string;
    value: string;
  }[];
  portfolio: {
    id: number;
    url: string;
    alt: string;
    order: number;
  }[];
  bio: {
    media: {
      id: number;
      url: string;
      alt: string;
    };
    content: string;
  };
  contacts: {
    id: number;
    type: 'email' | 'phone' | 'instagram';
    value: string;
    order: number;
  }[];
};

const NotFountMarkup = (
  <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
    <Typography variant="h4">Page Not Found</Typography>
  </Container>
)

export default function HomePage() {
  // const res = await fetch('http://37.157.215.65:8080/api/gyms');
  // const data = await res.json();
  // const gyms = data.results as GymType[];
  const data = resources.find(r => r.id === Number(process.env.MODEL_ID));

  if (!data) return NotFountMarkup;

  return <Home data={data} />;
}
