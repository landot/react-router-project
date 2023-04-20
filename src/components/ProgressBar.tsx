
export default function ProgressBar(props: { stars: string, percent: string, bgcolor: string}) {
    const containerStyles = {
        height: 5,
        width: '80%',
        backgroundColor: "#e0e0de",
        margin: '10px'
      }
    
      const fillerStyles = {
        height: '80%',
        width: `${props.percent}%`,
        backgroundColor: props.bgcolor,
      }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <p style={{
                margin: '5px'
            }}>{props.stars} stars</p>
            <div style={containerStyles}>
                <div style={fillerStyles}/>
            </div>
            <p style={{
                margin: '5px'
            }}>{props.percent}%</p>
        </div>

    )
}