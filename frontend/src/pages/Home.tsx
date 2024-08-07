import React from 'react';
import NavigationBar from '../components/Navbar';
import Heroes from '../components/Heroes';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Album from '../components/Album';

import { Container } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div>
      <Container fluid className='p-0'>
        <NavigationBar />
        <Heroes />
        <Features />
        <Album />
        <Footer />
      </Container>
    </div>
  );
}

export default Home;
