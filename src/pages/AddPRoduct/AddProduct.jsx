import React, { useState } from "react";
import styled from "styled-components";
import { addProduct } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const AddWrapper = styled.form`
  width: 600px;
  max-width: 100%;
  padding: 50px;
  margin: auto;
  margin-top: 200px;
  height: 100%;
  margin-bottom: 100px;
  .container1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

function AddProduct() {
  const [formData, setFormData] = useState({
    nama_produk: "",
    harga_beli: 0,
    harga_jual: 0,
    stok: 0,
    foto_barang: {
      data: "",
      type: "",
    },
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(addProduct(formData, history));
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log(formData);

  return (
    <div>
      <AddWrapper
        onSubmit={handleSubmit}
        className="shadow-lg  bg-white rounded"
      >
        <h2 className="text-center">Tambah Barang</h2>

        <FormGroup style={{ textAlign: "left" }}>
          <Label>Nama Barang :</Label>

          <Input
            type="text"
            name="nama_produk"
            id="nama_produk"
            onChange={handleChange}
            value={formData.nama_produk}
            placeholder="Masukan nama lengkap"
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Harga Beli :</Label>
          <Input
            type="number"
            min="0"
            name="harga_beli"
            id="harga_barang"
            onChange={handleChange}
            value={formData.harga_beli}
            placeholder="Masukan nama lengkap"
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Harga Jual :</Label>
          <Input
            type="number"
            min="0"
            name="harga_jual"
            id="harga_jual"
            onChange={handleChange}
            value={formData.harga_jual}
            placeholder="Masukan nama lengkap"
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Stok :</Label>
          <Input
            type="number"
            min="0"
            name="stok"
            id="stok"
            onChange={handleChange}
            value={formData.stok}
            placeholder="Masukan nama lengkap"
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <div className="file has-name">
            <label>Upload Foto</label>
            <br />
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="foto_barang"
                onChange={handleChange}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
              </span>
            </label>
          </div>
        </FormGroup>

        <button className="btn btn-primary btn-block">Tambah</button>
      </AddWrapper>
    </div>
  );
}

export default AddProduct;
