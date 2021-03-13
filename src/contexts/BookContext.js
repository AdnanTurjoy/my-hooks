import React, {createContext, useState } from 'react';


export const BookContext = createContext();

const BookContextProvider=(props)=>{
    const [books, setBooks] = useState([
        {title: 'Name of the wind' , author: 'XYZ', id: 1},
        {title: 'The Final empire' , author: 'Brandan sanderson' , id:2}
    ]);

    const addBook = (title, author)=>{
       
        setBooks([...books,{title, author}]);
    };
    
    const removeBook = (id)=>{
       setBooks(books.filter(book=>book.id !== id));
    };
 return (
     <BookContext.Provider value={{books,addBook,removeBook}}>
        {props.children}
     </BookContext.Provider>

)
}

export default BookContextProvider;