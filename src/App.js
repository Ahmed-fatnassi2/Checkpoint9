import "./App.css";
import TaskInput from "./Component/TaskInput/TaskInput";
import TaskList from "./Component/TaskList/TaskList";
function App() {
    return (
        <div className="App">
            <TaskInput />
            <TaskList />
            {/* <footer className="footer"></footer> */}
        </div>
    );
}

export default App;
