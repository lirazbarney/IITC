import { useParams } from "react-router-dom";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Error.css"

export default function () {

    const params = useParams("errCode");

    let msg;
    switch (params.errCode) {
        case "404":
            msg = "404.. probably you tried to search a pokemon that doesn't exist";
            break;
        case "500":
            msg = "server error. probably from the api.";
            break
        default:
            msg = "some unknown error"
    }



    return (<>
        <HeaderNav />
        <span>{msg}</span>
    </>)

};
