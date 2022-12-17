import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React, {  useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef } from "react";




function HolidaySearch () {
  const [searchText, setSearchText] = useState("");

  const tagsInput=useRef()
  const basicBoxStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: "20px",
      height: "auto",
      mt: "140px",
      //border: "1px solid red"
  }
  return (
    <>
    <Navbar />
    
        <Box sx={basicBoxStyles}>
          
          <Flex 
            // direction={{ base: "column", xl: "row" }}
          justifyContent="center" brightness="100%">
            <Box
              // border="1px solid red"
              minW={{ base: "90%", lg: "884px" }}
              maxW={{ base: "90%" }}
              // minW="884px"
              // pb={{base: '0rem', lg: '2rem'}}
              h="auto"
              color="black"
              fontWeight="600"
              position="relative"
              //mt="-22rem"
            >
              <Text fontSize="26px">
              Goa Holiday Homes
              </Text>
              <Text fontSize="26px" mb="1rem">
              We have 300 Vacation Rentals - search by dates for availability
              </Text>
              <Box
                maxW="100%"
                display="flex"
                margin="auto"
                h="auto"
                background="white"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                pb={{base: '0rem', lg: '1rem'}}
  
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  pt="0.6rem"
                  pl="0.6rem"
                  pr="0.6rem"
                  color="black"
                  direction={{ base: "column", xl: "row" }}
  
                >
                  {/* <Box> */}
                  {/* Location Input */}
                  {/* <Flex
                    // mb='-8.5rem'
                    direction="column"
                    h="auto"
                    overflowY="hidden"
                    textShadow="none"
                    fontWeight="200"
                    w="100%"
                  >
                    
                    <InputGroup >
                      <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.400" />}
                      />
  
                      <Input
                        borderRadius="none"
                        w="200%"
                        pl="2rem"
                        type="text"
                        placeholder="Location"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
                      ></Input>
                    </InputGroup>
                   
                    
                  </Flex>
   */}
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        // <SearchIcon color="gray.400" />
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          data-svg="sign-in"
                        required>
                          <polygon
                            fill="grey"
                            points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"
                          ></polygon>
                          <polygon
                            fill="grey"
                            points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"
                          ></polygon>
                        </svg>
                      }
                    />
                    <Input
                      borderRadius="none"
                      // maxW="100%"
                      w="100%"
                      type="date"
                      //ref={tagsInput}
                      placeholder="Check In"
                      required
                    ></Input>
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        // <SearchIcon color="gray.400" />
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          data-svg="sign-out"
                        >
                          <polygon
                            fill="grey"
                            points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"
                          ></polygon>
                          <polygon
                            fill="grey"
                            points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"
                          ></polygon>
                        </svg>
                      }
                    />
                    <Input
                      borderRadius="none"
                      w="100%"
                      type="date"
                      placeholder="Check Out"
                      onfocus="(this.type='date')"
                    ></Input>
                  </InputGroup>
                
                  
                  <Select
                    placeholder="Select Guests"
                    borderRadius="none"
                    w="100%"
                    color="gray.600"
                    p="0"
                   
                  >
                    <option value="option1">1 guest</option>
                    <option value="option2">2 guests</option>
                    <option value="option3">3 guests</option>
                    <option value="option4">4 guests</option>
                    <option value="option5">5 guests</option>
                    <option value="option6">6 guests</option>
                    <option value="option7">7 guests</option>
                    <option value="option8">8 guests</option>
                    <option value="option9">9 guests</option>
                    <option value="option10">10 guests</option>
                    <option value="option11">11 guests</option>
                    <option value="option12">12 guests</option>
                    <option value="option13">13 guests</option>
                    <option value="option14">14 guests</option>
                    <option value="option15">15 guests</option>
                    <option value="option16">16 guests</option>
                    <option value="option17">17 guests</option>
                    <option value="option18">18 guests</option>
                    <option value="option19">19 guests</option>
                    <option value="option20">20 guests</option>
                    <option value="option21">21 guests</option>
                    <option value="option22">22 guests</option>
                    <option value="option23">23 guests</option>
                    <option value="option24">24 guests</option>
                    <option value="option25">25 guests</option>
                    <option value="option26">26 guests</option>
                    <option value="option27">27 guests</option>
                    <option value="option28">28 guests</option>
                    <option value="option28">28 guests</option>
                    <option value="option29">29 guests</option>
                    <option value="option30">30 guests</option>
                    <option value="option31">31 guests</option>
                    <option value="option32">32 guests</option>
                    <option value="option33">33 guests</option>
                    <option value="option34">34 guests</option>
                    <option value="option35">35 guests</option>
                    <option value="option36">36 guests</option>
                    <option value="option37">37 guests</option>
                    <option value="option38">38 guests</option>
                    <option value="option39">39 guests</option>
                    <option value="option40">40 guests</option>
                    <option value="option41">41 guests</option>
                    <option value="option42">42 guests</option>
                    <option value="option43">43 guests</option>
                    <option value="option44">44 guests</option>
                    <option value="option45">45 guests</option>
                    <option value="option46">46 guests</option>
                    <option value="option47">47 guests</option>
                    <option value="option48">48 guests</option>
                    <option value="option49">49 guests</option>
                    <option value="option50">50 guests</option>
                  </Select>
                  <Link to="/products">
                  <Button borderRadius="none" w="100%" colorScheme="blue">
                    Search
                  </Button>
                  </Link>
                  {/* </Box> */}
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>

       <Footer /> 
      </>
    
  )

}

export default HolidaySearch;