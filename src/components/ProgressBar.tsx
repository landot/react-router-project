
export default function ProgressBar(props: { stars: string, percent: string, bgcolor: string}) {
    const containerStyles = {
        height: 5,
        maxWidth: '500px',
        backgroundColor: "#e0e0de",
        margin: '10px',
        width: '50%'

      }
    
      const fillerStyles = {
        height: '100%',
        width: `${props.percent}%`,
        backgroundColor: props.bgcolor,
      }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '5px'
        }}>
            <p style={{
                margin: '10px'
            }}>{props.stars} stars</p>
            <div style={containerStyles}>
                <div style={fillerStyles}/>
            </div>
            <p style={{
                margin: '10px'
            }}>{props.percent}%</p>
        </div>

    )
}