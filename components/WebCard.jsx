import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function({destination}){
    return(
        <Link href={destination}>
            <div className="bg-purple-700 p-10 w-72 space-y-4 text-white flex flex-col justify-center items-center rounded-md shadow-md">
                <FontAwesomeIcon icon={faGlobe} width={500} height={500} />
            </div>
        </Link>
    )
}