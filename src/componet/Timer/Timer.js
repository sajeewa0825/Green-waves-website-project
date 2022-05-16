import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
import UseWindowDimensions from "./CatchScreen"

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;



const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};



const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const sizeSet = () => {
    const { width } = UseWindowDimensions();
    console.log(width)

    if(width<600 && width > 450){
        timerProps.size=100;
        timerProps.strokeWidth=4;
    } else if(width<450 && width > 350){
        timerProps.size=85;
        timerProps.strokeWidth=4;
    }else if(width<350 && width > 300){
        timerProps.size=65;
        timerProps.strokeWidth=3;
    }

}


const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
    sizeSet()
    console.log(timerProps.size)
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds
    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div>
            <div>
                <div>
                    <div className='row Timerowangle'>
                        <p className='ptime col-10 col-md-10 col-xl-10 col-lg-10 col-sm-10 col-xxl-10'>OUR LATEST EVENT</p>
                        <div className='col-1 TimeblacklineRight col-md-1 col-xl-1 col-lg-1 col-sm-1 col-xxl-1'></div>
                        <div className='Timeblackline col-1 col-md-1 col-xl-1 col-lg-1 col-sm-1 col-xxl-1'></div>
                    </div>
                    <div className='row Timecontent'>
                        <h2>
                            Three Planting Camping
                        </h2>
                    </div>
                </div>
            </div>

            <div className="time1">
                <div className="">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors="#7E2E84"
                        duration={daysDuration}
                        initialRemainingTime={remainingTime}
                    >
                        {({ elapsedTime, color }) => (
                            <span style={{ color }}>
                                {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                            </span>
                        )}
                    </CountdownCircleTimer>
                </div>
                <div className="">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors="#D14081"
                        duration={daySeconds}
                        initialRemainingTime={remainingTime % daySeconds}
                        onComplete={(totalElapsedTime) => ({
                            shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                        })}
                    >
                        {({ elapsedTime, color }) => (
                            <span style={{ color }}>
                                {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                            </span>
                        )}
                    </CountdownCircleTimer>
                </div>
                <div className="">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors="#EF798A"
                        duration={hourSeconds}
                        initialRemainingTime={remainingTime % hourSeconds}
                        onComplete={(totalElapsedTime) => ({
                            shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                        })}
                    >
                        {({ elapsedTime, color }) => (
                            <span style={{ color }}>
                                {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                            </span>
                        )}
                    </CountdownCircleTimer>
                </div>
                <div className="">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors="#218380"
                        duration={minuteSeconds}
                        initialRemainingTime={remainingTime % minuteSeconds}
                        onComplete={(totalElapsedTime) => ({
                            shouldRepeat: remainingTime - totalElapsedTime > 0
                        })}
                    >
                        {({ elapsedTime, color }) => (
                            <span style={{ color }}>
                                {renderTime("seconds", getTimeSeconds(elapsedTime))}
                            </span>
                        )}
                    </CountdownCircleTimer>
                </div>
            </div>
        </div>
    );
}
