import thecircletop from "../images/thecircletop.png"
import productive from "../images/productive.png"
import lgbtq from "../images/lgbtq.png"
import startups from "../images/startups.png"
import vacation from "../images/vacation.png"
import Runnerups from "./Runnerups"
import Topstory from "./Topstory"


const Presenting = () => {
    return (
        <div className='presenting-body'>
            <div className='top-story-container'>
                <Topstory image={thecircletop} 
                          title='New Waterfall? Or forgotten land?' 
                          subtitle='Guyanese pilot discovered unknown Waterfall in the land of many waters' 
                          author='Maria Williams'
                />
            </div>

            <div className='runner-ups'>
                <Runnerups title='7 Ways to Be More Productive' author='Sarah Jones' image={productive} />
                <Runnerups title='LGBTQ+ Life in Guyana' author='Jason Dawn' image={lgbtq}/>
                <Runnerups title='Startups Rocking the Caribbean' author='Claire Jean' image={startups}/>
                <Runnerups title='Best Vacation Spots in Guyana' author='France Richards' image={vacation}/>
            </div>
        </div>
    )
}

export default Presenting
