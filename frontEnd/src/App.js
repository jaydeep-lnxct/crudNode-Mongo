import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard";
import InsertDataScreen from "./insertScreen";
import EditUser from "./editUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InsertDataScreen />} />
        <Route path="/result" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
