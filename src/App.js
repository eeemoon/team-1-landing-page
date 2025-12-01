import "./App.css";
import "./Team.css"
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App" >
      <Header />

      <div className="Team">

        <Body src="/Alex.jpg" name="Олександр" position="Software Developer" />

        <Body src="/Yurii.jpg" name="Юрій" position="UI/UX Designer" />


        <Body src="/Alek_photo.jpg" name="Анастасія" position="Product Manager" />

        <Body src="/artem.jpg" name="Артем" position="Business Analyst" />

      </div>
    </div>
  );
}

export default App;
