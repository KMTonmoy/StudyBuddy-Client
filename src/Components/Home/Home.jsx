import React from 'react';
import Banner from '../Header/Banner';
import Feature from '../Feature/Feature';
import FAQ from '../Faq/FAQ';
import Assignment from '../Assignment/Assignment';
import Testimonials from '../Testimonials/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Assignment></Assignment>
            <FAQ></FAQ>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;