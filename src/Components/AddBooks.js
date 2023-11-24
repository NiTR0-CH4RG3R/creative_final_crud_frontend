import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddBooks() {
    const post_book = ( bookId, bookTitle, bookAuthor, bookQty ) => {
        fetch('http://localhost:5169/api/Books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: Number(bookId),
                title: bookTitle,
                author: bookAuthor,
                qty: Number(bookQty)
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        ;
    };

    const [bookId, setBookId] = useState(0);
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookQty, setBookQty] = useState(0);

    return (
        <Form onSubmit={()=>post_book( bookId, bookTitle, bookAuthor, bookQty )}>
            <Form.Group className="mb-3" controlId="add-book-id">
                <Form.Label>Id</Form.Label> <Form.Control type="number" placeholder="Enter Book ID" onChange={(e) => setBookId(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="add-book-title">
                <Form.Label>Title</Form.Label> <Form.Control type="text" placeholder="Enter Book Title" onChange={(e) => setBookTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="add-book-author">
                <Form.Label>Author</Form.Label> <Form.Control type="text" placeholder="Enter Book Author" onChange={(e) => setBookAuthor(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="add-book-qty">
                <Form.Label>Qty</Form.Label> <Form.Control type="number" placeholder="Enter Book Quatity" onChange={(e) => setBookQty(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={post_book( bookId, bookTitle, bookAuthor, bookQty )}>
                Submit
            </Button>
        </Form>
    );
}