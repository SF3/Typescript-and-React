import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {TaskApp} from "./TaskApp";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <TaskApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
