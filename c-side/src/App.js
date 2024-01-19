import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Header from "./header/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path = "/" element= {
          <>
          <NavBar />
          <Header />
          </>

        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
