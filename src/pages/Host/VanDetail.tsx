import { useState, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, NavLink, useParams } from "react-router-dom";
import { Van } from "../Vans/Vans";

export default function VanDetail() {
    const params = useParams();
    const [vanData, setVanData] = useState<Van>();

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVanData(data.vans[0]);
            })
    }, [])

    console.log(vanData)

    return (
        <div>
            {/* duplicates logic in pages/Vans */}
            <Link to='/host/vans' style={{padding: '5px'}}>
                <span style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <AiOutlineLeft />
                    <p style={{color: '#201F1D', fontSize: '16px'}}>Back to all vans</p>
                </span>
            </Link>
            <p>{JSON.stringify(vanData)}</p>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {
                    vanData ? (
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            width: '100%',
                            padding: '20px',
                            margin: '25px'
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 2fr',
                                alignItems: 'center'
                            }}>
                                <img src={vanData.imageUrl} alt="van-image" style={{
                                    width: '160px',
                                    marginRight: '20px'
                                }}/>
                                <div>
                                    <button className={`van-style ${vanData.type}`}>{vanData.type}</button>
                                    <p><b>{vanData.name}</b></p>
                                    <p><b>${vanData.price}</b> /day</p>
                                </div>
                            </div>
                            <div className='van-detail-subheader' style={{
                                display: 'flex'
                            }}>
                                <p className='host-nav'>Details</p>
                                <p className='host-nav'>Pricing</p>
                                <p className='host-nav'>Photos</p>
                            </div>
                            <div>
                                <p>detail pricing and photos go here</p>
                            </div>
                        </div>
                    ) : <p>Loading...</p>
                }
            </div>
        </div>
    )
}