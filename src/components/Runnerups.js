import Author from "./Author"

const Runnerups = ({ title, image, author }) => {
    return (
        <div className='runner-card'>
            <div className='runner-image'>
                <img alt='top-result' src={image} width='100%' height='100%' style={{ objectFit : 'cover' }}/>
            </div>
            <div className='runner-details'>
                <div className='runner-title'>
                    {title}
                </div>
                <div className='runner-info'>
                    <Author type='runner' author={author}/>
                </div>
            </div>

        </div>
    )
}

export default Runnerups
