import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";

import { Container, Col, Row } from "../components/Grid";
import Search from "../components/Search";
import Results from "../components/Results";
import { List, ListItem } from "../components/List";
import Books from "../components/Books";

class Home extends Component {

  state = {
    results: {},
    search: ""
  }

  componentDidMount() {
    this.searchBooks("our inner ape")
  }

  searchBooks = query => {

    API.search(query)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ search: this.state.search })
    this.searchBooks(this.state.search);
    console.log("clicked", this.state.search);

  };

  handleNewBook = (event, book) => {
    event.preventDefault();
    console.log(book);
    
  };


  render() {
    console.log(this.state.results);

    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1>This is the Books page</h1>
            <Search
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
            />
          </Col>
        </Row>
        <Row>
          {this.state.results.length ? (
            <Results>
              <List>
                {this.state.results.map(item => (
                  <ListItem
                    key={item.id}
                    img={item.volumeInfo.imageLinks.smallThumbnail}
                    title={item.volumeInfo.title}
                    author={item.volumeInfo.authors[0]} 
                    description={item.volumeInfo.description}
                    link={item.volumeInfo.infoLink}
                    add={this.handleNewBook}
                  />
                ))}
                </List>
                </Results>


                ) : (
              <p>no results</p>
                )}

          <Books />
        </Row>
      </Container>
    )
  }
}
          
export default Home;