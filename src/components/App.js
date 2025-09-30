import React from "react";
import { Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;
