import { Routes, Route } from 'react-router-dom'; 
import { MainContainer } from "./Components";
import { Chatscreen } from "./Components";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainContainer />}/>
        <Route path="/chat" element={<Chatscreen />}/>
      </Routes>
  );
}

export default App;
