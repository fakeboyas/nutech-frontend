import React, { useState } from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";

const Container1 = styled.div`
  display: flex;
  flex-direction: row;1
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
        </SearchWrapper>
      </Container>
      <Container>
        <Container1>
          <CardProduct namaProduct={input} />
        </Container1>
      </Container>
    </div>
  );
}

export default Product;
