import { AiFillStar } from 'react-icons/ai';
import ListedVan from '../../components/ListedVan';

export default function Host() {
    return (
        <div>
            <div className='welcome-section' style={{
                background: '#FFEAD0',
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
            }}>
                <h2 style={{
                    padding: '0 25px',
                    marginBottom: '0'
                }}>Welcome!</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0 25px'
                }}>
                    <p>Income last <u>30 days</u></p>
                    <p>Details</p>
                </div>
                <p style={{
                    fontWeight: '800',
                    fontSize: '48px',
                    lineHeight: '38px',
                    padding: '0 25px',
                    marginBottom: '20px',
                    marginTop: '20px'
                }}>$2,260</p>
            </div>
            <div className='review-section' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 25px',
                background: '#FFDDB3'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <h4 style={{
                        marginRight: '10px'
                    }}>Review score</h4>
                    <AiFillStar color='#FF8C38'/>
                    <p><b>5.0</b>/5</p>
                </div>
                <p>Details</p>
            </div>
            <div className='listed-vans'>
                <div style={{
                    display: 'flex',
                    padding: '0 25px',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <h4>Your listed vans</h4>
                    <p>View all</p>
                </div>
            </div>
            <ListedVan />
            <ListedVan />
            <ListedVan />
        </div>
    )
}