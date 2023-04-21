import { Review } from "../pages/Host/Reviews";
import { AiFillStar } from 'react-icons/ai';

export default function HostReview(props: Review) {
    return (
        <div>
            <div className='stars' style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div>
                    {[...Array(props.stars).keys()].map(_ => (
                        <AiFillStar />                
                    ))}
                </div>
            </div>        
            <span style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <b style={{
                    paddingRight: '10px'
                }}>{props.reviewer}</b>
                <p style={{
                    color: '#8C8C8C'
                }}>{props.date}</p>
            </span>
            <p style={{
                fontSize: '16px'
            }}>{props.text}</p>
            <hr style={{
                borderColor: '#C7C7C7'
            }}/>
        </div>
    )
}