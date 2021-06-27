import Typical from 'react-typical'

const Topbar = () => {
    return (
        <div className='topbar'>
            <Typical 
                steps={['Welcome to The Circle 🧑🏼‍💻', 1000]}
                loop={Infinity}
                wrapper="p"
            />
        </div>
    )
}

export default Topbar
