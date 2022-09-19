import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { userRoutes } from '../../routes';

const MainContainer = () => {
  const routes = (() => userRoutes)();

  return (
    <Layout>
      <Switch>
        {routes.map(route =>
          route.component ? (
            <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
              <route.component />
            </Route>
          ) : (
            route.redirectRoute && <Redirect key={route.name} to={route.path} />
          ),
        )}
      </Switch>
    </Layout>
  );
};

export default MainContainer;
