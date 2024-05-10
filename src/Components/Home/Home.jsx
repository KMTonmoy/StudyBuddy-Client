import React from 'react';
import Banner from '../Header/Banner';
import Feature from '../Feature/Feature';
import FAQ from '../Faq/FAQ';
import Assignment from '../Assignment/Assignment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Assignment></Assignment>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;