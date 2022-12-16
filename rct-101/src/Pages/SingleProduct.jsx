import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Divider } from "@chakra-ui/react";
import {GoLocation} from "react-icons/go"
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  } from '@chakra-ui/react';
  import Navbar from "../Components/Navbar";

function SingleProduct(){

    const {id}=useParams()
    console.log(id)
    const [singledata,setSingleData]=useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/results/${id}`)
        .then((res)=>setSingleData(res.data))
        .catch((err)=>console.log(err))
    },[])

    return(
       <>
        
        <Navbar />
        <Box width="100%">
        <Flex>
   
         <Box width="70%">

         <Breadcrumb mt={10} ml={7}>
          <BreadcrumbItem>
           <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

      <BreadcrumbItem>
          <BreadcrumbLink href='#'>India</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/search'>Goa</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Dabolim</BreadcrumbLink>
        </BreadcrumbItem>

     <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Property #28383802</BreadcrumbLink>
       </BreadcrumbItem>
    </Breadcrumb>
    <Divider mt={10}/>


         <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '100%' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={'white'}
          boxShadow={'2xl'}
          padding={4}
          mt={10}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={singledata.img}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            // justifyContent="center"
            // alignItems="center"
            textAlign="left"
            p={1}
            pt={2}
            >
            <Heading fontSize={'lg'} fontFamily={'body'}>
              {singledata.title}
            </Heading>
            <Button width="30%" fontWeight={600} color={'white.500'} size="md"  leftIcon={<GoLocation />}>
              {singledata.location}
            </Button>
            
            <Stack textAlign={'left'}  direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                fontWeight={'400'}
                border={'1px solid blue'}
                color={'blue.600'}
                
                >
                APARTMENT
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'white'}
                border={'1px solid blue'}
                color={'blue.600'}
                fontWeight={'400'}>
                3 BEDROOMS
              </Badge>
            </Stack>
            <Stack textAlign={'left'}  direction={'row'} mt={13}>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}
                fontWeight={'400'}>
                2 BATHROOMS
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}
                fontWeight={'400'}
                ml={6}>
                TV
              </Badge>
         </Stack>
         <Stack textAlign={'left'}  direction={'row'} mt={13}>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}
                fontWeight={'400'}>
                AC
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}
                fontWeight={'400'}
                ml={6}>
                GYM
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}

                fontWeight={'400'}
                ml={6}>
                SWIMMING POOL
              </Badge>
         </Stack>
            <Stack textAlign={'left'}  direction={'row'} mt={13} >
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}

                fontWeight={'400'}>
                Max 8 GUESTS
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}

                fontWeight={'400'}
                ml={6}>
                WIFI
              </Badge>
        </Stack>
        <Stack textAlign={'left'}  direction={'row'} mt={13}>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}

                fontWeight={'400'}>
                TV
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid blue'}
                color={'blue.600'}

                fontWeight={'400'}
                ml={6}>
                PETS NOT ALLOWED
              </Badge>
        </Stack>
        
        
          
       
          </Stack>
        </Stack>
    </Box>
      

      <Box width="30%" height="600px">
         <img  width="100%" src="https://www.google.com/maps/d/thumbnail?mid=10DxB2n1EU0KYQZxYDoHuX-vqw5U&hl=en_US" alt=""/>
      </Box>
      
      
      </Flex>
      </Box>
      </>
    )
}

export default SingleProduct;