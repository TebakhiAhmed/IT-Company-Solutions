import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path = "/" element= {
          <>
          <NavBar />
          <Header />
          <MainPage />
          </>

        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
