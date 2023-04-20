import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Basket } from "./pages/basket";
import { Blog } from "./pages/blog";
import { Main } from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/basket"} element={<Basket />} />
          <Route path={"/blog"} element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
