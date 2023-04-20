
export default function ListedVan() {
    return (
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
                <img src="https://assets.scrimba.com/advanced-react/react-router/beach-bum.png" alt="van-image" style={{
                    maxWidth: '65px',
                    borderRadius: '5px',
                    marginRight: '10px'
                }}/>
                <div style={{
                    display: 'inline',
                    float: 'right'
                }}>
                    <h5>Modest Explorer</h5>
                    <p>$60 /day</p>
                </div>
            </div>
            <p>Edit</p>
        </div>
    )
}