import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux action
import { getTeachers } from '../../Redux/Reducer/teachers/teacher.action';

// coomponents
import TeacherCard from '../../components/Library/Teachers/TeacherCard';

const Teachers = () => {

    const [teachersList, setTeachersList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeachers());
    }, []);

    const reduxState = useSelector(
        (globalStore) => globalStore.teachers.teachers
    );

    useEffect(() => {
        reduxState.teachers && setTeachersList(reduxState.teachers);
    }, [reduxState.teachers])

    return (
        <>
            <div className='lg:flex lg:flex-wrap lg:px-20 w-full gap-5'>
                {teachersList.map((teachers) => (
                    <TeacherCard {...teachers} key={teachers._id} />
                ))}
            </div>
        </>
    )
}

export default Teachers