const Product = () => {
  return (
    <>
      <form id="product_container">
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
          <input className="input" type="text" placeholder="enter title" />
        </div>
        <div id="label">
          <h3 className="title">description</h3>
        </div>
        <div id="label2">
          <input
            className="input"
            type="text"
            placeholder="enter description"
          />
        </div>
        <div id="label">
          <h3 className="title">price</h3>
        </div>
        <div id="label2">
          <input className="input" type="text" placeholder="enter price" />
        </div>
        <div id="label">
          <h3 className="title">image</h3>
        </div>
        <div id="label2" style={{ marginBottom: "90px" }}>
          <input className="input" type="text" placeholder="your image link" />
        </div>
      </form>
      <div id="btn-btn">
        <button>SEND</button>
      </div>
    </>
  );
};

export default Product;
