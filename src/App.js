import "./App.css";
import "./Team.css"
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App" >
      <Header />

      <div className="Team">
        <Body  src = "/avatar-default.png"  name="Олександр"position="Sofware developer"/>
        
        <Body  src = "/avatar-default.png"  name=""position=""/>
        
        <Body  src = "/avatar-default.png"  name=""position=""/>
        
        <Body  src = "/avatar-default.png"  name=""position=""/>
      </div>
    </div>
  );
}

export default App;
