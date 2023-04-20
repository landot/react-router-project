import { Link } from "react-router-dom"

export default function Van(props: {
    src: string,
    vanName: string,
    price: number,
    type: string,
    id: string
}) {
    return (
        <Link to={`/vans/${props.id}`} style={{
            textDecoration: 'none',
            color: '#161616'
        }}>
            <div key={props.id} className='van-card'>
                <img src={props.src} alt={props.vanName} style={{borderRadius: '5px', maxWidth: '100%', maxHeight: 'auto'}} />
                <span style={{fontWeight: '600'}}>{props.vanName}</span>
                <span>{`$${props.price} /day`}</span>
                <span className={`van-style ${props.type}`}>{props.type}</span>
            </div>
        </Link>

    )
}