import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <div className="navigation">
        <div className="nav-brand">
          PLANTS
        </div>
        <Link to="/about">About</Link>
      </div>
    );
  }
  
  export default Navigation;
  