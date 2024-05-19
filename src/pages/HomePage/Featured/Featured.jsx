import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle
                subHeading="Check it out"
                heading="From Our Menu"
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>May 19, 2027</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>It is very important for the customer to pay attention to the required process. Often, that? I followed him to get free with some small escape, and we can suffer the hardships of the present discoverer of the truth. Some of us, some of us, never suffer from the pleasures which she pleases, or from the softness of flattery, but none of her is softened. To be repulsed, the least of things, for what reason?</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;