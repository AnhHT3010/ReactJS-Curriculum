import "./App.css";
import "./index.css";
import { Blog } from "./components/Blog";
import { Hobby } from "./components/Hobby";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Person } from "./components/Person";
import { Profile } from "./components/Profile";
import { TodoList } from "./components/TodoList";
import { Calculator } from "./components/Calculator";
// react thực hiện render theo dạng tree, gốc, nhánh
// Nếu như có từ 2 component trở lên thì cần phải bọc trong 1 thẻ div, <></>
function App() {
  return (
    <>
      <Header />
      <h1>Website Reactjs</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Profile />
      <Person />
      <Hobby />
      <Blog />
      <Footer />
      <TodoList />
      <Calculator />
    </>
  );
}

export default App;
