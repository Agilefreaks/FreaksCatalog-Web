import React from 'react';
import homeImg from '../../images/homeIMG.jpeg';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Who are we?</h1>
      <p className="home__description">
        The short version, we are a company founded in 2014, by developers for developers,
        with 26 freaks and still counting.
        <hr />
        The long version is we are a flat structure company,
        with no corporate ladders and micromanagement.
        Transparency is key for the way we work and everyone has access
        to all information regarding the company. And by this, we also mean
        financial data, like income, expenses and how we calculate salaries too.
      </p>
      <img className="home__img" src={ homeImg } alt="home" />
    </div>
  );
}

export default Home;
