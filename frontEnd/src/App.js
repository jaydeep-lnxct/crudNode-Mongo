import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard";
import InsertDataScreen from "./insertScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InsertDataScreen />} />
        <Route path="/result" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
