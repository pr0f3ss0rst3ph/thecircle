const Author = ({ type, author }) => {
    if (type === 'runner') {
        return (
            <div className='runner-author'>
                { author }
            </div>
        )
    }
    else{
        return (
            <div className='blog-author'>
                { author }
            </div>
        )
    }
}

export default Author
