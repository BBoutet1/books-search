import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input} from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import SaveBtn from "../../components/SaveBtn";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({title:""})
  const [apiReq, setApiReq] = useState({loaded:false})
    API.getGoogleBooks({
      title: formObject.title
    })
    .then(res => {
      console.log(res);
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setBooks(res.data.items);
      setApiReq({loaded:true})

    })
        .catch(err => console.log(err));

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



  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    if (event.target.value){setFormObject({...formObject, [name]: value})}
    
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleSave(id) {
     let book = books.filter(x => x._id === id);
    book = book[0];
    console.log(book)
    if (formObject) {
      API.saveBook({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors[0],
        synopsis: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.previewLink
      })
        .then(() => setFormObject({
          title: "",
        }))
        .then(() => loadBooks())
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
             <Row>
          <Col size="md 12 s-12">
          <h3>Results</h3>
          {(books.length && apiReq.loaded && formObject.title!=="") ? (
            <List>
                {books.slice(0, 15).map(book => (
                  <ListItem key={book._id}>
                    <img src={book.volumeInfo.imageLinks.thumbnail} style={{width:75, height:100, marginRight:10}} alt=""></img>
                        <a href={book.volumeInfo.previewLink}>
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong> 
                      </a>
                           <SaveBtn id={book._id} onClick={() => {
                      handleSave(book._id);
                    }} />
                    <p>{book.volumeInfo.description}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h4 style={{ color: "red", fontStyle: "italic" }}>No Results to Display</h4>
            )}
          </Col>
        </Row>
        </form>
      </Container>
    );
  }


export default Search;
