import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Container } from "../../components/Grid";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
 
  // Load all books and store them with setBooks when the page is loaded
  useEffect(() => {
    loadBooks()
  }, [])

  // Get all saved books  JSON from our API
  function loadBooks() {
    API.getBooks()
      .then(res => {
        setBooks(res.data)
      }
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => loadBooks())
      .catch(err => console.log(err));
  }
    return (
      <Container>
        <Jumbotron />
        {books.length ? (
          <>
            <h4 style={{ color: "red", fontStyle: "italic" }}>You saved {books.length} books</h4>
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <img src={book.image} style={{width:75, height:100, marginRight:10}} alt=""></img>
                      <a href={book.link}>
                        <strong>
                          {book.title} by {book.author}
                        </strong> 
                      </a>
                      <DeleteBtn onClick={() => deleteBook(book._id)} />
                      <p>{book.synopsis}</p>
                    </ListItem>
                  );
                })}
            </List>
            </>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
    );
  }

export default Saved;
