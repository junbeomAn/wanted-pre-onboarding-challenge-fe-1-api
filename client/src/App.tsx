import { Routes, Route, Link } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import TodoApp from "./pages/TodoApp/TodoApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link to="/auth">로그인/회원가입</Link>
              <Link to="/todo">To-do list</Link>
            </>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todo/*" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
