import Author from "./Author"

const Topstory = ({ image, title, subtitle, author }) => {
    return (
        <div className='top-story'>
            <div className='story-card'>
                <div className='blog-image'>
                    <img alt='top-result' src={image} width='100%' height='100%' style={{ objectFit : 'contain' }}/>
                </div>
                <div className='blog-details'>
                    <div className='blog-info'>
                        <Author type='top' author={ author } />
                    </div>
                    <div className='blog-title'>
                        {title}
                    </div>
                    <div className="blog-subtitle">
                        {subtitle}
                    </div>
                    
                </div>
            </div>
        </div>        
    )
}

export default Topstory
