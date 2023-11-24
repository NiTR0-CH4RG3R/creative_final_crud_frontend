import React from 'react';
import { useState, useEffect } from 'react';

export default function ShowBooks() {
    const [books, setBooks] = useState([])

    const get_books = () => {
        fetch('http://localhost:5169/api/Books')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBooks(data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    useEffect(() => {
        get_books();
    }, []);

    return (
        <table>
            <th>
                <td>Id</td>
                <td>Title</td>
                <td>Author</td>
                <td>Qty</td>
            </th>
            <tbody>
                {books.map((book) => {
                    return (
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.qty}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}