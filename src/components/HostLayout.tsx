import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <div>
            <nav style={{ fontFamily: 'Inter', padding: '25px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFF7ED' }}>
                <NavLink 
                    className='host-nav' 
                    to='/host'
                    end
                    style={({isActive}) => isActive ? activeStyles : {}}
                >Dashboard</NavLink>
                <NavLink 
                    className='host-nav' 
                    to='/host/income'
                    style={({isActive}) => isActive ? activeStyles : {}}
                >Income</NavLink>
                <NavLink 
                    className='host-nav' 
                    to='/host/reviews'
                    style={({isActive}) => isActive ? activeStyles : {}}
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}