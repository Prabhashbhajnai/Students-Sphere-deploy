import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import gravatar from 'gravatar';


// Images
// import logo from "../../Assets/logo.png"
import logo from "../../Assets/Student Sphere.png"


// components
import AddQuestionCard from '../Forum/AddQuestionCard';
import SignIn from '../Auth/Signin';
import SignUp from '../Auth/Signup';

// redux action
import { signOut } from '../../Redux/Reducer/auth/auth.action';

const MobileNav = ({ SignIn, SignUp }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();

    const reduxState = useSelector(global => global.user.user);

    const signOutHandler = () => dispatch(signOut());

    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <Link to={"/"}>
                <div className="w-28 h-28">
                    <img src={logo}
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
            </Link>
            <div className="flex items-center gap-3">
                <button className="bg-customPink-200  text-white py-2 px-3 rounded-full">
                    UseApp
                </button>
                {
                    reduxState?.user?.fullname ? (
                        <>
                            <div onClick={() => setIsDropDownOpen(prev => !prev)} className="border p-2 border-gray-500 text-Library-300 w-12 h-12 rounded-full">
                                <img
                                    src={gravatar.url(reduxState?.user?.email)}
                                    alt={reduxState?.user?.email}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            {isDropDownOpen && (
                                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 z-20 bg-white w-full flex flex-col gap-2">
                                    <button onClick={signOutHandler}>Sign Out</button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <span onClick={() => setIsDropDownOpen(prev => !prev)} className="border p-2 border-gray-500 text-Library-300 rounded-full">
                                <FaUserAlt />
                            </span>
                            {isDropDownOpen && (
                                <div className="absolute shadow-lg py-3 top-20 -right-1 z-20 bg-white w-1/2 flex flex-col gap-2">
                                    <button onClick={SignIn}>Sign In</button>
                                    <button onClick={SignUp}>Sign Up</button>
                                </div>
                            )}
                        </>
                    )
                }
            </div>
        </div>
    );
};

const LargeNav = ({ SignIn, SignUp }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const dispatch = useDispatch();

    const reduxState = useSelector(global => global.user.user);

    const signOutHandler = () => dispatch(signOut());

    return (
        <>
            <div className="flex w-full bg-grey-50">
                <div className="hidden w-full mr-20 items-center justify-between lg:flex gap-5 ">
                    <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }} className='flex items-center gap-4'>
                        <div className="pl-2 w-28 h-24">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                        <h1 className='text-2xl w-54 mr-6'>Student's Sphere</h1>
                    </Link>
                    <div className="w-2/4 ">
                        {/* <div className="flex items-center gap-2 ">
                            <RiSearch2Line />
                            <input
                                type="search"
                                placeholder="Search for your books"
                                className="w-full focus:outline-none"
                            />
                        </div> */}
                    </div>
                    <div className='flex mr-5 mb-4'>
                        <AddQuestionCard />
                    </div>
                    {
                        reduxState?.user?.fullname ? (
                            <div className="relative w-20">
                                <div onClick={() => setIsDropDownOpen(prev => !prev)} className="border p-2 border-gray-500 text-Library-300 w-12 h-12 rounded-full">
                                    <img
                                        src={gravatar.url(reduxState?.user?.email)}
                                        alt={reduxState?.user?.email}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                {isDropDownOpen && (
                                    <div className="absolute shadow-lg right-4 items-center w-full bg-white z-30 flex flex-col gap-2">
                                        <button onClick={signOutHandler} className='items-center'>Sign Out</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex gap-4">
                                <button onClick={SignIn} className="text-gray-500 text-xl hover:text-gray-800">
                                    Login
                                </button>
                                <button onClick={SignUp} className="text-gray-500 text-xl hover:text-gray-800">
                                    Signup
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

const ForumNavbar = () => {

    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const openSignInModal = () => setOpenSignin(true)
    const openSignUpModal = () => setOpenSignup(true)

    return (
        <>
            <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
            <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />

            <nav className="lg:sticky lg:top-0 py-0 flex shadow-md lg:shadow-none w-full flex-col items-center">
                <MobileNav SignIn={openSignInModal} SignUp={openSignUpModal} />
                <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />
            </nav>
        </>
    );
};

export default ForumNavbar;