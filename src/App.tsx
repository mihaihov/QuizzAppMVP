/* eslint-disable */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <div className="p-0 m-0">
      <BrowserRouter basename="/">
        <Routes>
          <Route path={`/`} element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
