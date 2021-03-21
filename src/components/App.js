// import React from 'react';
// import React, {  Suspense } from "react";
// import { Switch,Route } from 'react-router-dom';
// import Layout from './layout/Layout'
// // import Navigation from './Navigation';
// import HomePage from '../views/HomePage';
// import MoviesPage from '../views/MoviesPage';
// // import ShowDetails from '../views/ShowDetails';
// // import NotFound from '../views/NotFound';

// import routes from  '../routes/routes';



// const App = () => (
//   <Layout>

//     <hr />
// <Suspense>
// <Switch>
//       <Route path={routes.home}exact component={HomePage} />
//       <Route path={routes.movies} exact component={MoviesPage} />
//       {/* <Route path={routes.showDetails} component={ShowDetails} /> */}
//       {/* <Route component={NotFound} /> */}
//     </Switch>
//   </Suspense>
  
//   </Layout>
// );

// export default App;

// ----------------

import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Navigation from "./navigation/Navigation";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { mainRoutes } from "../routes/mainRoutes";
import { optionRoutes } from "../routes/optionRoutes";
import Spiner from "./loader/Loader";



const App = () => (
  <Layout>
    <Navigation />
    <Suspense fallback={<Spiner />}>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
      {optionRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Suspense>
  </Layout>
);

export default App;

// function App() {
//   return (
//     <div className="App">
//      app
//     </div>
//   );
// }

// export default App;
