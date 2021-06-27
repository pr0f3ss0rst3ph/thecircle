import portrait1 from "../images/portrait1.png"
import portrait2 from "../images/portrait2.png"
import portrait3 from "../images/portrait3.png"
import portrait4 from "../images/portrait4.png"
import portrait5 from "../images/portrait5.png"
const Topfive = () => {
    return (
        <div className='topfive-container'>
            <div className='topfivetext'>June 2021 Featured Writers</div>
            <div className='topfive'>
                
                <div className='blogger'>
                    <img alt='top-result' src={portrait1} width='100%' height='100%' style={{ objectFit : 'cover' }}/>
                </div>
                <div className='blogger'>
                    <img alt='top-result' src={portrait2} width='100%' height='100%' style={{ objectFit : 'cover' }}/>
                </div>
                <div className='blogger'>
                    <img alt='top-result' src={portrait3} width='100%' height='100%' style={{ objectFit : 'cover' }}/>                
                </div>
                <div className='blogger'>
                    <img alt='top-result' src={portrait4} width='100%' height='100%' style={{ objectFit : 'cover' }}/>
                </div>
                <div className='blogger'>
                    <img alt='top-result' src={portrait5} width='100%' height='100%' style={{ objectFit : 'cover' }}/>
                </div>
            </div>
        </div>

    )
}

export default Topfive
