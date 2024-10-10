import React, {useState, useEffect, createContext} from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/books.json')
        .then(response => response.json())
        .then(data => {
            setBooks(data)
            setLoading(false)
        })
        .catch(error => console.error(error))
    }, []);

    return (
        <BooksContext.Provider value={{ books, loading }}>
            {children}
        </BooksContext.Provider>
    );
}