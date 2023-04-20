import { Link } from "react-router-dom";

export default function ListedVan(props: {name: string, price: number, imageUrl: string, id: string}) {
    return (
        // see if there is a better way of doing this to= to get the link working on the dashboard and vans page
        <Link to={`/host/vans/${props.id}`} style={{
            textDecoration: 'none',
            color: '#161616'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 25px',
                margin: '15px 25px',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',

            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <img src={props.imageUrl} alt="van-image" style={{
                        maxWidth: '65px',
                        borderRadius: '5px',
                        marginRight: '10px'
                    }}/>
                    <div style={{
                        display: 'inline',
                        float: 'right'
                    }}>
                        <h5>{props.name}</h5>
                        <p>${props.price} /day</p>
                    </div>
                </div>
                <p>Edit</p>
            </div>
        </Link>
    )
}