import "./App.css";
import "./index.css";
// import { Blog } from "./components/Blog";
// import { Hobby } from "./components/Hobby";
// import { Footer } from "./components/Footer";
import { Header } from "./components/WebBook/Header";
import Banner from "./components/WebBook/Banner";
import Utilities from "./components/WebBook/Utilities";
import Booklist from "./components/WebBook/BookList";
import AuthorInformation from "./components/WebBook/AuthorInformation";
// import { Person } from "./components/Person";
// import { Profile } from "./components/Profile";
// import { Calculator } from "./components/Calculator";
// react thực hiện render theo dạng tree, gốc, nhánh
// Nếu như có từ 2 component trở lên thì cần phải bọc trong 1 thẻ div, <></>
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Utilities />
      <Booklist />
      <AuthorInformation />
      {/*  <h1>Website Reactjs</h1> 
       <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Profile />
      <Person />
      <Hobby />
      <Blog />
      <Footer /> */}
      {/* <Calculator /> */}
      {/* <TodoList /> */}
      {/* <MapContent /> */}
      {/* {open && <Counter />}
      <div>
        <button
          className="bg-red-500 px-2"
          onClick={function () {
            setOpen(false);
          }}
        >
          Ẩn
        </button>
        <button
          className="bg-blue-500 ml-2 px-2"
          onClick={function () {
            setOpen(true);
          }}
        >
          Hiện
        </button>
      </div> */}
    </>
  );
}

export default App;
