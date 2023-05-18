import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Update = () => {
    const navigate = useNavigate();

    const [getid, setGetId] = useState(0);
    const [getname, setGetName] = useState("");
    const [getemail, setGetEmail] = useState("");

    useEffect(() => {
        setGetId(localStorage.getItem("SerialID"));
        setGetName(localStorage.getItem("username"));
        setGetEmail(localStorage.getItem("usermail"));
    }, [])

    const clickHandler = (e) => {
        e.preventDefault();
        axios.put(`https://6409aead6ecd4f9e18b7e8b6.mockapi.io/crud_github/${getid}`, {
            e_name: getname,
            e_email: getemail,
        }).then((responseupdate) => {
            console.log(responseupdate.data);
            navigate("/read");
        }).catch((error) => {
            console.log(error)
        })
    }

    return (<>
        <div className="text-bg-secondary p-3 text-center"><h5>Library Registration Form</h5></div>
        <div class="text-bg-light p-3">
            <div className="d-flex justify-content-between m-3">
                <div class="text-bg-info p-3"><h3>Update User Details</h3></div>

                <Link to="/read">
                    <button className="btn btn-success">Show Data</button>
                </Link>
            </div>

            <form>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        value={getname}
                        onChange={(e) => setGetName(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        value={getemail}
                        onChange={(e) => setGetEmail(e.target.value)}
                    />

                </div>
                <button type="submit"
                    className="btn btn-primary"
                    onClick={clickHandler}
                >Update Details</button>



            </form>
        </div>
        <div className="text-bg-secondary p-3 text-center"><h5>Library Registration Form</h5></div>


    </>)


}


export default Update;