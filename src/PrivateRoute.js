import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  path,
  component: Component,
  validateFunction,
  redirect: RedirectPath,
}) => {
  return (
    <div>
      <Route exact path={path}>
        {validateFunction ? <Component />:<Redirect push to={RedirectPath} />}

      </Route>
    </div>
  );
};

export default PrivateRoute;
