import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ({ destination, icon, title, onClick }) {

    const constant = "absolute top-1 left-16 bg-slate-600 text-white rounded p-1 z-50"

    const [style, setStyle] = useState(`hidden`)
    const tooltip = useRef(null)

    function showToolTip() {
        if (tooltip) {
            if (title) {
                setStyle(`${constant} block`)
            }
        }
    }

    function hideToolTip() {
        if (tooltip) {
            if (title) {
                setStyle(`${constant} hidden`)
            }
        }
    }

    function execute() {
        onClick()
    }

    function showError() {
        alert(`The ${title} feature is not active or is currently under maintanance contact the developer at tmlumadi@gmail.com for more help.`)
    }

    let component = (
        <div onClick={showError} onMouseEnter={showToolTip} onMouseLeave={hideToolTip} className="relative rounded-full bg-purple-700 text-purple-100 hover:bg-white hover:text-purple-700 p-2 transition-colors duration-500">
            <FontAwesomeIcon icon={faWarning} width={25} height={25} />
            <div ref={tooltip} className={style}>
                <h1>{title}</h1>
            </div>
        </div>
    )

    if (destination) {
        try{
            component = (
                <Link href={destination} className="cursor-pointer">
                    <div onMouseEnter={showToolTip} onMouseLeave={hideToolTip} className="relative rounded-full bg-purple-700 text-purple-100 hover:bg-white hover:text-purple-700 p-2 transition-colors duration-500">
                        <FontAwesomeIcon icon={icon} width={25} height={25} />
                        <div ref={tooltip} className={style}>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </Link>
            )
        }catch(e){
            console.log(e);
        }
       
    } else if(onClick != null) {
        component = (
        <div onClick={execute} className="cursor-pointer">
            <div onMouseEnter={showToolTip} onMouseLeave={hideToolTip} className="relative rounded-full bg-purple-700 text-purple-100 hover:bg-white hover:text-purple-700 p-2 transition-colors duration-500">
                <FontAwesomeIcon icon={icon} width={25} height={25} />
                <div ref={tooltip} className={style}>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
        )
    }

    return component

}