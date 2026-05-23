import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routing/MainRoutes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
