import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const CardImg = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const CardBody = styled.div`
  padding: 10px;
  box-sizing: border-box;
  background: lightgrey;
`;

function CardProduct() {
  return (
    <Card>
      <CardImg>
        <img
          src="https://cf.shopee.co.id/file/a14235f94319b24e4628f4e5675828b4"
          alt=""
        />
      </CardImg>
      <CardBody>
        <div>
          <h4 style={{ textAlign: "center" }}>Kacamata</h4>
        </div>
        <div>
          <p>Harga Beli : Rp. 200.000</p>
        </div>
        <div>
          <p>Harga Jual : Rp. 300.000</p>
        </div>
        <div>
          <p>Stok : 30</p>
        </div>
        <div>
          <button className="btn btn-danger rounded-pill font-weight-bold">
            Hapus Barang
          </button>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardProduct;
