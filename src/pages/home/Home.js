import React from 'react';

import './Home.scss';

import HeadingDot from '../../components/HeadingDot';
import Container from '../../components/Container';
import SearchForm from '../../components/SearchForm';

const Home = () => {
  return (
    <div className="home-page">
      <Container>
        <div className="centered-box">
          <HeadingDot text="Find an Artist" />
          <SearchForm />
        </div>
      </Container>
    </div>
  );
};

export default Home;
