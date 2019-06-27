import React, { Component } from "react";
import { Container, Col, Row } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Search from "../components/Search";
import Results from "../components/Results";
import Books from "../components/Books";
import API from "../utils/API";
import "../index.css";

class Home extends Component {

  state = {
    books: [],
    results: [],
    search: ""
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }
  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items, search: "" }))
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ search: this.state.search });
    this.searchBooks(this.state.search);
  };

  handleNewBook = (book) => {
    API.saveBook(book)
      .then(this.loadBooks())
      .catch(err => console.log(err))
  };

  handleDelete = (id) => {
    API.deleteBook(id)
      .then(this.loadBooks())
      .catch(err => console.log(err))
  };

  handleAuthor = (arr) => {
    switch (true) {

      case (arr && arr.length > 1):
        return arr.toString().replace(",", ", ");
        break;

      case (arr && arr.length >= 1):
        return arr[0]
        break;

      default:
        return "none"
        break;
    }
  };

  handleNullImg = (img) => {
    if(img) {
      return img.smallThumbnail;
      
    } else {
      console.log("no image");      
      return <p>No image</p>
    }
  }

  render() {

    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1>This is the Reading List page</h1>
            <Search
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              textValue={this.state.search}
            />
          </Col>
        </Row>
        <Row>

          <Results>
            {this.state.results.length ? (
              <List>
                {this.state.results.map(item => (

                  < ListItem
                    key={item.id}
                    id={item.id}
                    img={this.handleNullImg(item.volumeInfo.imageLinks)}
                    title={item.volumeInfo.title}
                    author={this.handleAuthor(item.volumeInfo.authors)}
                    description={item.volumeInfo.description}
                    link={item.volumeInfo.infoLink}
                    add={this.handleNewBook}
                  />

                ))}
              </List>
            ) : (
                <p><span className="sm-text">...there aren't any</span></p>
            )}
          </Results>

          <Books>
            <List>
              {this.state.books.map(item => (

                <ListItem
                  key={item._id}
                  id={item._id}
                  img={item.img}
                  title={item.title}
                  author={item.author}
                  description={item.description}
                  link={item.link}
                  delete={this.handleDelete}
                />

              ))}
            </List>
          </Books>
        </Row>
      </Container>
    )
  }
}

export default Home;