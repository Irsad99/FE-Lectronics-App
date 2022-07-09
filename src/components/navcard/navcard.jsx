import React from 'react'

function Navcard() {
    return (
        <>
        <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
                <nav className="nav nav-pills flex-column flex-sm-row">
                <a className="nav-link active" aria-current="page" href="#">Headphone</a>
                <a className="nav-link" href="#">Air Conditioner</a>
                <a className="nav-link" href="#">Television</a>
                <a className="nav-link" href="#">Router</a>
                </nav>
            </div>
            <div className="p-2 flex-fill bd-highlight">
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Navcard