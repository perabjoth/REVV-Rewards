import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Transactions from './components/Transactions';
const theme = createTheme({
  palette: {
    type: "dark",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Transactions />
      </Container>
    </ThemeProvider>
  );
}

export default App;
