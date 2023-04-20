import { Link } from "react-router-dom";
// Inter

export default function Header() {
    return (
        <nav style={{fontFamily: 'Inter', padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF7ED'}}>
            <Link to='/' style={{color: '#000000', textDecoration: 'none', fontWeight: '900', fontSize: '25'}}>#VANLIFE</Link>
            <nav>
                <Link to='/host' style={{ textDecoration: 'none', fontSize: '16px', color: '#4D4D4D', fontWeight: '600', marginRight: '20px'}}>Host</Link>
                <Link to='/about' style={{ textDecoration: 'none', fontSize: '16px', color: '#4D4D4D', fontWeight: '600', marginRight: '20px'}}>About</Link>
                <Link to='/vans' style={{ textDecoration: 'none', fontSize: '16px', color: '#4D4D4D', fontWeight: '600'}}>Vans</Link>
            </nav>
        </nav>
    )
}