import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
    Box,
    Spacer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Checkbox
  } from '@chakra-ui/react';
  import Navbar from '../Components/Navbar';
  import {useState,useEffect} from "react"
import axios from 'axios';
import {BsFilterRight} from "react-icons/bs"
import { Link } from 'react-router-dom';

function Products(){
    const [data,setData]=useState([])
    const [result,setResult]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
     axios.get(' https://rct-deployment.onrender.com/results')
     .then((res)=>setData(res.data))
     .catch((err)=>console.log(err))
     
    },[])

    const handleApply=()=>{
      setData(result)
    }

    const getAscData=()=>{
       axios.get(' https://rct-deployment.onrender.com/results?_sort=price&_order=asc')
       .then((res)=> setResult(res.data))
       .catch((err)=>console.log(err))
    }

    const getDscData=()=>{
      axios.get(' https://rct-deployment.onrender.com/results?_sort=price&_order=desc')
      .then((res)=> setResult(res.data))
      .catch((err)=>console.log(err))
   }
    return(
        <>
        <Navbar />
       
    
    
    <Box width="100%">
     <Flex>

      <Box width="60%">
      <Flex>
    <Button p='4' mt={4} leftIcon={<BsFilterRight />} onClick={onOpen}>
      Apply Filters
    </Button>
    <Spacer />
    <Box p='4' width="17%" bg={'#EDF2F7'}>
      Modify Search
    </Box>
      </Flex>

      <Text textAlign={'left'} mt={3}>Total Results : 13</Text>

     {data.map((item)=>{
       return ( 
        
        <Link to={`/products/${item.id}`}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '100%' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={'white'}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={item.img}
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
            <Text>Ref Id #{item.id}</Text>
            <Heading fontSize={'lg'} fontFamily={'body'}>
              {item.title}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {item.location}
            </Text>
            
            <Stack textAlign={'left'}  direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                fontWeight={'400'}
                border={'1px solid black'}>
                APARTMENT
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'white'}
                border={'1px solid black'}
                fontWeight={'400'}>
                3 BEDROOMS
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid black'}
                fontWeight={'400'}>
                2 BATHROOMS
              </Badge>
            </Stack>
            <Stack textAlign={'left'}  direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid black'}
                fontWeight={'400'}>
                Max 8 GUESTS
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid black'}
                fontWeight={'400'}>
                WIFI
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid black'}
                fontWeight={'400'}>
                TV
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={ 'white'}
                border={'1px solid black'}
                fontWeight={'400'}>
                AC
              </Badge>
        </Stack>
        
        <Stack  direction={'row'}  >
        <Heading fontSize={'lg'} fontFamily={'body'} textAlign={'left'} pt={5} >
            {item.price}
        </Heading>
        <Text fontSize={'sm'} pt={5} >
                for 25 nights
            </Text>
        </Stack>
          
          <Stack direction={'row'} width="80%" border="1px solid" borderColor={'orange.400'} >
            <Text fontSize={'sm'}  color={'orange.400'}>
                NON REFUNDABLE CANCELLATION POLICY
            </Text>
          </Stack>
          
       
          </Stack>
        </Stack>
        </Link>
       )  })}
    </Box>
      

      <Box width="40%" height="600px">
         <img  width="100%" src="https://www.google.com/maps/d/thumbnail?mid=10DxB2n1EU0KYQZxYDoHuX-vqw5U&hl=en_US" alt=""/>
      </Box>
      
      
      </Flex>
      </Box>


      <Modal onClose={onClose} size={'md'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
           <Box width="100%">
              <Flex>
                <Box width="50%">
                 <Flex direction={'column'}>
                    <Heading fontWeight={'normal'}>Features</Heading>
                    <Checkbox mt={6}>APARTMENT</Checkbox>
                    <Checkbox>WIFI</Checkbox>
                    <Checkbox>TV</Checkbox>
                    <Checkbox>AC</Checkbox>
                 </Flex>
                </Box>
                <Box width="50%">
                  <Flex direction={'column'}>
                    <Heading fontWeight={'normal'}>Price</Heading>
                    <Checkbox mt={6} onChange={getAscData}>LOW TO HIGH</Checkbox>
                    <Checkbox onChange={getDscData}>HIGH TO LOW</Checkbox>
                  </Flex>
                </Box>
              </Flex>
           </Box>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button ml={6} colorScheme="blue" onClick={ () => {handleApply(); onClose() }} >Apply(1)</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    );
    
}

export default Products;