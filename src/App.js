import "./App.css";
import Exercises from "./Components/Exercises/Exercises";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Exercises />
    </div>
  );
}

export default App;
