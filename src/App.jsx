import "./App.css";
import { Person } from "./components/Person";
import { Profile } from "./components/Profile";
// react thực hiện render theo dạng tree, gốc, nhánh
function App() {
  return (
    <div>
      <h1>Website Reactjs</h1>
      <Profile />
      <Person />
    </div>
  );
}

export default App;
