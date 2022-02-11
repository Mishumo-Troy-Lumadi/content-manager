import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Page from '../../components/Page'
import SideBar from '../../components/SideBar'
import axios from "axios";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)


export default function Schedule() {

    const [data, setData] = useState([])
    
    useEffect(()=>{
        axios.get('../api/demo/appointments').then(response => {
            setData(response.data)
        }).catch(e => {
            console.log(e);
        })
    },[])
   
    return (
        <Page>
            <SideBar />
            <Layout title={"Schedule"}>
                <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 1000, fill:"white" }}
                    events = {data}
                    defaultView={"month"}
                    views={['month','agenda']}
                />
            </Layout>
        </Page>
    );
}
