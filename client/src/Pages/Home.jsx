import React from 'react';
import { Link } from 'react-router-dom';

// Components
import HomeButtons from '../components/Home/Buttons';

// images
import laptop from "../Images/laptop.jpg"

const HomePage = () => {
    return (
        <>
            <div className='flex flex-col gap-20'>
                <div className='flex w-full mr-4 gap-3 items-center'>
                    <div className='container w-2/4 align-left items-start m-0'>
                        <img src={laptop}
                            alt="laptop"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-2/4 justify-items-start'>
                        <h1 className='text-4xl font-bold'>Student's Sphere</h1>
                        <p>A one stop destination for students. Here you can find a library specifically designed for students along with previous year question papers. New students can also interact with seniors in order to ask questions about the college on the forum.</p>
                        <p>Click below buttons to visit respective sections: </p>
                        <div className='flex gap-5 mt-2'>
                            <Link to="/library" style={{ textDecoration: 'none', color: 'black' }}>
                                <HomeButtons>Library</HomeButtons>
                            </Link>
                            <Link to="/forum" style={{ textDecoration: 'none', color: 'black' }}>
                                <HomeButtons>Forum</HomeButtons>
                            </Link>
                            <HomeButtons>Resume Generator</HomeButtons>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className='bg-customPink-50 w-full h-56 '>
                    <div className='flex mt-12 justify-evenly'>
                        <div className='w-5/12'>
                            <h1 className='text-2xl font-semibold'>About</h1>
                            <p className='mt-2'>Student's Sphere is a one stop solution created by students for students for both academics as well as social interaction.</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Tech Used</h1>
                            <ul className='mt-2'>
                                <li>Express js</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Contact Us</h1>
                            <ul className='mt-2'>
                                <li>GitHub</li>
                                <li>Linkedin</li>
                                <li>Instagram</li>
                                <li>Email</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default HomePage;