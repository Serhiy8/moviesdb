import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header/Header";
import { Favorite } from "./pages/Favorite";
import { Home } from "./pages/Home";

function App() {

  return (
    <Routes>
      <Route path="/moviesdb" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App
