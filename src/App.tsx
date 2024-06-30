/* eslint-disable */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path={`/`} element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
