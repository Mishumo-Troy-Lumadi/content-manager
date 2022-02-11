import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Page from '../../components/Page'
import SideBar from '../../components/SideBar'

export default function Analytics() {


    const [data, setDate] = useState()

    useEffect(() => {



    }, [data])

    return (
        <Page>
            <SideBar />
            <Layout title={"Analytics"}>
       

            </Layout>
        </Page>

    );
}
