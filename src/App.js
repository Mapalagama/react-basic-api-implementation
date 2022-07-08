import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import appRoutes from "./routes/routes";
import CountryList from "./pages/CountryList";
import Country from "./pages/Country";
import "../src/styles/globle.css";


function App() {
  return (
    <Router>
      <div className="App-content">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to={appRoutes.COUNTRIES} />}
          ></Route>
          <Route
            exact
            path={appRoutes.COUNTRIES}
            element={<CountryList />}
          ></Route>
          <Route exact path={appRoutes.COUNTRY} element={<Country />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
