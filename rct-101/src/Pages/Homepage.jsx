import Navbar from "../Components/Navbar"
import Searchbar_Homepage from "../Components/Searchbar_Homepage";
import Top_Destination from "../Components/Top_Destination"
import { Text } from "@chakra-ui/react";
import BodyPart_HomePage from "../Components/BodyPart_Homepage";
import Vacation_Idea from "../Components/VacationIdeas_Homepage";
import Footer from "../Components/Footer";


function Home(){

   

    
    return (
        <>
        <Navbar />
        <Searchbar_Homepage /> 
        <Text fontSize="lg"  position={'absolute'} ml={7} mt={3}>Top Destinations</Text>
        <Top_Destination />
        <BodyPart_HomePage />
        <Text fontSize="lg"  position={'absolute'} ml={7} mt={3}>Vacation Ideas</Text>
        <Vacation_Idea />
        <Footer />
        </>
    )
}

export default Home;