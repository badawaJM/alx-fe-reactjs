import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">About</Link>
          </li>
        </ul>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
