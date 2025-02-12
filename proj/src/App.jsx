import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Tasks } from "./pages/Task";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./pages/Navbar";
import { Navigate} from "react-router-dom";
import { Home } from './pages/Home';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
