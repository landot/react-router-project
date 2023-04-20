import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { Van } from "./Vans";

export default function VanDetail() {
    const params = useParams();
    const [vanData, setVanData] = useState<Van>();
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVanData(data.vans);
            })
    }, [params.id])

    return (
        <div>
            <Link to='..' relative='path' style={{padding: '5px'}}>
                <span style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <AiOutlineLeft />
                    <p style={{color: '#201F1D', fontSize: '16px'}}>Back to all vans</p>
                </span>
            </Link>
            {
                vanData ? (
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '15px'}}>
                        <img src={vanData.imageUrl} alt="van-image" style={{maxWidth: '500px', padding: '20px', borderRadius: '25px', alignSelf: 'center'}}/>
                        <button className={`van-style ${vanData.type}`}>{vanData.type}</button>
                        <span style={{fontWeight: '700', fontSize: '32px'}}>{vanData.name}</span>
                        <span style={{fontSize: '24px'}}>{`$${vanData.price} /day`}</span>
                        <p style={{fontSize: '16px'}}>{vanData.description}</p>
                    </div>
                ) : <h2>Loading</h2>
            }
        </div>
    )
}