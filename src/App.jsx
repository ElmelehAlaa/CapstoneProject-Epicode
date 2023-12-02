import "./App.css";
import MyHome from "./Components/MyHome";
import MyNavBar from "./Components/MyNavBar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyHome />
    </div>
  );
}
export default App;
