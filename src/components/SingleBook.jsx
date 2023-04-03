import { Component } from "react";
import { Card } from "react-bootstrap";
class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const selectedStyle = {
      border: this.state.selected ? "2px solid red" : "none",
    };
    return (
      <Card
        onClick={(e) => {
          this.setState((changeState) => ({
            selected: !changeState.selected,
          }));
        }}
        className="card"
        style={selectedStyle}
      >
        <Card.Img className="img-fluid" variant="top" src={this.props.img} />
        <Card.Body className="CardBody">
          <Card.Title className="text-truncate">{this.props.title}</Card.Title>
          <Card.Text>genere: {this.props.category}</Card.Text>
          <Card.Text>prezzo: {this.props.price}€</Card.Text>
          <Card.Text>codice: {this.props.asin}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
