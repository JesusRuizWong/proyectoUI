import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';
import { ThemeProvider } from "@mui/material";
import  Theme from './assets/Theme'



export const CalendarApp = () => {
  return (
    <ThemeProvider theme={Theme}>

    <Provider store={ store }>
      <BrowserRouter>
      {/* <HashRouter> */}
        <AppRouter />
      {/* </HashRouter> */}
      </BrowserRouter>
    </Provider>
    </ThemeProvider>
  )
}
