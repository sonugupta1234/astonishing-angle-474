import {Flex,Box,Text,Image} from "@chakra-ui/react"
import { Link } from "react-router-dom";
function Vacation_Idea(){
   

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
      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height= "230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/goa-11.f1c86735cec4.jpg" alt=""/>
        
        <Link to="/search"><Text
                  fontWeight="500"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Luxury Vacation in Goa
                </Text></Link>
                
        
      </Box>

      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height="230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/galle-27739.4e9874b7f375.jpg" alt=""/>
        
        <Text
                  fontWeight="500"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Top Homestays and resorts in Chikmagalur
                </Text>
                
        
      </Box>

      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height="230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/koh-samui-5119.82e8a6c9cf8b.jpg" alt=""/>
        
        <Text
                  fontWeight="500"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Family Bungalow in Lonavala
                </Text>
               
      </Box>

      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height="230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/kandy-5144.2adb0839ea6a.jpg" alt=""/>
        
        <Text
                  fontWeight="500"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Coorg Homestays
                </Text>
                
        
      </Box>


      <Box  sx={basicBoxStyles}>
        <Image filter="auto" brightness="40%" height="230px" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/kerala-18.c082ce41a521.jpg" alt=""/>
        
        <Text
                  fontWeight="500"
                  position="relative"
                  color="white"
                  mt="-10rem"
                >
                  Kerala Homestays
                </Text>
               
        
      </Box>

      
    
     </Flex>
    </Box>
    
    )
}

export default Vacation_Idea