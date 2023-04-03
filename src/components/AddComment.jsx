import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: "",
    },
  };

  render() {
    return (
      <>
        <Container>
          <h5 className="fw-bold text-center">Scrivi qui il tuo commento</h5>
          <Row className="justify-content-center">
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="commento">
                  <Form.Label>commento</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Scrivi il tuo commento"
                    value={this.state.comment.comment}
                    onChange={(e) => this.setState({ comment: { ...this.state.comment, comment: e.target.value } })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>vota il libro</Form.Label>
                  <Form.Select
                    value={this.state.comment.rate}
                    onChange={(e) => this.setState({ comment: { ...this.state.comment, rate: e.target.value } })}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="elementId">
                  <Form.Label>element Id:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Scrivi l'element Id"
                    value={this.state.comment.elementId}
                    onChange={(e) => this.setState({ comment: { ...this.state.comment, elementId: e.target.value } })}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default AddComment;
