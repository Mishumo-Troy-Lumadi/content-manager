import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Layout from "../../components/Layout";
import Page from '../../components/Page'
import SideBar from '../../components/SideBar'

export default function Invoices() {

    const [data, setData] = useState([])

    let columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Names",
            selector: row => row.user,
            sortable: true
        },
        {
            name: "Amount",
            selector: row => row.amount,
            sortable: true
        },
        {
            name: "Date",
            selector: row => row.date,
            sortable: true
        },
    ]

    useEffect(() => {

        axios.get('../api/demo/invoices').then(response => {
            setData(response.data)
        }).catch(e => {
            console.log(e);
        })

    }, [])

    return (
        <Page>
            <SideBar />
            <Layout title={"Invoices"}>
                <DataTable
                    data={data}
                    columns={columns}
                    fixedHeader />
            </Layout>
        </Page>

    );
}
