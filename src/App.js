import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddHotel from "./screens/AddHotel";
import Hotel from "./screens/Hotel";
import Header from "./components/Header";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import { Container } from "react-bootstrap";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/hotel" component={Hotel} />
          <Route path="/addhotel" component={AddHotel} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterUserScreen} />
        </Switch>
      </Container>
    </main>
  );
}

export default App;
