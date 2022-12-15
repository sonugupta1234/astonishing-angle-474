import {Flex,Box,Text,Image} from "@chakra-ui/react"
import { Link } from "react-router-dom";

function Top_Destination(){
   

    const basicBoxStyles = {
       
        boxSize: "250px",
        color: "black",
        fontWeight: "bold",
        fontSize: "20px",
        mt: "50px",
        cursor: "pointer"
      };

    return (
    
    
    <Box>
      <Flex gap={6} justifyContent={'space-evenly'}>
      <Link to="/Search">
      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height= "230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/goa-11.f1c86735cec4.jpg" alt=""/>
        
        <Text
                  fontWeight="400"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Goa
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  position="relative"
                  color="whitesmoke"
                >
                  Vacation Rentals
                </Text>
        
      </Box>
      </Link>

      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height="230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/galle-27739.4e9874b7f375.jpg" alt=""/>
        
        <Text
                  fontWeight="400"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Galle
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  position="relative"
                  color="whitesmoke"
                >
                  Vacation Rentals
                </Text>
        
      </Box>

      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height="230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/phuket-72.9d6f9e3883be.jpg" alt=""/>
        
        <Text
                  fontWeight="400"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Phuket
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  position="relative"
                  color="whitesmoke"
                >
                  Vacation Rentals
                </Text>
        
      </Box>

      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height="230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/kandy-5144.2adb0839ea6a.jpg" alt=""/>
        
        <Text
                  fontWeight="400"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Kandy
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  position="relative"
                  color="whitesmoke"
                >
                  Vacation Rentals
                </Text>
        
      </Box>


      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height="230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/koh-samui-5119.82e8a6c9cf8b.jpg" alt=""/>
        
        <Text
                  fontWeight="400"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Koh Samui
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  position="relative"
                  color="whitesmoke"
                >
                  Vacation Rentals
                </Text>
        
      </Box>

      
    
     </Flex>
    </Box>
    
    )
}

export default Top_Destination