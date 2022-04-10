import './index.css';
import Books from './Books';

function App() {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <h2 className="mt-14 font-serif font-bold text-2xl">Bookshelf</h2>
      <Books />
    </div>
  );
}

export default App;
