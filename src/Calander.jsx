import { useEffect, useState } from 'react'
import './index.css'
import './calander.css'

function Day({value, onDayClick, reminder}) {
    return (
    <div className="day" onClick={onDayClick}>
        <div className="day-number">
            {value}
        </div>
        <div className="day-reminder">
            {reminder}
        </div>
    </div>
    )
}

function Calander() {
    const[current, changeMonth] = useState(new Date().getMonth())
    const[days, setDays] = useState([])
    const[reminders, setReminders] = useState({})
    const date = new Date()

    function handleClick(day) {
        if(!day){
            return;
        }else{
            const key = `${current}-${day}`
            const reminder = prompt(
                "Enter a reminder:",
                reminders[key] || ""
            )
            if(reminder !== null) {
                setReminders({
                    ...reminders,
                    [key]: reminder
                })
            }
        }
    }

    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "Semptember",
        9: "October",
        10: "November",
        11: "December"
    }

    function june2026() {
        return [
            "", "1", "2", "3", "4", "5", "6",
            "7", "8", "9", "10", "11", "12", "13",
            "14", "15", "16", "17", "18", "19", "20",
            "21", "22", "23", "24", "25", "26", "27",
            "28", "29", "30"
        ];
    }

    function july2026() {
        return [
            "", "", "", "1", "2", "3", "4",
            "5", "6", "7", "8", "9", "10", "11",
            "12", "13", "14", "15", "16", "17", "18",
            "19", "20", "21", "22", "23", "24", "25",
            "26", "27", "28", "29", "30", "31"
        ];
    }

    function august2026(){
        return [
            "", "", "", "", "", "", "1",
            "2", "3", "4", "5", "6", "7", "8",
            "9", "10", "11", "12", "13", "14", "15",
            "16", "17", "18", "19", "20", "21", "22",
            "23", "24", "25", "26", "27", "28", "29",
            "30", "31"
        ]
    }

    function september2026(){
        return [
            "","","1","2","3","4","5",
            "6","7","8","9","10","11","12",
            "13", "14", "15","16","17","18","19",
            "20","21","22","23","24","25","26",
            "27","28","29","30"
        ]
    }

    useEffect(() => {
        if(current===5){
            setDays(june2026());
        }
        else if(current===6){
            setDays(july2026());
        } else if(current === 7) {
            setDays(august2026());
        } else if(current === 8) {
            setDays(september2026())
        } else {
            setDays([]);
        }
    }, [current]);

    return (
        <>
        <h1>Month: {months[current]}</h1>
        <button onClick={() => changeMonth(c => (c === 0 ? 11 : c-1))}>Previous</button>
        <button onClick={() => changeMonth(c => (c === 11 ? 0 : c+1))}>Next</button>
        <p>Date: {date.toLocaleDateString()}</p>
        <div className="calander">
        <div className="week">
            <h2>Sunday</h2>
            <h2>Monday</h2>
            <h2>Tuesday</h2>
            <h2>Wednesday</h2>
            <h2>Thursday</h2>
            <h2>Friday</h2>
            <h2>Saturday</h2>
        </div>
        <div className="week">
            <Day value={days[0]}
            onDayClick={() => handleClick(days[0])}
            reminder={reminders[`${current}-${days[0]}`]}
            />
            <Day value={days[1]}
            onDayClick={() => handleClick(days[1])}
            reminder={reminders[`${current}-${days[1]}`]}
            />
            <Day value={days[2]}
            onDayClick={() => handleClick(days[2])}
            reminder={reminders[`${current}-${days[2]}`]}
            />
            <Day value={days[3]}
            onDayClick={() => handleClick(days[3])}
            reminder={reminders[`${current}-${days[3]}`]}
            />
            <Day value={days[4]}
            onDayClick={() => handleClick(days[4])}
            reminder={reminders[`${current}-${days[4]}`]}
            />
            <Day value={days[5]}
            onDayClick={() => handleClick(days[5])}
            reminder={reminders[`${current}-${days[5]}`]}
            />
            <Day value={days[6]}
            onDayClick={() => handleClick(days[6])}
            reminder={reminders[`${current}-${days[6]}`]}
            />
        </div>
        <div className="week">
        <Day value={days[7]}
            onDayClick={() => handleClick(days[7])}
            reminder={reminders[`${current}-${days[7]}`]}
            />
            <Day value={days[8]}
            onDayClick={() => handleClick(days[8])}
            reminder={reminders[`${current}-${days[8]}`]}
            />
            <Day value={days[9]}
            onDayClick={() => handleClick(days[9])}
            reminder={reminders[`${current}-${days[9]}`]}
            />
            <Day value={days[10]}
            onDayClick={() => handleClick(days[10])}
            reminder={reminders[`${current}-${days[10]}`]}
            />
            <Day value={days[11]}
            onDayClick={() => handleClick(days[11])}
            reminder={reminders[`${current}-${days[11]}`]}
            />
            <Day value={days[12]}
            onDayClick={() => handleClick(days[12])}
            reminder={reminders[`${current}-${days[12]}`]}
            />
            <Day value={days[13]}
            onDayClick={() => handleClick(days[13])}
            reminder={reminders[`${current}-${days[13]}`]}
            />
        </div>
        <div className="week">
        <Day value={days[14]}
            onDayClick={() => handleClick(days[14])}
            reminder={reminders[`${current}-${days[14]}`]}
            />
            <Day value={days[15]}
            onDayClick={() => handleClick(days[15])}
            reminder={reminders[`${current}-${days[15]}`]}
            />
            <Day value={days[16]}
            onDayClick={() => handleClick(days[16])}
            reminder={reminders[`${current}-${days[16]}`]}
            />
            <Day value={days[17]}
            onDayClick={() => handleClick(days[17])}
            reminder={reminders[`${current}-${days[17]}`]}
            />
            <Day value={days[18]}
            onDayClick={() => handleClick(days[18])}
            reminder={reminders[`${current}-${days[18]}`]}
            />
            <Day value={days[19]}
            onDayClick={() => handleClick(days[19])}
            reminder={reminders[`${current}-${days[19]}`]}
            />
            <Day value={days[20]}
            onDayClick={() => handleClick(days[20])}
            reminder={reminders[`${current}-${days[20]}`]}
            />
        </div>
        <div className="week">
        <Day value={days[21]}
            onDayClick={() => handleClick(days[21])}
            reminder={reminders[`${current}-${days[21]}`]}
            />
            <Day value={days[22]}
            onDayClick={() => handleClick(days[22])}
            reminder={reminders[`${current}-${days[22]}`]}
            />
            <Day value={days[23]}
            onDayClick={() => handleClick(days[23])}
            reminder={reminders[`${current}-${days[23]}`]}
            />
            <Day value={days[24]}
            onDayClick={() => handleClick(days[24])}
            reminder={reminders[`${current}-${days[24]}`]}
            />
            <Day value={days[25]}
            onDayClick={() => handleClick(days[25])}
            reminder={reminders[`${current}-${days[25]}`]}
            />
            <Day value={days[26]}
            onDayClick={() => handleClick(days[26])}
            reminder={reminders[`${current}-${days[26]}`]}
            />
            <Day value={days[27]}
            onDayClick={() => handleClick(days[27])}
            reminder={reminders[`${current}-${days[27]}`]}
            />
        </div>
        <div className="week">
        <Day value={days[28]}
            onDayClick={() => handleClick(days[28])}
            reminder={reminders[`${current}-${days[28]}`]}
            />
            <Day value={days[29]}
            onDayClick={() => handleClick(days[29])}
            reminder={reminders[`${current}-${days[29]}`]}
            />
            <Day value={days[30]}
            onDayClick={() => handleClick(days[30])}
            reminder={reminders[`${current}-${days[30]}`]}
            />
            <Day value={days[31]}
            onDayClick={() => handleClick(days[31])}
            reminder={reminders[`${current}-${days[31]}`]}
            />
            <Day value={days[32]}
            onDayClick={() => handleClick(days[32])}
            reminder={reminders[`${current}-${days[32]}`]}
            />
            <Day value={days[33]}
            onDayClick={() => handleClick(days[33])}
            reminder={reminders[`${current}-${days[33]}`]}
            />
            <Day value={days[34]}
            onDayClick={() => handleClick(days[34])}
            reminder={reminders[`${current}-${days[34]}`]}
            />
        </div>
        {days.length>35 && <div className="week">
            <Day value={days[35]}
            onDayClick={() => handleClick(days[35])}
            reminder={reminders[`${current}-${days[35]}`]}
            />
            <Day value={days[36]}
            onDayClick={() => handleClick(days[36])}
            reminder={reminders[`${current}-${days[36]}`]}
            />
            <Day value={days[37]}
            onDayClick={() => handleClick(days[37])}
            reminder={reminders[`${current}-${days[37]}`]}
            />
            <Day value={days[38]}
            onDayClick={() => handleClick(days[38])}
            reminder={reminders[`${current}-${days[38]}`]}
            />
            <Day value={days[39]}
            onDayClick={() => handleClick(days[39])}
            reminder={reminders[`${current}-${days[39]}`]}
            />
            <Day value={days[40]}
            onDayClick={() => handleClick(days[40])}
            reminder={reminders[`${current}-${days[40]}`]}
            />
            <Day value={days[41]}
            onDayClick={() => handleClick(days[41])}
            reminder={reminders[`${current}-${days[41]}`]}
            />
        </div>}
        </div>
        </>
    )
}

export default Calander