
import "./App.css";
import { styled } from "./stitches.config";
import Form from "./components/base/Form";

const TestBlock = styled('div', {
  backgroundColor: '$'
})

function App() {
  return (
    <div className="App">
      <header>
        <form style={{width: '50%'}}>
          <Form.Group>
            <Form.Label>Label</Form.Label>
            <Form.Control />
            <Form.ControlCaption>Help text</Form.ControlCaption>
          </Form.Group>
        </form>
      </header>
    </div>
  );
}

export default App;
