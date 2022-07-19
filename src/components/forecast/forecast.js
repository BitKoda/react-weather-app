import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./forecast.css";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Forecast = ({ data }) => {
  const today = new Date().getDay();
  const forecastDays = WEEKDAYS.slice(today, WEEKDAYS.length).concat(
    WEEKDAYS.slice(0, today)
  );

  console.log(forecastDays);
  return (
    <>
      <label className='title'>Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt='weather on this day'
                    className='icon-small'
                  />
                  <label className='day'>{forecastDays[idx]}</label>
                  <label className='description'>
                    {item.weather[0].description}
                  </label>
                  <label className='min-max'>
                    {Math.round(item.main.temp_max)}&deg;C /{" "}
                    {Math.round(item.main.temp_min)}&deg;C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid'>
                <div className='daily-details-grid-item'>
                  <label>Pressure</label>
                  <label>{item.main.pressure} mb</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Cloud coverage</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}&deg;C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
