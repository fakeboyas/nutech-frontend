import React from "react";
import logo from "../../assets/images/new_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="navbar m-auto navbar-expand-lg fixed-top m-auto"
      style={{
        backgroundColor: "#d7d7d7",
      }}
    >
      <div className="navbar-brand" style={{ width: "30%" }}>
        <img src={logo} alt="" style={{ width: "px", height: "80px" }} />{" "}
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          className="navbar-toggler-icon text-white"
          style={{ padding: "5px" }}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav w-50 nav-menu text-dark">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <p className="mr-5 font-weight-bold">Home</p>
          </Link>

          <Link style={{ textDecoration: "none", color: "black" }} to="produk">
            <p style={{}} className="mr-5 font-weight-bold">
              Produk
            </p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/tambah-barang"
          >
            <p style={{}} className="mr-5 font-weight-bold">
              Tambah Produk
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
