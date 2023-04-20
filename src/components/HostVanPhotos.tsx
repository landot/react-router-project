import { useVanData } from "../pages/Host/HostVanDetail";

export default function HostVanPhotos() {
    const { vanData } = useVanData();

    return (
        <p>van photos for {vanData.id}</p>
    )
}