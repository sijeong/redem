import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import AdminPage from './AdminPage';
import Header from './Header';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';
import ProductPage from './ProductPage';
import ProductsPage from './ProductsPage';

const AdminPage = React.lazy(()=> import("./AdminPage"))

const Routes: React.FC<RouteComponentProps> = (props) => {
    const [loggedIn, setLoggedIn] = React.useState(true);

    return (
        <div>
            <Header />
            <TransitionGroup>
                <CSSTransition key={props.location.key} timeout={500} classNames="animate">
                    <Switch>
                        <Redirect exact={true} from="/" to="/products" ></Redirect>
                        <Route exact={true} path="/products" component={ProductsPage}></Route>
                        <Route path="/products/:id" component={ProductPage}></Route>
                        <Route path="/admin">
                            {loggedIn
                                ? (
                                    <Suspense fallback={<div className="page-container">Loading...</div>}>
                                        <AdminPage></AdminPage>
                                    </Suspense>)
                                : (<Redirect to="/login" />)}
                        </Route>
                        <Route path="/login" component={LoginPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

const RoutesWrap: React.FC = () => {
    return (
        <BrowserRouter>
            <Route component={Routes} />
        </BrowserRouter>
    )
}
export default RoutesWrap;