import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import PrivatePages from "./components/private_pages/PrivatePages";
import AddNote from "./components/user/AddNote";
import ListNote from "./components/user/ListNote";
import EditNote from "./components/user/EditNote";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />

          <Route element={<PrivatePages />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/addnote" element={<AddNote />} />
            <Route path="/listnote" element={<ListNote />} />
            <Route path="/editnote/:id" element={<EditNote />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
