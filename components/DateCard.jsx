import { useEffect, useState } from "react"

export default function(){
    
    const [date, setDate] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [day, setDay] = useState();

    useEffect(()=>{
        let d = new Date(Date.now()).toDateString().split(' ')

        setDate(d[2])
        setMonth(d[1])
        setYear(d[3])
        setDay(d[0])
    })
    
    return(
        <div className="bg-purple-700 space-y-6 text-white flex flex-col justify-center items-center w-64 rounded-md shadow-md">
            <h1 className="text-7xl font-bold">{date}</h1>
            <p>{day} {month} {year}</p>
        </div>
    )
}