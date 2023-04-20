import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <body className='home-container'>
                <h1 style={{
                    color: '#FFFFFF', 
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '42px'
                }}>You got the travel plans, we got the travel vans.</h1>
                <p style={{
                    color: '#FFFFFF', 
                    fontSize: '16px',
                    lineHeight: '24px'
                }}>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans" style={{
                    display: 'inline-block',
                    width: '100%',
                    borderRadius: '5px',
                    color: '#FFFFFF', 
                    backgroundColor: '#FF8C38',
                    textDecoration: 'none',
                    textAlign: 'center',
                    paddingBlock: '.75rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                }}>Find your van</Link>
            </body>
        </div>

    )
}