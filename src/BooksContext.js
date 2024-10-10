import React, {useState, useEffect, createContext} from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <BooksContext.Provider value={{ books, loading }}>
            {children}
        </BooksContext.Provider>
    );
}