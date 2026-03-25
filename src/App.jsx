import Header  from "./components/Header";
import PersonList from "./components/PersonList";
import "./App.css"

function App() {
  
  return (
    <div className="app">
      <Header title="PersonApp"/>
      <main>
        <PersonList/>
      </main>
    </div>
  );
}

export default App;
