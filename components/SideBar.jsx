import { faCube, faBook, faPieChart, faCalendar, faUsers, faUser, faNewspaper, faSignOut, faCog } from "@fortawesome/free-solid-svg-icons";
import Fab from "./Fab";

export default function SideBar({className}) {

    let style = `flex flex-col justify-between bg-purple-700 text-white rounded-r-lg w-fit h-screen space-y-10 p-4 ${className}`

    return (

        <div className={style}>
            <div>
                <Fab destination={'/dashboard'} icon={faCube} />
            </div>
            <div className="space-y-2">
                <Fab title={"Overview"} destination={'/dashboard'} icon={faBook} />
                <Fab title={"Analytics"}  icon={faPieChart} />
                <Fab title={"Schedule"} destination={'/dashboard/schedule'} icon={faCalendar} />
                <Fab title={"Patients"} destination={'/dashboard/patients'} icon={faUsers} />
                <Fab title={"Invoices"} destination={'/dashboard/invoices'} icon={faBook} />
                <Fab title={"Blogs"}  icon={faNewspaper} />
            </div>
            <div className="space-y-2">
                <Fab title={"Account"}  icon={faUser} />
                <Fab title={"Logout"} icon={faSignOut} />
                <Fab title={"Settings"}  icon={faCog} />
            </div>
        </div>

    )



}