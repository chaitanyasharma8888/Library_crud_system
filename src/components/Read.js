import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {

    const [data, setData] = useState([]);
    const [tabledark, setTabledark] = useState("");



    const getData = () => {
        axios.get("https://6409aead6ecd4f9e18b7e8b6.mockapi.io/crud_github").then((response) => {
            // console.log(response)
            console.log(response.data)
            setData(response.data);

        }).catch((error) => {
            console.log(error)

        })
    }

    const handleDelete = (id) => {
        axios.delete(`https://6409aead6ecd4f9e18b7e8b6.mockapi.io/crud_github/${id}`).then((resdelete) => {
            console.log("delete data", resdelete.data);//it only shows delete data
            getData();


        })
    }

    const setDataToStorage = (id, name, mail) => {
        localStorage.setItem("SerialID", id);
        localStorage.setItem("username", name);
        localStorage.setItem("usermail", mail);

    }

    useEffect(() => {
        getData();
    }, [])



    return (<>
        <div className="text-bg-secondary p-3 text-center"><h5>Library Registration Form</h5></div>
        <div class="text-bg-light p-3">
            <div className="d-flex justify-content-between m-2">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={() => {
                        if (tabledark === "table-dark table-bordered table-striped table-hover") {
                            setTabledark("");
                        }
                        else {
                            setTabledark("table-dark table-bordered table-striped table-hover")
                        }
                    }} />
                    <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                <div class="text-bg-info p-3"><h3>Display Users Data</h3></div>


                <Link to="/">
                    <button className="btn btn-success">Create Data</button>
                </Link>
            </div>

            <br />
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">Serial No.</th>
                        <th scope="col">User Full Name</th>
                        <th scope="col">User Mail</th>
                        <th scope="col">Edit user Details</th>
                        <th scope="col">Delete user Details</th>


                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (<>
                            <tbody>
                                <tr >
                                    <td>{eachData.id}</td>
                                    <td>{eachData.e_name}</td>
                                    <td>{eachData.e_email}</td>

                                    <td><Link to="/update">
                                        <button
                                            className="btn btn-success"
                                            onClick={() => setDataToStorage(eachData.id, eachData.e_name, eachData.e_email)}
                                        >Edit</button>
                                    </Link></td>

                                    <td><button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(eachData.id)}
                                    >Delete</button></td>


                                </tr>
                            </tbody>
                        </>
                        )
                    })}
            </table>
        </div>
        <div className="text-bg-secondary p-3 text-center"><h5>Library Registration Form</h5></div>



    </>)

}

export default Read;