import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux action
import { getQuespapers } from '../../Redux/Reducer/Quespaper/quespaper.action';

// components
import QuestionPaperCard from '../../components/Library/QuestionPaper/QuestionpaperCard';

const Questionpaper = () => {

    const [quespaper, setQuespaper] = useState([]);

    const dispatch = useDispatch();

    /* useEffect(() => {
        dispatch(getQuespapers());
    }, []); */

    const reduxState = useSelector(
        (globalStore) => globalStore.teachers.selectedTeacher.teacher
    );

    useEffect(() => {
        if (reduxState) {
            dispatch(getQuespapers(reduxState._id)).then((data) =>
                setQuespaper(data.payload.quespaper)
            )
        }
    }, [reduxState]);

    /* useEffect(() => {
        reduxState.quespapers && setQuespaper(reduxState.quespapers)
    }, [reduxState.quespapers]) */

    return (
        <>
            <div className='lg:px-20 items-center'>
                {quespaper.map((quespapers) => (
                    <QuestionPaperCard {...quespapers} />
                ))}
            </div>
        </>
    );
};

export default Questionpaper;