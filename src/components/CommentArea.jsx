import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.request();
  }

  request = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzIyOTY4MzQzMTAwMTRkZWE3NWQiLCJpYXQiOjE2ODA1MjM4MTcsImV4cCI6MTY4MTczMzQxN30.cl_8_IXTwcTmqSKAWw2IIGMg3EQd50hLb9Hwb3xKF0g",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <AddComment />
        <CommentsList comments={this.state.comments} />;
      </>
    );
  }
}
export default CommentArea;
