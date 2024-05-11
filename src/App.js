import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import User from './components/User';
import AddNewToDo from './components/AddNewToDo';
import Todos from './components/Todos';
import Projects from './components/Projects';
import EditTodo from './components/EditTodo';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className='App'>
      <Header>
        <User />
        <AddNewToDo />
        <Calendar />
        <Projects />
      </Header>

      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
