import React, { useState } from 'react';

function SimpleForm() {
  const [books, setBooks] = useState([]);

  return (
    <form>
      <div>
        {books.map((book) => {
          return (
                <ul>
                  <li>Book Id : {book.id}</li>
                  <li>Book Title : {book.title}</li>
                  <li>Book Author : {book.author}</li>
                  <li>Book Qty : {book.qty}</li>
                </ul>
          );
        })}
      </div>
      <button type="button" onClick={
        () => {
          fetch('http://localhost:5169/api/Books')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setBooks(data);
            })
            .catch(err => {
              console.log(err);
            })
        }
      }>GetBooks</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <SimpleForm />
    </div>
  );
}

export default App;
