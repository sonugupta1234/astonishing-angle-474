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
  Select,
  Input,
  InputGroup,
  InputLeftElement
  } from '@chakra-ui/react';
  import Navbar from "../Components/Navbar";

function SingleProduct(){

    const {id}=useParams()
    console.log(id)
    const [singledata,setSingleData]=useState({})

    useEffect(()=>{
        axios.get(`https://rct-deployment.onrender.com/results/${id}`)
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
      
    <Center height='700px'>
  <Divider orientation='vertical' />
</Center>
      <Box width="30%" height="600px">
        
        <Flex direction={'column'}>
          <Text mt={15} >Starting</Text>
          <Heading mt={7}>AED438</Heading>
          <Text mt={10}>per night</Text>

          <Select placeholder="Select Units" width="100%" mt={7}>
            <option value="1 units">1 units</option>
            <option value="2 units">2 units</option>
          </Select>

          <InputGroup mt={6}>
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
                  <InputGroup mt={6}>
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
                    mt={6}
                   
                  >
                    <option value="option1">1 guest</option>
                    <option value="option2">2 guests</option>
                    <option value="option3">3 guests</option>
                  </Select>
                  
                  <Text mt={5}>Rateplan: Morning Breakfast (Continental Plan)</Text>
                  <Button borderRadius="none" w="100%" mt={5} colorScheme="blue">
                    Request to Book
                  </Button>
                
        </Flex>
      </Box>
      
      
      </Flex>
      </Box>
      </>
    )
}

export default SingleProduct;