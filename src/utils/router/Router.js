import React from "react";
import Home from "../../view/Home";
import { Route, Switch } from "react-router-dom";

const BlogRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
    </Switch>
  );
};

export default BlogRouter;
