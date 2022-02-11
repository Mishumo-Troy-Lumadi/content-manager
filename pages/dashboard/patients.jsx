import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Layout from "../../components/Layout";
import Page from '../../components/Page'
import SideBar from '../../components/SideBar'

export default function Patients() {

    const [data, setData] = useState([])

    let columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "First Names",
            selector: row => row.firstnames,
            sortable: true
        },
        {
            name: "Last Name",
            selector: row => row.lastname,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email
        },
    ]

    useEffect(() => {

        axios.get('../api/demo/patients').then(response => {
            setData(response.data)
        }).catch(e => {
            console.log(e);
        })

    }, [])

    return (
        <Page>
            <SideBar />
            <Layout title={"Patients"}>
                <DataTable
                    data={data}
                    columns={columns}
                    fixedHeader/>
            </Layout>    
        </Page>

    );
}
