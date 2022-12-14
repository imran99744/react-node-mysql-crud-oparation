import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handelDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/books/"+id)
      window.location.reload()
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Imran Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src="data:image/jpeg;base64,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" alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handelDelete(book.id)}>Delete</button>
            <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button className="button"><Link to="/add">Add new books</Link></button>
    </div>
  );
}

export default Books;
