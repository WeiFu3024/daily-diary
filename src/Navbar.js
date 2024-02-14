import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Daily Diary Web</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/new-diary'>New Diary</Link>
            </div>
        </div>
     );
}

export default Navbar;