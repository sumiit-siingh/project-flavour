import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Layout from "./layout";
import './App.css';


function App() {
  return (
    <Router>
      <Layout/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      
    </Router>
  );
}
export default App;
