import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import QuestionCard from '../../components/Forum/QuestionCard';
import FAQCard from '../../components/Forum/FAQCard';

// redux action
import { getQuestion } from '../../Redux/Reducer/Forum/forum.action';

const ForumHome = () => {

    const [sourceLiist, setSourceList] = useState([
        {
            _id: "1",
            question: "How is the infrastructure?",
            link: "forum/625daef46a58e26b4c8eafcb",
        },
        {
            _id: "2",
            question: "How is the placement record?",
            link: "forum/625db04e6a58e26b4c8eafcd",
        },
        {
            _id: "3",
            question: "What departments or programs have the best reputations?",
            link: "forum/625db12a6a58e26b4c8eafce",
        },
        {
            _id: "4",
            question: "Are most of your classes taught by professors or teaching assistants?",
            link: "forum/625db1aa6a58e26b4c8eafcf",
        },
        {
            _id: "5",
            question: "Do your professors hold office hours, and will they meet with you outside of class?",
            link: "forum/625db7d5aed0a67874ff9e47",
        },
        {
            _id: "6",
            question: "Are your classes lecture-based or discussion-based?",
            link: "forum/625db83caed0a67874ff9e51",
        },
    ])

    const dispatch = useDispatch();

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        dispatch(getQuestion());
    }, []);

    const reduxState = useSelector(
        (globalStore) => globalStore.forum.questions
    );

    useEffect(() => {
        reduxState.forum && setQuestions(reduxState.forum);
    }, [reduxState.forum])

    return (
        <>
            <div className='flex bg-grey-50'>
                <div className='flex flex-col mb-4 w-9/12 gap-3 items-center'>
                    {questions.map((questions) => (
                        <QuestionCard {...questions} key={questions._id} />
                    ))}
                </div>
                <div className='w-1/4 ml-10 px-6 border-l-2 border-grey-100'>
                    <h1 className='border-b-2 border-grey-100 pb-2 text-xl font-medium font-sans '>Frequently Asked Questions</h1>
                    <div className='flex flex-col mt-3 gap-3'>
                        {
                            sourceLiist.map((sources) => (
                                <FAQCard{...sources} key={sources._id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForumHome;