import React, { useEffect } from "react";
import styled from "styled-components";
import { getProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decode } from "node-encoder";

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

function CardProduct(namaProduct) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.product);

  useEffect(() => {
    // if (namaProduct !== "") {
    //   // dispatch(searchSpeakerByName(namaProduct));
    //   console.log("aku");
    // } else {
    dispatch(getProduct());
    // }
    //eslint-disable-next-line
  }, [namaProduct]);
  return (
    <>
      {data !== null ? (
        data.map((item) => {
          return (
            <Card key={item._id}>
              <CardImg>
                <img src={item.foto_barang} alt="" />
              </CardImg>
              <CardBody>
                <div>
                  <h4 style={{ textAlign: "center" }}>{item.nama_produk}</h4>
                </div>
                <div>
                  <p>Harga Beli : {item.harga_beli}</p>
                </div>
                <div>
                  <p>Harga Jual : {item.harga_jual}</p>
                </div>
                <div>
                  <p>Stok : {item.stok}</p>
                </div>
                <div>
                  <button className="btn btn-danger rounded-pill font-weight-bold">
                    Hapus Barang
                  </button>
                </div>
              </CardBody>
            </Card>
          );
        })
      ) : (
        <>
          <div className="container-fluid">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>{" "}
          </div>
        </>
      )}
    </>
  );
}

export default CardProduct;
