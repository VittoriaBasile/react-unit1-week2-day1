import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import books from "./Books/horror.json";
import BookList from "./components/BookList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />

      <Container fluid>
        <BookList books={books} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
