import { Header } from "./components/Header";
import { Aside } from "./components/Aside"

function App() {
  return (
    <div className="AppContainer">
      <Header title="Dashboard"/>
      <Aside/>
      <main> Main</main>
    </div>
  );
}

export default App;
