import "../Style/Form.css";
import "../Style/Title.css";
import "../Style/Product.css";
import Header from "../Component/Header";
import Title from "../Component/Title";
import Product from "../Component/Product";

const Form = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Title />
        </div>
        <div>
          <Product />
        </div>
      </div>
    </>
  );
};

export default Form;
