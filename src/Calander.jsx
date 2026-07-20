import { useEffect, useState } from 'react'
import './index.css'
import './calander.css'

function Day({value, onDayClick, hasReminder}) {
    return (
    <div className={`day ${hasReminder ? "reminder" : ""}`} 
    onClick={onDayClick}>{value}
    {hasReminder && <span>Reminder</span>}
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
            hasReminder={!!reminders[`${current}-${days[0]}`]}
            />
            <Day value={days[1]}
            onDayClick={() => handleClick(days[1])}
            hasReminder={!!reminders[`${current}-${days[1]}`]}
            />
            <Day value={days[2]}
            onDayClick={() => handleClick(days[2])}
            hasReminder={!!reminders[`${current}-${days[2]}`]}
            />
            <Day value={days[3]}
            onDayClick={() => handleClick(days[3])}
            hasReminder={!!reminders[`${current}-${days[3]}`]}
            />
            <Day value={days[4]}
            onDayClick={() => handleClick(days[4])}
            hasReminder={!!reminders[`${current}-${days[4]}`]}
            />
            <Day value={days[5]}
            onDayClick={() => handleClick(days[5])}
            hasReminder={!!reminders[`${current}-${days[5]}`]}
            />
            <Day value={days[6]}
            onDayClick={() => handleClick(days[6])}
            hasReminder={!!reminders[`${current}-${days[6]}`]}
            />
        </div>
        <div className="week">
            <Day value={days[7]}/>
            <Day value={days[8]}/>
            <Day value={days[9]}/>
            <Day value={days[10]}/>
            <Day value={days[11]}/>
            <Day value={days[12]}/>
            <Day value={days[13]}/>
        </div>
        <div className="week">
            <Day value={days[14]}/>
            <Day value={days[15]}/>
            <Day value={days[16]}/>
            <Day value={days[17]}/>
            <Day value={days[18]}/>
            <Day value={days[19]}/>
            <Day value={days[20]}/>
        </div>
        <div className="week">
            <Day value={days[21]}/>
            <Day value={days[22]}/>
            <Day value={days[23]}/>
            <Day value={days[24]}/>
            <Day value={days[25]}/>
            <Day value={days[26]}/>
            <Day value={days[27]}/>
        </div>
        <div className="week">
            <Day value={days[28]}/>
            <Day value={days[29]}/>
            <Day value={days[30]}/>
            <Day value={days[31]}/>
            <Day value={days[32]}/>
            <Day value={days[33]}/>
            <Day value={days[34]}/>
        </div>
        {days.length>35 && <div className="week">
            <Day value={days[35]}/>
            <Day value={days[36]}/>
            <Day value={days[37]}/>
            <Day value={days[38]}/>
            <Day value={days[39]}/>
            <Day value={days[40]}/>
            <Day value={days[41]}/>
        </div>}
        </div>
        </>
    )
}

export default Calander