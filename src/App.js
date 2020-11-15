import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <div className="content">
        <div className="button-container">
          <p>&lt;Button /&gt;</p>
          <Button variant={"default"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="outline" /&gt;</p>
          <Button variant={"outline"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="text" /&gt;</p>
          <Button variant={"text"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="disableShadow" /&gt;</p>
          <Button variant={"disableShadow"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="disabled" /&gt;</p>
          <Button variant={"disabled"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="iconLeft" /&gt;</p>
          <Button variant={"iconLeft"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="iconRight" /&gt;</p>
          <Button variant={"iconRight"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="small" /&gt;</p>
          <Button variant={"small"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="medium" /&gt;</p>
          <Button variant={"medium"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="large" /&gt;</p>
          <Button variant={"large"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="primary" /&gt;</p>
          <Button variant={"primary"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="secondary" /&gt;</p>
          <Button variant={"secondary"} />
        </div>
        <div className="button-container">
          <p>&lt;Button variant="danger" /&gt;</p>
          <Button variant={"danger"} />
        </div>
      </div>
      <small>
        <a href="https://github.com/Angie-96">Angie</a> @{" "}
        <a href="https://devchallenges.io/">DevChallenges.io</a>
      </small>
    </div>
  );
}

export default App;
