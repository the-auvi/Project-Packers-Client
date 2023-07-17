// import Modal from "../../components/Modal/Modal";

import FAQs from "../../components/FAQs/FAQs";
import Modal from "../../components/Modal/Modal";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import Header from "../../container/Header/Header";

import card1 from "../../assets/card1.png";
import BlogCard1 from "../../assets/Blog1.png";
import BlogCard from "../../components/BlogCard/BlogCard";

import Button from "../../components/Button/Button";
import Headings from "../../components/Headings/Headings";
import AboutFAQs from "../../components/AboutFAQs/AboutFAQs";
import Status from "../../components/Status/Status";
import PopUpCard from "../../components/PopUpCard/PopUpCard";

const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  const handleBlr = () => {
    console.log("blured");
  };

  const handleMouseHover = () => {
    console.log("mouseHover");
  };

  const handeMouseMoveCapture = () => {
    console.log("ccaptured");
  };

  return (
    <div className="wrapper">
      {/* <AboutFAQs aboutQuestion="Tell us the item your are looking for" aboutAnswer="Thousand of deals  on gadgets, shoes, cosmetics, watches - everything from the US" /> */}

      {/* <Headings title="Trending products on Project Packers" subTitle="Get inpiredd by what people in your city are buying from abroad with the biggest savings" /> */}

      <Modal modalBody={<>Pujon Das Auvi</>} openButtonName="Open Modal" />
      {/* <Header/> */}

      <PopUpCard
        title="You got a new request"
        details="Upload your store's logo, change colors and fonts, and more."
        time={3}
        openButtonName="Open Modal"
      />

      <Status title="Completed" />
      <Status title="Paid" />

      <Button
        buttonType=""
        className="rounded-md"
        name="primaryButton"
        // onClick={handleClick}
        // onBlur={handleBlr}
        // onMouseMove={handleMouseHover}
        // onMouseMoveCapture = {handeMouseMoveCapture}
      />
      {/* <Button
        buttonType="secondaryButton"
        className=""
        name="secondaryButton"
        onClick={handleClick}
        onBlur={handleBlr}
        onMouseMove={handleMouseHover}
        onMouseMoveCapture = {handeMouseMoveCapture}
      />
       <Button
        buttonType="outlineBUtton"
        className=""
        name="outlineButton"
        onClick={handleClick}
        onBlur={handleBlr}
        onMouseMove={handleMouseHover}
        onMouseMoveCapture = {handeMouseMoveCapture}
      /> */}

      {/* <FAQs question="FAQs is not working. Why?" answer="I don't knwo" />
      <ProductsCard
        img={card1}
        title="iConnect by timex active smartWatch"
        price={28.95}
      />
      <BlogCard
        img={BlogCard1}
        title="Validate your product and market"
        details="You have a great product. Now its time to test your Idea to see if it can become a business"
      /> */}
    </div>
  );
};

export default Home;
{
  /* <Modal modalBody={<>Pujon Das Auvi</>} openButtonName="Open Modal" /> */
}
