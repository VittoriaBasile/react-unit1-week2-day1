import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../Books/horror.json";
class AllTheBook extends Component {
  render() {
    return (
      <Container fluid>
        <Row xs="2" md="3" lg="4" xl="5">
          {books.map((book, index) => (
            <Col className="py-2" key={`book-${index}`}>
              <Card className="card">
                <Card.Img className="img-fluid" variant="top" src={book.img} />
                <Card.Body className="CardBody">
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>genere: {book.category}</Card.Text>
                  <Card.Text>prezzo: {book.price}€</Card.Text>
                  <Card.Text>codice: {book.asin}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBook;
