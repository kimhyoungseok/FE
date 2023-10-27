<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import Routers from "./routers/Routers";
import { RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store/store";
=======
import ReactDOM from 'react-dom/client';
import Routers from './routers/Routers';
import { RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
// import { Provider } from "react-redux";
>>>>>>> 15372c342045c4cf2de7631cc6ccd629631ec9e4

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
<<<<<<< HEAD
    <Provider store={store}>
    <RouterProvider router={Routers} />
    </Provider>
=======
    <AuthProvider>
      {/* <Provider store={store}> */}
      <RouterProvider router={Routers} />
    </AuthProvider>
    {/* </Provider> */}
>>>>>>> 15372c342045c4cf2de7631cc6ccd629631ec9e4
  </ThemeProvider>
);
