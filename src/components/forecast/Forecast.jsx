import "./forecast.css"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    // Algorithm to order weekdays depending on which day it is. For e.g: Lets say today is wednesday. 
    // So then the ordered output array should be: ['Thursday', 'Friday', 'Saturday', ..., 'Wednesday']
    const dayInAWeek = new Date().getDay(); // Returns the position/index of the day in the week.
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));


    return (
        <>  
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, i) => {
                    return (
                    <AccordionItem key={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img className="icon-small" src={`icons/${item.weather[0].icon}.png`} alt="weater" />
                                    <label htmlFor="" className="day"></label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                    )
                })}
            </Accordion>
        
        </>

    );
}

export default Forecast;