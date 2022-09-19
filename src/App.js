/* eslint-disable no-unused-vars */
import { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
// import { ToastContainer } from 'react-toastify';
import { authenticationValidator } from './store/actions';
import { Spinner } from './components';
import { guestRoutes } from './routes';
// import { requestForToken } from './fireBase';
import * as actions from './store/actions';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

// Import scss
import './assets/scss/theme.scss';
import './app.css';
// add js

// add css

function App() {
  const tokenPresent = !!useSelector(state => state.auth.authToken);
  const tokenExpire = !!useSelector(state => state.auth.isExpire);
  const { show, title } = useSelector(state => state.modal);
  const pathname = window.location.pathname.split('/')[1];

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(authenticationValidator());
  }, []);

  useEffect(() => {
    if (tokenPresent) {
      // dispatch(getProfile());
      // dispatch(getAllUser());
    }
  }, [tokenPresent]);
  const redirectHandler = () => {
    const guestRoute = guestRoutes
      .filter(item => item.redirectRoute === undefined)
      .map(item => item.path);
    return !guestRoute.includes(`/${pathname}`) && localStorage.getItem('authToken') == null ? (
      <Redirect to="/signin" />
    ) : null;
  };

  let mainContent = (
    <>
      {guestRoutes.map(
        route =>
          route.redirectRoute === undefined && (
            <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
              <route.component />
            </Route>
          ),
      )}
      {redirectHandler()}
    </>
  );
  if (tokenPresent) {
    mainContent = (
      <>
        <Route path="/" component={lazy(() => import('./views/MainContainer/MainContainer'))} />
      </>
    );
  }
  if (tokenExpire) {
    return (
      <Modal backdrop={false} centered fade={false} size="lg" isOpen>
        <ModalHeader className="justify-content-center">Session expired</ModalHeader>
        <ModalBody className="text-center">Session is expired please login again</ModalBody>
        <ModalFooter className="justify-content-center">
          <Button
            color="primary"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Login
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Switch>{mainContent}</Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
