import { Box } from '@mui/material';
import { Footer } from 'components/admin/Footer';
import { Header } from 'components/admin/Header';
import Head from 'next/head';
import { Sidebar } from '../Sidebar';

export default function Layout({ title, children }) {
  return (
    <Box
      sx={{
        display: 'flex'
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
