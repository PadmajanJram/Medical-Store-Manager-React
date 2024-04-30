import {useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Aboutus() {
    const navigate = useNavigate();
    function goToHomePage(){
        navigate('/')
    }
    return <div>
        <Navbar></Navbar>
        <div className="container">
            <div className="Row">
                <div className="col-md-6 offset-md-3">
                <button className="btn btn-secondary" onClick={goToHomePage}>Go Home</button>
               <h1> India's No. 1 Medicine Delivery App</h1>
<p>The concept of medicine home delivery has been taken to a new level by the PharmEasy online medicine delivery app. You can use the PharmEasy online medicine delivery app to browse through an extensive range of medicines. Each medicine undergoes a 3-step quality check.

Whatever be your medicine requirement, you are sure to locate it in this online pharmacy. All you have to do then is to add it to your cart and place the order and get your order delivered quickly. India’s beloved online medicine delivery app makes sure that you get your medicines in record time because we know how vital time is in any treatment. Sit back, and we will have all your medical necessities delivered to your doorstep.
</p>
<h1>Online Medicine - Your Online Medical Store in India</h1>
<p>Tired of walking all the way to your local medicine store? Worried that going out is risky during the current times? Order medicines online at PharmEasy, India’s trusted online medicine app. With more than 1 lakh medicines always in stock, you are sure to find what you are looking for, and that too at affordable prices!

Besides, extremely stringent sanitization norms are followed at your favourite online medical store. PharmEasy takes the safety of customers and employees very seriously.

</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Aboutus;