import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme';
import {Provider} from "react-redux";
import {store} from "./store/store";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
              <ThemeProvider theme={theme} >
                  <CssBaseline />
                  <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      sx={{borderRadius: '20px'}}
                  />
                  <App/>
              </ThemeProvider>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

