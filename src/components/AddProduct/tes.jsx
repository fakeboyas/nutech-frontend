import React, { useState } from "react";
import { addProduct } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function AddProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    nama_barang: "",
    harga_beli: 0,
    harga_jual: 0,
    stok: 0,
    foto_barang: {
      data: "",
      type: "",
    },
  });
  const handleChangeUpload = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefaul();
    dispatch(addProduct(formData, history));
  };
  console.log(formData);
  return (
    <div
      className="modal fade"
      id="addProduct"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" onSubmit={handleSubmit}>
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title text-center">Tambah Barang</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column text-left">
              <div className="form-group">
                <label>Nama Barang</label>
                <input
                  type="text"
                  name="nama_barang"
                  onChange={handleChangeUpload}
                  className="form-control"
                  value={formData.nama_barang}
                  placeholder="Nama Barang"
                />
              </div>
              <div className="form-group">
                <label>Harga Beli (Dalam Rupiah)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Harga Beli"
                  min="0"
                  value={formData.harga_beli}
                  onChange={handleChangeUpload}
                  name="harga_beli"
                />
              </div>
              <div className="form-group">
                <label>Harga Jual (Dalam Rupiah)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Harga Jual"
                  min="0"
                  value={formData.harga_jual}
                  onChange={handleChangeUpload}
                  name="harga_jual"
                />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stok Barang"
                  min="0"
                  //   value={props.formData.stok}
                  onChange={handleChangeUpload}
                  name="stok"
                />
              </div>
              <div className="file has-name">
                <label>Upload Foto</label>
                <br />
                <label className="file-label">
                  <input className="file-input" type="file" name="photo" />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="btn btn-primary"
            >
              Tambah
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
