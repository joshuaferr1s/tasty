import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <Link to="/">Tasty</Link>
      </nav>
    </header>
  );
};

export default Navbar;
