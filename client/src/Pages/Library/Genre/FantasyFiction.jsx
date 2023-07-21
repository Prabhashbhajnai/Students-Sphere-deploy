import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

// redux actions
import { getFantasyFiction } from "../../../Redux/Reducer/books/book.action";

// components
import BookCard from "../../../components/Library/Books/BookCard";

const FantasyFiction = () => {

	const [bookList, setBookList] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFantasyFiction());
	}, []);

	const reduxState = useSelector(
		(globalStore) => globalStore.books.books
	);

	useEffect(() => {
		reduxState.books && setBookList(reduxState.books);
	}, [reduxState.books])

	return (
		<>
			<div className="flex flex-wrap gap-14 mx-1">
				{bookList.map((book) => (
					<BookCard {...book} key={book._id} />
				))}
			</div>
		</>
	);
}

export default FantasyFiction;