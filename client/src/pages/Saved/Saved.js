import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Container } from "../../components/Grid";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
 

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
      <Container>
            <Jumbotron/>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
    );
  }


export default Saved;
