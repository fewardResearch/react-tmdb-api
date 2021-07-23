// React
import type { FC, ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

const App: FC = (): ReactElement => {
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
