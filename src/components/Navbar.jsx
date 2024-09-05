import { Link } from 'react-router-dom'

export default function Navbar(){

    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About Me</Link>
            <Link to='/Projects'>Projects</Link>
        </div>
    )
}