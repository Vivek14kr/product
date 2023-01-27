import React, { useState, useEffect } from "react";
import axios from "axios";

import "./productspage.css"
import Card from "@mui/material/Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [wishlist, setWishList] = useState([])

    const handleWishlist = (prod)=>{

        setWishList([...wishlist, prod])

    }

    useEffect(() => {
      // Fetch products from API
      axios
        .get(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
        )
        .then((res) => {
          setProducts(res.data.data);
          setPageCount(Math.ceil(res.data.data.length / 12));
        })
        .catch((err) => console.log(err));
    }, []);

    const handlePageClick = (data) => {
      setCurrentPage(data.selected);
    };

    const displayedProducts = products.slice(
      currentPage * 12,
      (currentPage + 1) * 12
    );
  return (
    <div
      style={{
        margin: "auto",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        paddingTop:"10em"
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}
      >
        <select
          style={{
            width: "300px",
            height: "fit-content",
            padding: "2em",
            marginLeft:"1em"
          }}
        >
          <option value="">Sort Price</option>
          <option value="HTL">High To Low</option>
          <option value="LTH">Low To High</option>
        </select>
        <FormControl style={{marginRight:"1em"}}>
          <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="kids" control={<Radio />} label="Kids" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="notes">
        {displayedProducts.map((product) => (
          <Card
            style={{
              border: "1px solid black",
              width: "20em",
              margin: "20px",
              borderRadius: "20px",
            }}
          >
            <div>
              <img src={product.image} alt="" style={{ width: "100%" }} />
            </div>
            <div style={{ backgroundColor: "yellow" }}>
              <b>{product.title}</b>
              <p>{product.brand}</p>
              <p>{product.price}</p>
              <FavoriteBorderIcon onClick={()=> handleWishlist(product)}/>
            </div>
          </Card>
        ))}
      </div>
      <div>{currentPage + 1}</div>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pageCount - 1}
      >
        Next
      </button>
    </div>
  );
}

export default ProductsPage;
