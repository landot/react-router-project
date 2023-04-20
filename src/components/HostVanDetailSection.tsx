import { useVanData } from "../pages/Host/HostVanDetail";

export default function HostVanDetailSection() {
    const { vanData } = useVanData();

    console.log(vanData.id)
    return (
        <p>van details for {vanData.id}</p>
    )
}