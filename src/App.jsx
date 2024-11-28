import "./App.css";
import { Profile } from "./components/Profile";
// react thực hiện render theo dạng tree, gốc, nhánh
function App() {
  return (
    <div>
      <h1>Website Reactjs</h1>
      <Profile />
    </div>
  );
}

export default App;
