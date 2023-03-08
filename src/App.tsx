import './App.scss';
import { Search } from './components/search';

console.log(
  '[App.tsx]',
  `Hello world from Electron ${process.versions.electron}!`
);
const options = [{ label: '1' }, { label: '2' }, { label: '3' }];

function App() {
  return (
    <div className="App">
      <Search options={options} />
    </div>
  );
}

export default App;
