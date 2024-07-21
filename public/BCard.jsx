import React, { useState } from 'react';
import BCard from './BCard';
import Data from './Data';
import { ToastContainer, toast } from 'react-toastify';

const BookLibrary = () => {
    const [books, setBooks] = useState(Data);

    const handleBorrow = (selectedBook) => {
        const alreadyBorrowedBook = books.find(book => book.borrowed === 'true');
        if (selectedBook.borrowed === 'true') {
            toast.info('This book has already been borrowed.');
            return;
        }

        if (!alreadyBorrowedBook) {
            toast.success('Book was borrowed.');
            updateBookBorrowedStatus(selectedBook, true);
        } else {
            const confirmSwap = window.confirm('Another book is already borrowed. Would you like to swap?');
            if (confirmSwap) {
                toast.success('Book was borrowed.');
                updateBookBorrowedStatus(alreadyBorrowedBook, false);
                updateBookBorrowedStatus(selectedBook, true);
            }
        }
    };

    const updateBookBorrowedStatus = (bookToUpdate, status) => {
        const updatedBooks = books.map(book => 
            book.title === bookToUpdate.title ? { ...book, borrowed: status.toString() } : book
        );
        setBooks(updatedBooks);
    };

    return (
        <div>
            <ToastContainer />
            {books.map(book => (
                <BCard key={book.title} book={book} onBorrow={handleBorrow} />
            ))}
        </div>
    );
};

export default BookLibrary;
