import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// redux action
import { getUser } from '../../Redux/Reducer/user/user.action';

const QuestionCard = (props) => {

    const [user, setUser] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(props.user)).then(data => setUser(data.payload.user))
    }, []);

    return (
        <Link to={`/forum/${props._id}`} style={{ textDecoration: 'none', color: 'black' }} className='ml-60 w-full'>
            <div className='mt-4 ml-3 bg-white p-3 w-9/12 rounded-2xl hover:shadow-lg overflow-hidden'>
                <div className='flex items-center gap-3 mb-4'>
                    <FaRegUserCircle className='text-5xl' />
                    <div>
                        <h1 className='text-xl'>{user.fullname}</h1>
                        <h5 className='text-sm text-grey-300'>{user.email}</h5>
                    </div>
                </div>
                <div className='mb-2'>
                    <h1 className='font-semibold text-2xl'>{props.questionSubject}</h1>
                </div>
                <p>{props.questionText}</p>
            </div>
        </Link>
    );
};

export default QuestionCard;