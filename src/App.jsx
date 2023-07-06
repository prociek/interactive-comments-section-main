import "./App.css";
import "normalize.css";
import CommentsList from "./components/commentsList";

function App() {
  return (
    <>
      <CommentsList />
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Tomasz Procko</a>.
      </footer>
    </>
  );
}

export default App;
