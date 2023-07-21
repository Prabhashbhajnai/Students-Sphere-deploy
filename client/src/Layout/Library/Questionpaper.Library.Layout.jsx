import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// redux action
import { getSpecificTeacher } from '../../Redux/Reducer/teachers/teacher.action';

//Components
import Navbar from '../../components/Navbar';
import TeacherInfo from '../../components/Library/QuestionPaper/TeacherInfo';

const LibraryQuestionpaperLayout = (props) => {

    const [teacher, setTeacher] = useState({
        name: "",
        subject: "",
        position: "",
    });

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificTeacher(id)).then((data) => {
            setTeacher((prev) => ({
                ...prev,
                ...data.payload.teacher
            }));
        });

    }, []);

    return (
        <>
            <Navbar />
            <TeacherInfo
                photo={teacher.photo}
                name={teacher.name}
                subject={teacher.subject}
                position={teacher.designation}
            />
            <div className="">
                {props.children}
            </div>
        </>
    );
};

export default LibraryQuestionpaperLayout;