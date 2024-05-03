import React, { useState, useEffect } from 'react'

export default function Card() {
    const [user, setUser, akash] = React.useState([])
    const fetchData = () => {
        fetch("https://randomuser.me/api/?nat=us&results=25&page=1")
            .then((response) => {
                return response.json();
            }).then((data) => {
                // console.log(data);
                let akash = data.results
                setUser(akash)


            })
    }

    useEffect(() => {
        fetchData();

    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Affordmed</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Events</a>
                            </li>
                            
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Carrer</a>
                            </li>
                
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contacts</a>
                            </li>
                            </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div >
</nav >


        <div className="clearfix">
            <div className="row">
                {user.map(data => (
                    <div className="clo-md animated fadeIn" key={data.id.value}>
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">

                                    <img src={data.picture.large} className='card-img-top' alt="" /></div>
                                <h5 className="card-title">
                                    {data.name.first + " " + data.name.last}
                                </h5>
                                <p className="card-text">
                                    {data.location.city +
                                        "," +
                                        data.location.state
                                    }
                                    <br />
                                    <span className='phone'>{data.phone}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
            </>
    )
}
