import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { TextField, Button, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const NewSharyi = (props) => {
  const notify = () => toast("data edit ");
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const edit = id ? true : false;

  const [product, setProduct] = useState({
    name: "",
    price: "",
    color: "",
    department: "",
    description: "",
  });

  const { name, price, color, department, description } = product;
  React.useEffect(() => {
    if (edit) {
      axios
        .get("https://usman-recipes.herokuapp.com/api/products/" + id)

        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      <h1 style={{ color: "black", marginTop: "55px", marginLeft: "60px" }}>
        {props.heading}
      </h1>
      <div className=" mt-3 container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
            placeholder="Enter Quotes"
          />
          <TextField
            id="outlined-basic"
            label="Price"
            value={price}
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
            placeholder="Enter Author"
          />
          <TextField
            id="outlined-basic"
            label="Color"
            value={color}
            onChange={(e) => {
              setProduct({ ...product, color: e.target.value });
            }}
            placeholder="Color"
          />
          <TextField
            id="outlined-basic"
            label="Description"
            value={description}
            onChange={(e) => {
              setProduct({ ...product, description: e.target.value });
            }}
            placeholder="Description"
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            if (!edit) {
              axios
                .post(
                  "https://usman-recipes.herokuapp.com/api/products",
                  product
                )
                .then((res) => {
                  console.log(res.data);
                });
            } else {
              axios
                .put(
                  "https://usman-recipes.herokuapp.com/api/products/" + id,
                  product
                )
                .then((res) => {
                  console.log("data has been edited" + res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
              navigate("/Sharyi");
            }
          }}
        >
          {edit ? "Edit" : "Submit Data"}
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};
export default NewSharyi;
