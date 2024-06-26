import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import User from "./components/User";
import AddNewToDo from "./components/AddNewToDo";
import Todos from "./components/Todos";
import Projects from "./components/Projects";
import EditTodo from "./components/EditTodo";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <User />
        <AddNewToDo />
        <Calendar />
        <Projects />
      </Sidebar>

      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
