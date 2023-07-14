// import Modal from "../../components/Modal/Modal";

import FAQs from "../../components/FAQs/FAQs";
import Modal from "../../components/Modal/Modal";
import Header from  "../../container/Header/Header"


const Home = () => {



  return (

    <div>

<Modal modalBody={<>Pujon Das Auvi</>} openButtonName="Open Modal" />
     {/* <Header/> */}

     <FAQs question="FAQs is not working. Why?"  answer="I don't knwo" />


    </div>
   
  );

};

export default Home;
 {/* <Modal modalBody={<>Pujon Das Auvi</>} openButtonName="Open Modal" /> */}