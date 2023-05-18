import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post("https://6409aead6ecd4f9e18b7e8b6.mockapi.io/crud_github", {
            e_name: name,
            e_email: email,

        }).then((response) => {
            history("/read");
            console.log(response.data);

        }).catch((error) => {
            console.log(error);

        })


    }

    return (<>
        <div className="text-bg-secondary p-3 text-center"><h5>Library Registration Form</h5></div>


        <div className="text-bg-light p-3">
            <div className="text-bg-light p-3">
                <div className="d-flex justify-content-between m-3">
                    <div className="text-bg-info p-3"><h3>Create Users Data</h3></div>

                    <Link to="/read">
                        <button className="btn btn-success">Show Data</button>
                    </Link>
                </div>
                <form>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <button type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >Create New User Data</button>

                </form>
            </div>
        </div>
        <div className="text-bg-secondary p-3 text-center"><h5>Library Registration Form</h5></div>








    </>)

}

export default Create;