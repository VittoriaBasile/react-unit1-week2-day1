import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.comment),

        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzIyOTY4MzQzMTAwMTRkZWE3NWQiLCJpYXQiOjE2ODA1MjM4MTcsImV4cCI6MTY4MTczMzQxN30.cl_8_IXTwcTmqSKAWw2IIGMg3EQd50hLb9Hwb3xKF0g",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        this.props.request();
        this.setState({
          comment: {
            comment: "",
            rate: "1",
            elementId: this.props.asin,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <Container>
          <h5 className="fw-bold text-center">Scrivi qui il tuo commento</h5>
          <Row className="justify-content-center">
            <Col>
              <Form onSubmit={this.handleSubmit}>
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
                <Form.Group className="mb-3" controlId="">
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

                <Button type="submit">INVIA</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default AddComment;
