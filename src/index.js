import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ToastContainer} from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
              <ThemeProvider theme={theme} >
                  <CssBaseline />

                  <App/>
              </ThemeProvider>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

