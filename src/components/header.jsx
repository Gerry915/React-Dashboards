import logo from "./logo.svg";
import "./App.scss";

const header = () => {
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <a href="https://reactjs.org" className="my-link">
      Here is a Testing
    </a>
    <div className="testing">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        doloremque amet voluptas modi reprehenderit praesentium!
      </p>
    </div>
  </header>;
};

export default header;
