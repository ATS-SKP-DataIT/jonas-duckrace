// Component which make a countdown timer to execution of event
// Event dat is: 1. may 2022

// function CountDown() {

//   return (
//     <div className="App">
//         <div>
//             <p>00:00:00</p> 
//         </div>
//     </div>
//   );
// }

// [Todo] See it work on frontpage
// ORigin url: https://medium.com/bb-tutorials-and-thoughts/how-to-create-a-countdown-timer-in-react-app-typescript-version-5617abfe44f3

import React from 'react';
import { Text, StyleSheet, TextInput } from "react-native";

interface ICountdown {
    hours: number;
    minutes: number;
    seconds: number;
}

const CountDownTimer = ({ hours = 0, minutes = 0, seconds = 60 }: ICountdown) => {
    
    const [time, setTime] = React.useState<ICountdown>({hours, minutes, seconds});
    
    const tick = () => {
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) 
            reset()
        else if (time.hours === 0 && time.seconds === 0) {
            setTime({hours: time.hours - 1, minutes: 59, seconds: 59});
        } else if (time.seconds === 0) {
            setTime({hours: time.hours, minutes: time.minutes - 1, seconds: 59});
        } else {
            setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1});
        }
    };

    const reset = () => setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds});
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    // Needed to run: yarn add @types/react
    return (
        <>
        <div>
            <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
        </div>
        </>
    );
};

export default CountDownTimer;