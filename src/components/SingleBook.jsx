import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = {
    selected: false,
    asin: "",
  };

  render() {
    const selectedStyle = {
      border: this.state.selected ? "2px solid red" : "none",
    };
    return (
      <>
        <Card className="card" style={selectedStyle}>
          <Card.Img
            className="img-fluid"
            variant="top"
            src={this.props.img}
            onClick={() => {
              this.setState((changeState) => ({
                selected: !changeState.selected,
                asin: !changeState.selected ? this.props.asin : "",
              }));
            }}
          />
          <Card.Body className="CardBody">
            <Card.Title className="text-truncate">{this.props.title}</Card.Title>
            <Card.Text>genere: {this.props.category}</Card.Text>
            <Card.Text>prezzo: {this.props.price}€</Card.Text>
            <Card.Text>codice: {this.props.asin}</Card.Text>
            {this.state.selected && <CommentArea asin={this.props.asin} />}
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SingleBook;
