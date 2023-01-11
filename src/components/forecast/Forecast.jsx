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
                                    <label className="day">{forecastDays[i]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C - {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Feels Like</label>
                                    <label>{ item.main.feels_like }°C</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{ item.main.pressure }hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{ item.main.humidity }%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{ item.clouds.all }%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind Speed</label>
                                    <label>{ item.wind.speed } m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level</label>
                                    <label>{ item.main.sea_level } mts</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    )
                })}
            </Accordion>
        
        </>

    );
}

export default Forecast;