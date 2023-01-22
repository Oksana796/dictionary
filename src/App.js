


import "./App.css";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">Dictionary</header>
        <main className="app-main">
          <Dictionary />
        </main>
        <footer className="app-footer">
          Coded by Oksana and is open-sourced on{" "}
          <a
            href="https://github.com/Oksana796/dictionary"
            className="github-link"
            target="blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and hosted on <a href="/"> Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
