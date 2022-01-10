import { Provider } from "react-redux";
import store from "./redux/store";
import SampleProductContainer from "./components/SampleProductContainer2";
import "./App.css";
import SampleProductContainer2 from "./components/SampleProductContainer2";
import SampleProductContainer3 from "./components/SampleProductContainer3";
import SampleProductContainer4 from "./components/SampleProductContainer4";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SampleProductContainer />
        <SampleProductContainer2 />
        <SampleProductContainer3 />
        <SampleProductContainer4 />
      </div>
    </Provider>
  );
}

export default App;
