import { Component } from "react";
import { Badge, ListGroupItem } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <ListGroupItem className=" d-flex justify-content-between ">
        <span className="me-auto text-truncate">Autore:{this.props.author}</span>
        <span>
          Rate: <Badge variant="dark">{this.props.rate}</Badge>
        </span>
        <span>{this.props.comment}</span>
      </ListGroupItem>
    );
  }
}
export default SingleComment;
