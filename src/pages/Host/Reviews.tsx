import { AiFillStar } from 'react-icons/ai';
import ProgressBar from '../../components/ProgressBar';

export default function Reviews() {
    return (
        <div style={{
            padding: '20px'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <h1 style={{
                    padding: '0',
                    margin: '0'
                }}>Your reviews</h1>
                <span style={{
                    paddingTop: '10px',
                    paddingLeft: '10px'
                }}>last <u>30 days</u></span>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <h1 style={{
                    padding: '0',
                    margin: '0'
                }}>5.0</h1>
                <AiFillStar width='25px' color='#FF8C38' style={{
                    margin: '5px'
                }}/>
                <p>overall rating</p>
            </div>
            <div>
                <ProgressBar stars='5' percent='75' bgcolor='#FF8C38'/>
                <ProgressBar stars='4' percent='10' bgcolor='#FF8C38'/>
                <ProgressBar stars='3' percent='5' bgcolor='#FF8C38'/>
                <ProgressBar stars='2' percent='10' bgcolor='#FF8C38'/>
                <ProgressBar stars='1' percent='0' bgcolor='#FF8C38'/>
            </div>
        </div>
    )
}