import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DateCard from "../../components/DateCard";
import Layout from "../../components/Layout";
import Page from '../../components/Page'
import SideBar from '../../components/SideBar'
import StatsCard from "../../components/StatsCard";
import WebCard from "../../components/WebCard";
import {Patient} from '../../utils/constants'

export default function Overview() {


    const [data, setData] = useState([])

    useEffect(()=>{

        axios.get('../api/demo/patients').then(response => {
            setData(response.data)
        }).catch(e => {
            console.log(e);
        })
       
    },[data])

    return (        
        <Page>
            <SideBar/>
            <Layout title={"Overview"}>

                <div className="flex justify-between">
                    <StatsCard title={"Patients"} increase={"5% increase"} statistic={"20%"} />
                    <StatsCard title={"Invoices"} increase={"10% increase"} statistic={"20%"} />
                    <StatsCard title={"Appintments"} increase={"5% increase"} statistic={"20%"} />
                    <StatsCard title={"Blogs"} increase={"1% decrease"} statistic={"20%"} />
                </div>

                <div className="flex h-full justify-between">
                    <DateCard/>
                    <div className="rounded p-4 shadow-md w-1/2 space-y-4">
                        <h1 className="text-2xl text-purple-700">New Patients</h1>
                        <DataTable
                            data={data}
                            columns={Patient}
                            fixedHeader 
                            responsive/>
                    </div>
                    <div className="flex flex-col justify-around space-y-4 items-center ">
                        <StatsCard title={"Total Earnings"} increase={"7% decrease"} statistic={"R2000"} />
                        <StatsCard title={"Page Visits"} increase={"5% increase"} statistic={"200"} />
                        <WebCard destination={"https://www.betteryourhealth.co.za/morden"} />
                    </div>
                    
                </div>

            </Layout> 
        </Page>
               
    );
}
