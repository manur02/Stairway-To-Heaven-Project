import Header from '../components/Header'
import Footer from '../components/Footer'
import Modal from './modal';
import { useState } from 'react';
import './modal';

 function Order(){

    const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

    function Submit(){

        let fname = document.forms["orderForm"]["firstName"].value;
        let lname = document.forms["orderForm"]["lastName"].value;
        const orderData = document.getElementById("order");
    
        if(fname == ""){
            alert("First Name is required.");
            return false;        
        }
        
        else{
            if(lname == ""){
                alert("Last Name is required.");
                return false;  
            }
            else{
    
                const phoneInput = document.getElementById("phoneNo");
      
                if (!phoneInput.checkValidity() || phoneInput.value == "" ) {
                    alert("Please enter a valid 10-digit phone number");
                    return false;
                }
                else{
    
                    const emailInput = document.getElementById("email");
                    if (emailInput.validity.typeMismatch || emailInput.value == "") {
                        alert("Please enter a valid email address");
                        return false;
                    }
                    else{
                        
                        if (!orderData.checkValidity() && orderData.validity.valueMissing) {
                            alert("Please mention what you would like to order?");
                            return false;
                        }
    
                        else{
                        
                        //needs to be changed ----------------------------------------------------
                        sessionStorage.setItem('order', document.getElementById("order").value)
                        let orderType = sessionStorage.getItem('order')                    
    
                        const form = document.querySelector("section")
                        form.remove()
                        
                        const orderPlaced = document.createElement("h3")
                        orderPlaced.innerHTML = "Hey "+fname+ " <3 <br> Thanks for ordering from us!<br> Your order ("+orderType+") is placed! We'll contact you to confirm about the same."
                        const mainBlock = document.getElementById("main")
                        mainBlock.append(orderPlaced)
    
                        const endLine = document.getElementById("tagAboveFooter")
                        endLine.innerHTML = "Hope you enjoy our treats, have an amazing celebration!"
                       
                        }
                    }
                }
            }
                
        }
        
        
    }
    
    function displayFirstName(){
    
        localStorage.setItem('name', document.forms["orderForm"]["firstName"].value)
        let firstName = localStorage.getItem('name')
    
    
    
        const customer = document.createElement("h4")
        customer.textContent = "Hey "+firstName+ "!"
        const element = document.getElementById("addName")
        element.append(customer)
        
        document.getElementById("menu").setAttribute("id", "attributeChange")
    
    }

    return(
        <>
        <Header/>

            <main id="main">
            <section id="placeOrderSection">
                <div className="animation_box">Order Now!!</div>
                <h2>Order now! Place your order here.</h2>
                <form id="orderForm" autocomplete="off">
           
                <h5>Please provide the mandatory information for smooth delivery!</h5>
                <input type = "Text" id="firstName" placeholder="First Name" required/>
                <input type = "Text" id="lastName" placeholder="Last Name"  onClick={displayFirstName} required/> 
                <br/><br/>
                <input type = "tel" maxlength="10" minlength="10" pattern="[0-9]{10}" id="phoneNo" placeholder = "Phone number"/>
                <input type = "email" id="email" placeholder = "Email Address"/>
                <br/><br/>
                <input type = "Text" id="address" placeholder = "Address for delivery"/>
                <br/><br/>
                <input type = "Text" id="address" placeholder = "Address line 2 (optional)" />
                <br/><br/>
                <label for ="instructions">Additionaly instructions for delivery?</label> &nbsp;
                <textarea id="intructions" name="intructions"></textarea><br/><br/>
                <div id="addName">
                <h5 id="menu"><i>We have theme based cakes, multiple layered cakes, cupcakes, pinata cakes, prank cakes,
                    brownies, cakesicles, brownie jars, macroons and customized chocolates.</i></h5>
                <br/>
                <label for="order">What would you like to order?</label> &nbsp;
                <textarea id="order" required></textarea><br/><br/>
                <h3>Date of Delivery?</h3>
                <input type="date"/>
                <br/><br/>
                <h3>Which flavour would you like?</h3>
                <input type = "radio" id ="flavour1"/>
                <label for = "flavour1">Chocolate</label>
                <input type = "radio" id ="flavour2"/>
                <label for = "flavour2">Strawberry</label>
                <input type = "radio" id ="flavour3"/>
                <label for = "flavour3">Pineapple</label>
                <input type = "radio" id ="flavour4"/>
                <label for = "flavour4">Butterscotch</label>
                <input type = "radio" id ="flavour5"/>
                <label for = "flavour5">Vanilla</label>
                <input type = "radio" id ="flavours"/>
                <label for = "flavours">Others</label>
                <h4><i> </i></h4>
                <label for="order-flavour"><i> If you have selected others option for your flavour choice, please give your choice of flavour: -</i></label> &nbsp;
                <textarea id="order-flavour" name="order-flavour"></textarea><br/><br/>
                <br/>
                </div>
                </form>
                <button onClick={toggleModal}>Terms and Conditions</button>
                <Modal isOpen={isModalOpen} closeModal={toggleModal}>
                    <h2>Terms and Conditions </h2>
                    <p> 1. Acceptance of Terms: By using our website, you agree to these terms. <br/>
                        2. Product Information: We aim for accurate product descriptions and pricing. <br/>
                        3. Ordering and Payment: Pay for orders as specified on our website. <br/>
                        4. Delivery and Pickup: Timely delivery, accurate information required. <br/>
                        5. Cancellation and Refund: Cancellation policies and refunds explained on the website. <br/>
                        6. Privacy Policy: We collect and handle personal information per our Privacy Policy. <br/>
                        7. Intellectual Property: Our content is protected by copyright. <br/>
                        8. Disclaimer: We're not liable for damages from using our website or products. <br/>
                        9. Governing Law: These terms follow the laws of your jurisdiction. <br/>
                        10. Changes to Terms: We may update terms; check for changes on our website. <br/>
                        Contact Information: Questions? Contact us. <br/>
                    </p>
                </Modal>       
                <br/><br/>       
                <button className="btn-submit" onClick={Submit} name ="button">Submit your order</button>
                        
                <h5><i>Thank you for ordering from us! We'll contact you to confirm your order.</i></h5>
                
            </section>
            </main>
        <Footer/>
        </>
    )

}

export default Order;

