import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn} from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import SaveBtn from "../../components/SaveBtn";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({title:""})

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

 // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
     API.getGoogleBooks({
      title: formObject.title
    })
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setBooks(res.data.items);
    }) 
        .catch(err => console.log(err));
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleSave(id) {
    let book = books.filter(x => x.id === id);
    let savedBook = book[0];
    const bookData = {
        title: savedBook.volumeInfo.title,
        author: savedBook.volumeInfo.authors[0],
        synopsis: savedBook.volumeInfo.description,
        image: savedBook.volumeInfo.imageLinks.thumbnail,
        link: savedBook.volumeInfo.previewLink
     }
    if (bookData) {
      API.saveBook(bookData)
        .catch(err => console.log(err));
    }
  };
    return (
      <Container>
            <Jumbotron/>
            <form style={{marginRight:30, marginLeft:30}}>
              <label>Search Book</label>
             <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Enter your book title"
                value={formObject.title}
          />
              <FormBtn  onClick={handleFormSubmit}>
                  Search a Book
              </FormBtn>
             </form>
          <Row>
          <Col size="md 12 s-12">
          <h3>Results</h3>
            {books.length ? (
          <>
            <h4 style={{ color: "red", fontStyle: "italic" }}>You have {books.length} results</h4>
            <List>
                {books.slice(0, 15).map(book => (
                  <ListItem key={book.id}>
                    {(book.volumeInfo.imageLinks)
                      && (<img src={book.volumeInfo.imageLinks.thumbnail} style={{ width: 75, height: 100, marginRight: 10 }} alt=""></img>)}
                        <a href={book.volumeInfo.previewLink}>
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong> 
                      </a>
                      <SaveBtn id={book.id} onClick={() => {
                      handleSave(book.id);
                    }} />
                    <p>{book.volumeInfo.description}</p>
                  </ListItem>
                ))}
              </List>
              </>
            ) : (
              <h4 style={{ color: "red", fontStyle: "italic" }}>No Results to Display</h4>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;
