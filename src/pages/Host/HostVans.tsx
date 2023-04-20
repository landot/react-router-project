import { useState, useEffect } from "react";
import ListedVan from "../../components/ListedVan";
import { Van } from "../Vans/Vans";

export default function Vans() {
    const [hostVanData, setHostVanData] = useState<Van[]>();

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => {
                setHostVanData(data.vans);
            })
    }, [])

    return (
        <div>
            <h4>Your listed vans</h4> 
            {hostVanData && hostVanData.map(van => (
                <ListedVan {...van}/> 
            ))}
        </div>
    )
}