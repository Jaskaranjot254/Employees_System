import "./App.css";
import AddEmp from "./components/AddEmp";
import EditEmp from "./components/EditEmp";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addEmp" element={<AddEmp />}></Route>
        <Route path="/editEmp/:id" element={<EditEmp />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
