import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

// redux action
import { getUser } from '../../Redux/Reducer/user/user.action';

const ReplyCard = (props) => {

    const [user, setUser] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(props.user)).then(data => setUser(data.payload.user))
    }, []);

    return (
        <>
            <div className='border-b-2 border-grey-100 py-2 pl-3'>
                <div className='flex items-center gap-3'>
                    <FaRegUserCircle className='text-2xl' />
                    <div className='mb-3'>
                        <h1 className='font-semibold text-xl'>{user.fullname}</h1>
                        <h2 className='text-sm text-grey-400'>{user.email}</h2>
                    </div>
                </div>
                <p className='ml-9 mr-4'>{props.replyText}</p>
            </div>
        </>
    );
};

export default ReplyCard;