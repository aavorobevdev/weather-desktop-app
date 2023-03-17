import { Container } from '@mui/material';
import './App.scss';
import { StarsBackground } from './components/StarsBackground';

import { HomePage } from './pages/home/HomePage';

console.log(
  '[App.tsx]',
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  return (
    <>
      <StarsBackground />
      <Container
        sx={{ display: 'flex', justifyContent: 'center', padding: 20 }}
      >
        <HomePage />
      </Container>
    </>
  );
}

export default App;
