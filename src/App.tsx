import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Logo from "./widgets/Logo/Logo";
import Footer from "./widgets/Footer/Footer";
import { JSX, useState } from "react";
import { TodosContext } from "./context/context";
import All from "./pages/All/All";
import Active from "./pages/Active/Active";
import Completed from "./pages/Completed/Completed";
import { ITodo } from "./types/types";

function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <div className="App">
        <Router>
          <Logo />
          <div className="page">
            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/active" element={<Active />} />
              <Route path="/completed" element={<Completed />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
