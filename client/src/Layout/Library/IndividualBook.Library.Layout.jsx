import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// redux action
import { getSpecificBook } from '../../Redux/Reducer/books/book.action';

// components
import Navbar from '../../components/Navbar';
import IndividualBook from '../../components/Library/IndividualBook/IndividualBook';

const IndividualBookLayout = (props) => {

    const [book, setBook] = useState({
        photo: "",
        title: "",
        description: "Not Available",
        date: "Not Available",
        author: "Not Available",
        aboutAuthor: "Not Available",
        publisher: "Not Available",
        isbn: "Not Available",
        location: ""
    });

    const { id } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificBook(id)).then((data) => {
            setBook((prev) => ({
                ...prev,
                ...data.payload.books
            }));
        });

    }, []);

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-10 px-4 lg:px-24">
                <IndividualBook
                    image={book.photo}
                    title={book.title}
                    description={book.description}
                    author={book.author}
                    authorAbout={book.aboutAuthor}
                    publisher={book.publication}
                    date={book.date}
                    isbn={book.ISBN}
                    location={book.location}
                />
                <div className='container'>{props.children}</div>
            </div>
        </>
    );
};

export default IndividualBookLayout