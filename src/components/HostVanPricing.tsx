import { useVanData } from "../pages/Host/HostVanDetail";

export default function HostVanPricing() {
    const { vanData } = useVanData();

    return (
        <p>van pricing for {vanData.id}</p>
    )
}