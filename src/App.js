import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
const theme = createTheme({
  palette: {
    mode: "dark",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <h1>Rewards has moved to the REVV Suite:</h1>
        <h2><a href="https://perabjoth.github.io/REVV-Suite/#/Rewards" style={{color: 'red'}}>https://perabjoth.github.io/REVV-Suite/#/Rewards</a></h2>
      </Container>
    </ThemeProvider>
  );
}

export default App;
