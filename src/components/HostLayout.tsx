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
                    to='.'
                    end
                    style={({isActive}) => isActive ? activeStyles : {}}
                >Dashboard</NavLink>
                <NavLink 
                    className='host-nav' 
                    to='income'
                    style={({isActive}) => isActive ? activeStyles : {}}
                >Income</NavLink>
                <NavLink 
                    className='host-nav' 
                    to='reviews'
                    style={({isActive}) => isActive ? activeStyles : {}}
                >Reviews</NavLink>
                <NavLink 
                    className='host-nav' 
                    to='vans'
                    style={({isActive}) => isActive ? activeStyles : {}}
                >Vans</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}