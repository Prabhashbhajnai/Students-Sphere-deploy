import React, { useState } from 'react'

// Components
import LibraryCard from '../../components/Library/Home Page/LibraryCard'

const LibraryHome = () => {

    const [sourcesList, setSourcesList] = useState([
        {
            _id: "123456",
            photos: "https://www.rd.com/wp-content/uploads/2019/10/newspaper.jpg",
            name: "Newspaper",
            category: ["Hindustan Times", "Times Of India", "Amar Ujala"],
            route: "newspaper"
        },
        {
            _id: "123456-3",
            name: "Magazines",
            photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRm2gVveabn4bTGbeu-im2HSrLoD_X5_-OQ&usqp=CAU",
            category: ["Vogue", "FilmFare", "TIME", "Economist"],
            route: "magazines"
        },
        {
            _id: "123456-2",
            name: "Question Paper",
            photos: "https://media.istockphoto.com/photos/note-paper-with-question-mark-on-orange-background-picture-id1190601200?k=20&m=1190601200&s=612x612&w=0&h=CG9kIStbdjsgcbvmxt6aqnh9hZiF2jbJOGcoqMj412k=",
            category: ["Physics", "Chemistry", "Maths", "Python"],
            route: "teacher"
        },
        {
            _id: "123456-4",
            name: "Books",
            photos: "https://media.istockphoto.com/photos/row-of-colorful-hardback-books-open-book-on-blue-background-picture-id504649118?k=20&m=504649118&s=612x612&w=0&h=Cvh9PQOr7d6Q32jfmRvDJ-Q5CXlVTqoJeUlLg7X4AWQ=",
            category: ["Romantic", "Thriller", "Fiction", "Comic"],
            route: "books"
        },
    ]);

    return (
        <>
            <div className="mt-3 lg:flex">
                {
                    sourcesList.map((sources) => (
                        <LibraryCard{...sources} key={sources._id} />
                    ))}
            </div>
        </>
    );
};

export default LibraryHome;