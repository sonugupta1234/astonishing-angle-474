import {
    Stack,
    Textarea,
    Image,
    Box,
    Heading,
    AlertTitle,
    AlertDescription,
    useToast,
    Button,
    
  } from "@chakra-ui/react";
  import { Link, useNavigate } from "react-router-dom";
  import style from "./Checkout.module.css";
  import { useState, useEffect } from "react";
  import Navbar from "../Components/Navbar";
  import { Alert, AlertIcon, Select } from "@chakra-ui/react";
  import { FormControl, FormLabel, Input } from "@chakra-ui/react";
  import {
    IconName,
    AiOutlineUser,
    AiOutlineMessage,
    AiFillBook,
  } from "react-icons/ai";
 
  const Checkout = () => {
    const toast = useToast();
    const statuses = "Booking success";
  
    const [formstate, setFormState]=useState({
        selectValue: "",
        phone: "",
        firstName: "",
        lastName: "",
      })

      const handleform=()=>{
        if(formstate.selectValue!=="" && formstate.phone!=="" && formstate.firstName!=="" && formstate.lastName!=="")
        {
          toast({
            title:  "Booking Successfull.",
            description: "We've Sending Mail & Text on your account for you.",
            position: 'top',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      }
    
    const [alrt, setalrt] = useState(false);

    const handleChange=(e)=>{
        const val=e.target.value
        setFormState({...formstate,[e.target.name]: val})
      }
    
   
    return (
      <>
        <Navbar></Navbar>
        <br></br>
        <div>
          {" "}
          
          <div className={style.devide}>
            <div className={style.one}>
              <div
                className="card text-white bg-primary mb-1"
                style={{
                  padding: "30px 40px 30px 40px",
                  border: "3px solid blue",
                }}
              >
                <div className="card-header">Book Tension Free</div>
                <div className="card-body">
                  <li className="card-title">
                    Your payments are secured by Tripvillas.
                  </li>
                  <li className="card-text">
                    The amounts are released to verified owners in advance while
                    new owners are paid post your check-in and confirmation.
                  </li>
                  <li>
                    You can contact us if you face any issues during checkin or
                    your stay.
                  </li>
                </div>
              </div>
             



              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "15px",
                  border: "1px",
                }}
                className={style.box}
              >
                <div>check In
                  <p>02/05/2021</p>
                </div>
                <div>Check Out <p>09/05/2021</p></div>
                <div>Guests 3</div>
                
              </div>
              <br></br>
              <div className={style.useflx}>
                <h6>
                  Sub
                  Total...........................................................................................................................................................
                </h6>
                <h6>₹2000.00</h6>
              </div>
              <div className={style.useflx}>
                <h6>
                  discount...............................................................................................................................................................
                </h6>
                <h6>₹0</h6>
              </div>
              <div className={style.useflx}>
                <h6>
                  Tax...............................................................................................................................................................
                </h6>
                <h6>₹256</h6>
              </div>
              <div className={style.useflx}>
                <h6>
                  Total.............................................................................................................................................................
                </h6>
                <h6>₹3397</h6>
              </div>
  
              <div>
                Rate Plan
                <p>Cooked Breakfast</p>
                <p>Stringent Cancellation Policy</p>
                <div>
                  No charges will be levied if booking is canceled 61 days prior
                  to check-in. If cancellation is done between 30 to 60 days prior
                  to check-in, 50% of the total booking amount will be charged.
                  Post that, there will be no refund.
                </div>
              </div>
            </div>
            <div className={style.two}>
              <div>
                <Alert status="warning">
                  <AlertIcon />
                  Book fast. Your dates might get booked by someone else.
                </Alert>
              </div>
              <div>
                <br></br>
                <form  id="new-form" onSubmit={handleform}>
                <FormControl >
                 
                  <div className={style.useflx}>
                    <h4>
                      <AiOutlineUser />
                    </h4>
                    <h4>Enter your contact information</h4>
                  </div>
                  <hr></hr>
                  <br></br>
                  <div className={style.useflx}>
                    <select style={{ border: "1px solid gray" }} name="selectValue" onChange={handleChange} required>
                      <option>+91</option>
                      <option value="+65">+65</option>
                      <option value="+76">+76</option>
                      <option value="+13">+13</option>
                      <option value="+21">+21</option>
                    </select>
                    {/* </FormControl> */}
                    {/* <FormControl> */}
                    <Input type="number" name="phone" value={formstate.phone} placeholder="Enter Number"  onChange={handleChange} required/>
                    {/* </FormControl> */}
                  </div>
                  <br></br>
                  
                  <div className={style.useflx}>
                  {/* <FormControl> */}
                    <Input placeholder="First name" name="firstName" value={formstate.firstName} onChange={handleChange} required/>
                    <Input placeholder="Last name" name="lastName" value={formstate.lastName} onChange={handleChange} required/>
                  
                  {/* </FormControl> */}
                  </div>
                  <br></br>
                  <div>
                  {/* <FormControl> */}

                    <Input type="email" placeholder="Email Adress" name="email" value={formstate.email} onChange={handleChange} required/>
                  {/* </FormControl> */}
                   
                  </div>
                
                  <br></br>
                  <div className={style.useflx}>
                    <h3>
                      <AiOutlineMessage />
                    </h3>
                    <h4>Are there any special requests?</h4>
                  </div>
                  <div>
                    <Textarea placeholder="Enter Message" size="md" />
                    <p style={{ textAlign: "initial" }}>
                      This message will be visible to the owner/manager once
                      she/he accepts the booking
                    </p>
                  </div>
                  <br></br>
                  <div className={style.useflx}>
                    <h3>
                      <AiFillBook />
                    </h3>
                    <h4>Booking Option</h4>
                  </div>
                  <br></br>


                  <div>
                     <div style={{ backgroundColor: "lightgray" }}>
                    By clicking 'Agree & Continue', you are agreeing to our Terms
                    & Conditions, Privacy Policy, Booking policies like
                    cancellation policies, house rules.
                  </div>
                  <br></br>
                  <div className={style.agree1}>
                    <button type="submit"   form="new-form" 
                    >
                      Agree {"&"} Continue {statuses}
                    </button>
                  </div>
                  </div>
                </FormControl>
                </form>
                <br></br>
              </div>
            </div>
          </div>
        </div>
    
      </>
    );
  };
  export default Checkout;