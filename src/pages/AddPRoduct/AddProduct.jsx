import React, { useState } from "react";
import styled from "styled-components";
import { addProduct } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Convert } from "mongo-image-converter";
import Swal from "sweetalert2";

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
    foto_barang: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.nama_produk === "" ||
      formData.harga_beli === 0 ||
      formData.harga_jual === 0 ||
      formData.stok === 0 ||
      formData.foto_barang === ""
    ) {
      Swal.fire({
        title: "Form Tidak Boleh Kosong",
        text: "",
        icon: "error",
      });
    } else {
      dispatch(addProduct(formData, history));
    }
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
          <div className="">
            <label>Upload Foto</label>
            <br />
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                tytle=""
                accept="image/jpeg, image/png"
                name="image"
                onChange={async (event) => {
                  if (event.target.files[0].size > 100000) {
                    Swal.fire({
                      title: "File tidak boleh lebih dari 100kb",
                      text: "",
                      icon: "error",
                    });
                    event.target.value = null;
                  } else {
                    setFormData({
                      ...formData,
                      foto_barang: await Convert(event.target.files[0]),
                    });
                  }
                }}
              />
            </label>
          </div>
        </FormGroup>

        <button className="btn btn-primary btn-block">Tambah</button>
      </AddWrapper>
    </div>
  );
}

export default AddProduct;
