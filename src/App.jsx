import "./App.css";
import { Blog } from "./components/Blog";
import { Hobby } from "./components/Hobby";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Person } from "./components/Person";
import { Profile } from "./components/Profile";
// react thực hiện render theo dạng tree, gốc, nhánh
// Nếu như có từ 2 component trở lên thì cần phải bọc trong 1 thẻ div, <></>
function App() {
  return (
    <>
      <Header />
      <h1>Website Reactjs</h1>
      <Profile />
      <Person />
      <Hobby />
      <Blog />

      <Footer />
    </>
  );
}

export default App;
