import { useEffect, useState } from "react";
import $ from 'jquery';



const Crud = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        salery: ''
    })

    const [record, setRecord] = useState([]);
    const [editId, setEditId] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value
        })
    }

    const handleSubmit = () => {
        if (editId) {
            let ans = record.map((item) => {
                if (item.id == editId) {
                    return {
                        ...input,
                        name: input.name,
                        email: input.email,
                        password: input.password,
                        city: input.city,
                        salery: input.salery
                    }
                }
                return item;
            })
            setRecord(ans);
            localStorage.setItem('crud', JSON.stringify(ans));
            setEditId("");
        } else {

            let obj = {
                id: Math.floor(Math.random() * 10000),
                name: input.name,
                email: input.email,
                password: input.password,
                city: input.city,
                salery: input.salery

            }
            let data = [...record, obj];
            setRecord(data);
            localStorage.setItem('crud', JSON.stringify(data));
            // alert("Record Succesfully Insert");

            setInput({
                name: '',
                email: '',
                password: '',
                city: '',
                salery: ''
            })
        }

    }
    const deleteData = (id) => {
        let ans = record.filter((item) => {
            return item.id !== id;
        })
        setRecord(ans);
        localStorage.setItem('crud', JSON.stringify(ans));
        alert("Delete Succesfully");
    }
    const editData = (id) => {
        let ans = record.filter((item) => {
            return item.id === id;
        })
        setInput(ans[0]);
        setEditId(id)

    }
    useEffect(() => {
        let allrecord = JSON.parse(localStorage.getItem('crud'));
        if (allrecord === null) {
            setRecord([]);
        } else {
            setRecord(allrecord);
        }
    }, []);


    return (
        <>
            <center>
                <div className="modal-container">
                    <div className="modal" id="modal" data-testid="modal">
                        <div className="modal-content">
                            <p>Logged in as :</p>
                            <p className="logged-user" id="logged-user">example@gmail.com</p>
                        </div>
                        <button type="button" id="modal-close" className="modal-close">OK</button>
                    </div>
                </div>

                <div className="toast" id="toast" data-testid="toast">
                    <i className="fas fa-exclamation-circle"></i>
                    <p className="toast-text">Oops, Wrong email or password!</p>
                    <i className="fas fa-close" id="close"></i>
                </div>

                <div className="container">
                    <form className="form" id="form">
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={input.name} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>

                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="email@email.com" name="email" onChange={handleChange} value={input.email} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>

                        <div className="form-control">
                            <label for="password">Password</label>
                            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={input.phone} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>

                        <div className="form-control">
                            <label for="city">City</label>
                            <input type="text" placeholder="City" name="city" onChange={handleChange} value={input.city} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>

                        </div>

                        <div className="form-control">
                            <label for="salery">Salery</label>
                            <input type="text" placeholder="Salery" name="salery" onChange={handleChange} value={input.salery} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>

                        </div>
                        <tr>
                            <td></td>
                            <td>
                                {
                                    (editId) ? (<input type="button" value="Edit" onClick={() => handleSubmit()} style={{ backgroundColor: 'DimGray', color: 'white', padding: '10px 25px', fontSize: '18px', border: 'none' }} />) : <input type="button" value="Submit" onClick={() => handleSubmit()}
                                        style={{ backgroundColor: 'SlateGray', color: 'white', padding: '10px 25px', fontSize: '18px', border: 'none' }} />
                                }
                            </td>
                        </tr>
                    </form>
                </div>
                {/* <table border={2} cellPadding={10}>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" onChange={handleChange} value={input.name} /></td>
                    </tr>
                    <tr>
                        <td>phone</td>
                        <td><input type="text" name="phone" onChange={handleChange} value={input.phone} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            {
                                (editId) ? (<input type="button" value="Edit" onClick={() => handleSubmit()} />) : <input type="button" value="Submit" onClick={() => handleSubmit()} />
                            }
                        </td>
                    </tr>
                </table> */}
                <br />
                <br />
                <table border={1} >
                    <div className="container">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2>Manage <b>Employees</b></h2>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>City</th>
                                        <th>Salery</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        record.map((item) => {
                                            const { id, name, email, password, city, salery } = item
                                            return (
                                                <tr key={id}>
                                                    <td>{id}</td>
                                                    <td>{name}</td>
                                                    <td>{email}</td>
                                                    <td>{password}</td>
                                                    <td>{city}</td>
                                                    <td>{salery}</td>

                                                    <td>
                                                        <button onClick={() => deleteData(id)} style={{ backgroundColor: 'lime', border: 'none', padding: '5px', margin: '5px', color: 'white' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => editData(id)} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>




                </table>
            </center>
        </>
    )
}
export default Crud;