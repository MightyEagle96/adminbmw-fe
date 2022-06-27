import "./App.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import MainRoutes from "./routes";
import { loggedUser } from "./services/services";
import { Row } from "react-bootstrap";
import SideMenuComponent from "./components/SideMenuComponent";
import { theme } from "./utils/labels";

function App() {
  return (
    <div>
      <NavigationBar />
      {loggedUser ? (
        <div>
          <Row>
            <div className="col-md-3" style={{ backgroundColor: theme.deep }}>
              <SideMenuComponent />
            </div>
            <div className="col-md-9">
              <MainRoutes />
            </div>
          </Row>
        </div>
      ) : (
        <div>
          <MainRoutes />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
