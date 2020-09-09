import { GET_PRODUCT } from "./types";

export const getHouse = () => async (dispatch) => {
  let url = "localhost:6007/produk";

  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();

  dispatch({
    type: GET_PRODUCT,
    payload: results.data,
  });
};

export const addProduct = (formData, history) => async (dispatch) => {
  try {
    const url = "localhost:6007/produk/upload";

    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(url, options);
    // eslint-disable-next-line
    const result = await response.json();
    history.push("/produk");
  } catch (error) {
    console.log(error);
  }
};
