import React from 'react';
import Feed from '../Components/Feed/Feed';
import Head from './help/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;
