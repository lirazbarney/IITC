import "./Pages-btns.css"

import { Link } from "react-router-dom";

export default function PagesBtns({ currentPage }) {

    return (<>
        <Link to={"/?page=1"}><button className={(currentPage === 1) ? "current-page page-btn" : "page-btn"}>1</button></Link>
        <span className={(currentPage > 2) ? "" : "hidden"}>...</span>
        <Link to={`/?page=${currentPage - 1}`}><button className={(currentPage > 2) ? "page-btn" : "hidden"}>{currentPage - 1}</button></Link>
        <button className={((currentPage === 20) || (currentPage === 1)) ? "hidden" : "current-page page-btn"}>{currentPage}</button>
        <Link to={`/?page=${currentPage + 1}`}><button className={(currentPage < 19) ? "page-btn" : "hidden"}>{currentPage + 1}</button></Link>
        <span className={(currentPage < 19) ? "" : "hidden"}>...</span>
        <Link to={"/?page=20"}><button className={(currentPage === 20) ? "current-page page-btn" : "page-btn"}>20</button></Link>
    </>)
}