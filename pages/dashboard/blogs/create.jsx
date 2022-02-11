import { useEffect, useRef, useState } from "react";
import Layout from "../../../components/Layout";
import Page from '../../../components/Page'
import SideBar from '../../../components/SideBar'
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(
    () => import("jodit-react"),
    {
        ssr: false
    }
)

export default function Invoices() {

    const editor = useRef(null);
    const [editorContent, setEditorContent] = useState();
    const [title,setTitle] = useState()
    const [subTitle, setSubTitle] = useState()

    let content = ""

    const config = {
        readonly: false,
        height: 500
    };
    const handleUpdate = (ec) => {
        setEditorContent(ec);
    };

    function update(input) {
        content = input
    }

    function save() {

        let params = {title,subTitle,content}

        console.log(params);

    }

    return (
        <Page>
            <SideBar />
            <Layout className="space-y-2">
                <h1 className="text-4xl">Create Blog</h1>
                <div className="space-y-4">
                    <div className="flex space-x-4 justify-start items-end">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="title">Title</label>
                            <input required onChange={(e) => { setTitle(e.target.value) }} className="bg-purple-200 focus:bg-purple-300 rounded px-4 py-2 focus:border-0 focus:outline-none focus:ring-1 focus:ring-purple-700 w-96" type="text" id="title" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="sub-title">Subtitle</label>
                            <input required onChange={(e) => { setSubTitle(e.target.value) }} className="bg-purple-200 focus:bg-purple-300 rounded px-4 py-2 focus:border-0 focus:outline-none focus:ring-1 focus:ring-purple-700 w-96" type="text" id="sub-title" />
                        </div>

                        <button type="button" className="bg-purple-700 text-white w-fit h-fit py-2 px-5 rounded hover:bg-purple-500" onClick={save}>Save</button>


                    </div>
                    <JoditEditor
                        ref={editor}
                        value={editorContent}
                        config={config}
                        onBlur={handleUpdate}
                        onChange={update}
                    />
                </div>
               
                
            </Layout>
        </Page>
    );
}
