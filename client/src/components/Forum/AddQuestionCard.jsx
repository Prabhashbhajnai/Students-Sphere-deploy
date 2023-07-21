import React, { useState } from 'react';
import { IoCreateOutline } from 'react-icons/io5'

// components
import QuestionModal from './QuestionModal';

const AddQuestionCard = () => {
    let [isOpen, setIsOpen] = useState(false);

    const openModal = () => { 
        if(!localStorage.studentHubUser){
            return alert("Please Sign in to post a Question");
        }

        setIsOpen(true) 
    };

    return (
        <>
            <QuestionModal isOpen={isOpen} setIsOpen={setIsOpen} className='w-3/5' />
            <button onClick={openModal} className='flex flex-wrap items-center text-black mt-4'>
                <IoCreateOutline className='text-2xl' /><h1 className='text-xl'>Create Post</h1>
            </button>
        </>
    )
}

export default AddQuestionCard