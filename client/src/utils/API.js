import axios from "axios";

export default {
    // Gets all saved books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Gets the saved book with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the saved book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a searched book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    //Search books in Google Books
    getGoogleBooks: function(title) {
        console.log("TITLE:", title);
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title.title}&key=AIzaSyAzh3hgpTEaEpBI9WMYYqbaXI1bEb0rn4o`);
    }
};