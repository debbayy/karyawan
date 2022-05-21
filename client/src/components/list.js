import React from "react";

const List = () => {
  return (
    <>
      <div className="" style={{ height: "100vh" }}>
        <h1 className="" style={{}}>
          List Data Karyawan
        </h1>
        <div
          className="d-flex mx-auto p-2 justify-content-center flex-column bg-info w-50 scrooll "
          style={{
            height: "70vh",
            overflow: "scroll",
          }}
        >
          <div className="bg-danger">
            <h2>Deby Trisandi</h2>
            <p>Balai tengah </p>
            <p>11 april 1995</p>
          </div>
          <div className="bg-warning my-2">
            <h2>Deby Trisandi</h2>
            <p>Balai tengah </p>
            <p>11 april 1995</p>
          </div>
          <div className="bg-danger">
            <h2>Deby Trisandi</h2>
            <p>Balai tengah </p>
            <p>11 april 1995</p>
          </div>
          <div className="bg-warning my-2">
            <h2>Deby Trisandi</h2>
            <p>Balai tengah </p>
            <p>11 april 1995</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
