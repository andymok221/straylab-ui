import React, { Component } from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
  NavLink as Link
} from 'react-router-dom'
import Home from './page/Home';
import ButtonDoc from './page/ButtonDoc';
import CheckboxDoc from './page/CheckboxDoc';
import FormDoc from './page/FormDoc';
import InputDoc from './page/InputDoc';
import LabelDoc from './page/LabelDoc';
import MessageDoc from './page/MessageDoc';
import ModalDoc from './page/ModalDoc';
import OffCanvasDoc from './page/OffCanvasDoc';
import PaginationDoc from './page/PaginationDoc';
import PieDoc from './page/PieDoc';
import ProgressDoc from './page/ProgressDoc';
import RadioDoc from './page/RadioDoc';
import SelectDoc from './page/SelectDoc';
import TableDoc from './page/TableDoc';
import TooltipDoc from './page/TooltipDoc';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      offCanvas: false
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="docs-container">
          <div className="navbar">
            <div className="navbar__logo">
              StrayLab
            </div>
            <ul className="navbar__list">
              <li><Link exact activeClassName="active" to="/">Home</Link></li>
              <hr />
              <li><Link activeClassName="active" to="/button">Button</Link></li>
              <li><Link activeClassName="active" to="/checkbox">Checkbox</Link></li>
              <li><Link activeClassName="active" to="/form">Form</Link></li>
              <li><Link activeClassName="active" to="/input">Input</Link></li>
              <li><Link activeClassName="active" to="/label">Label</Link></li>
              <li><Link activeClassName="active" to="/message">Message</Link></li>
              <li><Link activeClassName="active" to="/modal">Modal</Link></li>
              <li><Link activeClassName="active" to="/off-canvas">Off Canvas</Link></li>
              <li><Link activeClassName="active" to="/pagination">Pagination</Link></li>
              <li><Link activeClassName="active" to="/pie">Pie</Link></li>
              <li><Link activeClassName="active" to="/progress">Progress</Link></li>
              <li><Link activeClassName="active" to="/radio">Radio</Link></li>
              <li><Link activeClassName="active" to="/select">Select</Link></li>
              <li><Link activeClassName="active" to="/table">Table</Link></li>
              <li><Link activeClassName="active" to="/tooltip">Tooltip</Link></li>
            </ul>
          </div>
          <div className="main-content">
            <div className="main-content__header" />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/button" component={ButtonDoc}/>
              <Route exact path="/checkbox" component={CheckboxDoc}/>
              <Route exact path="/form" component={FormDoc}/>
              <Route exact path="/input" component={InputDoc}/>
              <Route exact path="/label" component={LabelDoc}/>
              <Route exact path="/message" component={MessageDoc}/>
              <Route exact path="/modal" component={ModalDoc}/>
              <Route exact path="/off-canvas" component={OffCanvasDoc}/>
              <Route exact path="/pagination" component={PaginationDoc}/>
              <Route exact path="/pie" component={PieDoc}/>
              <Route exact path="/progress" component={ProgressDoc}/>
              <Route exact path="/radio" component={RadioDoc}/>
              <Route exact path="/select" component={SelectDoc}/>
              <Route exact path="/table" component={TableDoc}/>
              <Route exact path="/tooltip" component={TooltipDoc}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
