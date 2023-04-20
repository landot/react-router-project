import { useEffect, useState } from "react"
import Van from "./Van";
import { FILTERS } from "../constants.ts/vanFilters";

interface Van {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
}


export default function Vans() {
    const [vanData, setVanData] = useState<Van[]>([]);
    const [filters, setFilters] = useState<string[]>([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVanData(data.vans);
            })
    }, [])

    function handleClearFilters() {
        setFilters([]);
    }

    function handleFilterClick(filter: string) {
        if (filters.includes(filter)) {
            setFilters(
                filters.filter(f => {
                    return f !== filter
                })
            );
        } else {
            setFilters([...filters, filter])
        }
    }

    return (
        <div>
            <h1>Explore our van options</h1>
            {FILTERS.map(f => (
                <button className={`filter-button ${filters.includes(f) ? "active" : ""}`} onClick={() => handleFilterClick(f)}>{f}</button>
            ))}
            <button className='filter-clear' onClick={handleClearFilters}>Clear filters</button>
            <div className="card-row">
            {vanData.filter(van => {
                return filters.length > 0 ? filters.includes(van.type) : true
            }).map(van => (
                <Van id={van.id} src={van.imageUrl} vanName={van.name}  price={van.price} type={van.type}/>
            ))}
            </div>
        </div>
    )
}