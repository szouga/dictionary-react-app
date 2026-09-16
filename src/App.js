import sheCodesLogo from "./shecodes_logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={sheCodesLogo}
          className="App-logo img-fluid"
          alt="SheCodes Logo"
        />
      </header>
      <footer>
        <small>
          Deployed with
          <a href="https://dictionary-react-app-five.vercel.app/">Vercel</a>
        </small>
      </footer>
    </div>
  );
}
