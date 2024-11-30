import "./App.css";
import { Blog } from "./components/Blog";
import { Hobby } from "./components/Hobby";
import { Person } from "./components/Person";
import { Profile } from "./components/Profile";
// react thực hiện render theo dạng tree, gốc, nhánh
function App() {
  return (
    <div>
      <h1>Website Reactjs</h1>
      <Profile />
      <Person />
      <Hobby />
      <Blog />
    </div>
  );
}

export default App;
