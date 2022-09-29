import "./App.css";
import Blog from "./Components/Blog/Blog";
import Exercises from "./Components/Exercises/Exercises";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Exercises />
      <Blog />
    </div>
  );
}

export default App;
