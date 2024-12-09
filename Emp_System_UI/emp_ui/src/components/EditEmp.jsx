import React, { useEffect, useState } from "react";
import empService from "../service/emp.service";
import { useNavigate, useParams } from "react-router-dom";

const EditEmp = () => {
  const [emp, setEmp] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    salary: "",
  });
  const [msg, setMsg] = useState("");

  const data = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    empService
      .getEmpById(data.id)
      .then((res) => {
        setEmp(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmp({ ...emp, [e.target.name]: value });
  };

  const updateEmp = (e) => {
    e.preventDefault();
    empService
      .updateEmp(emp.id, emp)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center fs-3">
                Edit Emp
                {msg && <p className="text-success">{msg}</p>}
              </div>
              <div className="card-body">
                <form onSubmit={(e) => updateEmp(e)}>
                  <div className="mb-3">
                    <label>Enter First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      value={emp.firstname}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      value={emp.lastname}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Email </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={emp.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Address </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={emp.address}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Salary </label>
                    <input
                      type="number"
                      className="form-control"
                      name="salary"
                      value={emp.salary}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="text-center">
                    <button className="btn btn-success">Submit</button>
                    <input
                      type="Reset"
                      className="btn btn-danger ms-2"
                      value="Reset"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmp;
