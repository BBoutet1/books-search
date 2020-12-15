import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import {FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";

function Books() {
  
    return (
      <Container>
        <Jumbotron />
        <div className="row justify-content-around">
            <Link to="/search" className="col-4 row justify-content-md-center">
              <FormBtn
            >
                Search Book
            </FormBtn>
            </Link>
            <Link to="/saved" className="col-4 row justify-content-md-center">
              <FormBtn>
                Saved Books
              </FormBtn>
            </Link>
         </div>  
      </Container>
    );
  }

export default Books;
