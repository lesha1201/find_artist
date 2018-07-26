import React from 'react';
import HeadingDot from '../../components/HeadingDot';
import Container from '../../components/Container';

const Home = () => {
  return (
    <div className="home-page">
      <Container>
        <div className="centered-box">
          <HeadingDot text="Find an Artist" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
