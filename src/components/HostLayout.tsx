import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <div>
            <nav style={{ fontFamily: 'Inter', padding: '25px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFF7ED' }}>
                <Link to='/host' style={{ textDecoration: 'none', fontSize: '16px', color: '#4D4D4D', fontWeight: '600', marginRight: '20px' }}>Dashboard</Link>
                <Link to='/host/income' style={{ textDecoration: 'none', fontSize: '16px', color: '#4D4D4D', fontWeight: '600', marginRight: '20px' }}>Income</Link>
                <Link to='/host/reviews' style={{ textDecoration: 'none', fontSize: '16px', color: '#4D4D4D', fontWeight: '600' }}>Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}