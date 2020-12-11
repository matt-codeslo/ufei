import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from 'react-router-dom';
// COMPONENTS
import SelecTree from '../../components/SelecTree/SelectTree';
import Result from '../../components/Result/Result';
import TreeDetail from '../../components/TreeDetail/TreeDetail';
import Footer from '../../components/Footer/Footer';
import PacifcIslandsFooter from '../../components/PacificIslandsFooter/PacificIslandsFooter';
import SelectreeHeader from '../../components/SelectreeHeader/SelectreeHeader';
// error components
import NotFound from "../../components/NotFound/NotFound";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

// global css styles
import "./App.css";


const App = () => {
  return (
    <Container className="app-container container-xl" fluid>
      <SelectreeHeader />
      <Switch>
        <Route exact path="/" component={SelecTree} />
        <Route exact path="/selectree" component={SelecTree} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/tree-detail/:treeName" component={TreeDetail} />
        <Route exact path="/error" component={ErrorPage} />
        <Route component={NotFound} />
      </Switch>
      <footer className="footer mt-5 pt-5 border-top">
        <PacifcIslandsFooter />
      </footer>
    </Container>
  );
};

export default App;
