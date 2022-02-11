export default function ({ title = "", increase ="",statistic =""}){
    
    let color = ""

    if(increase.includes("increase")){
        color = "text-green-500"
    }else{

        let a = statistic.replace("R","")
        a = a.replace("%","")

        let b =  Number(a)

        let c = increase.replace("increase","")
        c.replace("decrease","")
        c.replace("%","")

        let d = Number(c)

        if(b > (b*(d/100))){
            color = "text-yellow-500"
        }else{
            color = "text-red-500"
        }
    }
    
    return(
        <div className="flex justify-between cursor-default items-center w-72 bg-white rounded-lg space-x-2 shadow-md p-4 text-slate-600">
            <div className="flex flex-col space-y-10">
                <h1 className="text-2xl text-purple-700">{title}</h1>
                <p className="text-xs">{increase} from last month</p>
            </div>
            <h1 className={`text-3xl ${color}`} >{statistic}</h1>
        </div>
    )
}