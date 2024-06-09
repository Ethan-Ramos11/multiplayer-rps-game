import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Gamepage from "./pages/Gamepage";
import Homepage from "./pages/Homepage";
import WaitingRoom from "./pages/Waitingroom";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game" element={<Gamepage />} />
          <Route path="/waiting-room" element={<WaitingRoom />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
