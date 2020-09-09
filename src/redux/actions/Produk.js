import { GET_PRODUCT } from "./types";

import Swal from "sweetalert2";

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

// export const addProduct = (formData, history) => async (dispatch) => {
//   try {
//     const url = "localhost:6007/produk/upload";

//     const options = {
//       method: "POST",
//       body: JSON.stringify(formData),
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const response = await fetch(url, options);
//     // eslint-disable-next-line
//     const result = await response.json();
//     history.push("/produk");
//   } catch (error) {
//     console.log(error);
//   }
// };

export const addProduct = (formData, history) => async () => {
  try {
    const url = "http://localhost:6007/produk/upload";
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

    if (response.status === 200) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        title: "Berhasil",
        icon: "success",
      });

      setTimeout(() => {
        window.history.back();
      }, 3000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Forbidden",
        text: "Ada yang Salah",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Forbidden",
      text: "Ada Yang Salah",
    });
  }
};
