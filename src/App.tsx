import { Container } from '@mui/material';
import './App.scss';

import { HomePage } from './pages/home/HomePage';

console.log(
  '[App.tsx]',
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  return (
    <Container sx={{ padding: 20 }}>
      <HomePage />
    </Container>
  );
}

export default App;
