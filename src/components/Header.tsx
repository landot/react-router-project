import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav style={{fontFamily: 'Inter', padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF7ED'}}>
            <Link to='/' style={{color: '#000000', textDecoration: 'none', fontWeight: '900', fontSize: '25'}}>#VANLIFE</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'header-link active-link': 'header-link'} to='/host'>Host</NavLink>
                <NavLink className={({isActive}) => isActive ? 'header-link active-link': 'header-link'} to='/about'>About</NavLink>
                <NavLink className={({isActive}) => isActive ? 'header-link active-link': 'header-link'} to='/vans'>Vans</NavLink>
            </nav>
        </nav>
    )
}