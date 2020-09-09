import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddProduct from "../../components/AddProduct/AddProduct";

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 576px) {
    flex-direction: "column";
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: space-around;
  margin: 40px;
`;

function Product() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div style={{ margin: "100px 0px 100px 0px" }}>
      <Container>
        <SearchWrapper>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Cari berdasarkan Nama Barang"
            aria-label="Search"
            onChange={handleChange}
          />
          <button
            style={{ width: "200px" }}
            type="button"
            className="btn btn-sm btn-primary font-weight-bold rounded-pill"
            data-toggle="modal"
            data-target="#addProduct"
          >
            Tambah Barang
          </button>
        </SearchWrapper>
      </Container>
      <Container>
        <Container1>
          <CardProduct namaProduct={input} />
        </Container1>
      </Container>
      <AddProduct />
    </div>
  );
}

export default Product;
