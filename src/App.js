import { BrowserRouter, Route, Switch } from "react-router-dom"
import { XFormContext, spanish } from '@tdc-cl/x-form';
import LoginContainer from "./forms/login/LoginContainer";
import ContactContainer from "./forms/contact/ContactContainer";
import RegisterContainer from "./forms/register/RegisterContainer";
import Home from "./Home";
import CallAPI from "./CallAPI";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <XFormContext.Provider value={{ locale: spanish }}>
          <Route path="/api/:page?" component={CallAPI} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/contact" component={ContactContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/" component={Home} exact />
        </XFormContext.Provider>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
