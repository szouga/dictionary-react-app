import sheCodesLogo from "./shecodes_logo.png";
import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={sheCodesLogo}
          className="App-logo img-fluid"
          alt="SheCodes Logo"
        />
        <a
          href="https://shecodes.io"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary shadow"
        >
          Hello
        </a>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          Deployed with
          <a href="https://dictionary-react-app-five.vercel.app/">Vercel</a>
        </small>
      </footer>
    </div>
  );
}
