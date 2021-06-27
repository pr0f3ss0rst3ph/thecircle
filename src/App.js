import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Presenting from "./components/Presenting";
import Topbar from "./components/Topbar";
import Topfive from "./components/Topfive";
import Trendings from "./components/Trendings";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Topbar />
      <Presenting />
      <Topfive />
      <Trendings />
    </div>
  );
}

export default App;
