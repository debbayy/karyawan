import React from "react";

const Landing = () => {
  return (
    <>
      <div>
        <div
          className="d-flex bg-light align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="d-flex row align-items-center justify-content-center">
            <h1 className="d-flex align-items-center justify-content-center">
              Biodata Karyawan
            </h1>
            <form className="w-50 bg-white rounded m-5 p-5 shadow">
              <div className="form-group ">
                <label for="username">Nama Karyawan</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Input nama"
                />
              </div>
              <div className="form-group py-3 ">
                <label for="tempatLahir">Tempat Lahir</label>
                <input
                  type="text"
                  className="form-control"
                  id="tempatLahir"
                  placeholder="Input Tempat Lahir"
                />
              </div>
              <div className="form-group  ">
                <label for="TglLahir">Tgl Lahir</label>
                <input type="date" className="form-control" id="TglLahir" />
              </div>
              <div className="d-flex  justify-content-center">
                <button type="submit" className="mt-3 btn btn-primary">
                  Submit
                </button>
                <button type="edit" className="mt-3 mx-3 btn btn-warning">
                  Edit
                </button>
                <button type="delete" className="mt-3 btn btn-danger">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
