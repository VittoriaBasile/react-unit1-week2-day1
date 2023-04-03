import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
class BookList extends Component {
  state = {
    stringa: "",
  };
  render() {
    return (
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group className="mb-3" controlId="form">
            <Form.Control
              type="text"
              placeholder="Cerca"
              onChange={(e) => {
                this.setState({ stringa: e.target.value });
              }}
            />
          </Form.Group>
        </Form>
        <Row xs="2" md="3" lg="4" xl="5">
          {!this.state.stringa ? (
            <>
              {this.props.books.map((book) => (
                <Col className="py-2" key={book.asin}>
                  <SingleBook
                    img={book.img}
                    title={book.title}
                    category={book.category}
                    price={book.price}
                    asin={book.asin}
                  />
                </Col>
              ))}
            </>
          ) : (
            <>
              {this.props.books
                .filter((book) => book.title.toLowerCase().includes(this.state.stringa.toLocaleLowerCase()))
                .map((book) => (
                  <Col key={book.asin} className="py-2">
                    <SingleBook
                      img={book.img}
                      title={book.title}
                      category={book.category}
                      price={book.price}
                      asin={book.asin}
                    />
                  </Col>
                ))}
            </>
          )}
        </Row>
      </>
    );
  }
}

export default BookList;
