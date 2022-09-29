import { Typography } from '@mui/material';
import Layout from 'components/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title="Admin Index">
      <Typography variant="h1">This is text demo</Typography>
    </Layout>
  );
};

export default Home;
