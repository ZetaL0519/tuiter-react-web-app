import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Assignment7 from "./labs/a7";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import "./profile.css";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
        <Route path="/">
            <Route index element={<Labs/>}/>
            <Route path="/labs" exact={true} element={<Labs/>}/>
           <Route path="/hello" element={<HelloWorld/>}/>
           <Route path="/tuiter/*" element={<Tuiter/>}/>
           <Route path="/a7" element={<Assignment7/>}/>
           </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;