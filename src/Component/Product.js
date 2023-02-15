import axios from "axios";
import { useState } from "react";

const Product = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  let data = { title, description, price, image };
  console.log(data);

  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(
        "https://dummyjson.com/products/add",
        data
      );

      console.log(response);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <p>{error}</p>
        <div id="product_container">
          <div id="container-label">
            <h1 className="products-details">Product details</h1>
          </div>
          <div id="container-info">
            <p className="text-paragraph">
              Please fill your information so we can add your product
            </p>
          </div>
          <hr className="hr"></hr>
          <div id="label">
            <h3 className="title">title</h3>
          </div>
          <div id="label2">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              type="text"
              placeholder="enter title"
            />
          </div>
          <div id="label">
            <h3 className="title">description</h3>
          </div>
          <div id="label2">
            <input
              onChange={(e) => setDescription(e.target.value)}
              className="input"
              type="text"
              placeholder="enter description"
            />
          </div>
          <div id="label">
            <h3 className="title">price</h3>
          </div>
          <div id="label2">
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="input"
              type="text"
              placeholder="enter price"
            />
          </div>
          <div id="label">
            <h3 className="title">image</h3>
          </div>
          <div id="label2" style={{ marginBottom: "60px" }}>
            <input
              onChange={(e) => setImage(e.target.value)}
              className="input"
              type="text"
              placeholder="your image link"
            />
          </div>
        </div>
        <div>
          <button id="btn-btn">SEND</button>
        </div>
      </form>
    </>
  );
};

export default Product;
