import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ({destination,icon,title}){

    return (
        <Link href={destination} className="cursor-pointer">
            <div className="flex flex-row justify-start items-center px-4 py-2 space-x-2 rounded-md hover:bg-white hover:text-purple-700">
                <FontAwesomeIcon width={25} height={25} icon={icon} />
                <h1 className="text-md font-normal">{title}</h1>
            </div>
        </Link>
    )

}