'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
  keyframes,
  Image,
} from '@chakra-ui/react'
import { MdArrowForwardIos, MdArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCheckmark } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function DetailsCards(){

    return(
        <VStack mt={20}> 
            <Text fontSize={'37px'} mt={5} textAlign={'center'} fontWeight={400} color={'white'}>Enterprise-grade features for <br /> operating at scale</Text>
            <HStack p={10} minW={'5xl'} m={'auto'} display={'flex'} justify={'center'} align={'center'} gap={4}>
                <Box bg={'#171717'} rounded={'lg'} px={10} py={16} w={'390px'} minH={'650px'} color={'white'}>
                    <VStack align={'start'}>
                        <Text fontSize={'23px'} mb={10}>Security and data privacy</Text>
                        {/* check icon  */}
                        <Text textDecoration={'underline'} textDecorationColor={"grey"} as="a" href='#' fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>No training on your data</Text>
                        <Text textDecoration={'underline'} textDecorationColor={"grey"} as="a" href='#' fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Zero data retention policy by request</Text>
                        <Text textDecoration={'underline'} textDecorationColor={"grey"} as="a" href='#' fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Business Associate Agreements (BAA) for HIPAA compliance</Text>
                        <Text textDecoration={'underline'} textDecorationColor={"grey"} as="a" href='#' fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>SOC 2 Type 2 compliance</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Single sign-on (SSO) and multi-factor authentication (MFA)</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Data encryption at rest (AES-256) and in transit (TLS 1.2+)</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Private Link to securely connect your Azure instances</Text>
                    </VStack>
                </Box>
                <Box bg={'#171717'} rounded={'lg'} px={10} py={16} w={'390px'} minH={'650px'} color={'white'}>
                    <VStack align={'start'}>
                        <Text fontSize={'23px'} mb={10}>Administrative controls</Text>
                        {/* check icon  */}
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Scope user roles and API keys to individual projects</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Role-based access controls</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Limit access to specific models within each project</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Set billing and usage restrictions to avoid overages</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>View granular usage activity by project</Text>
                    </VStack>
                </Box>
                <Box bg={'#171717'} rounded={'lg'} px={10} py={16} w={'390px'} minH={'650px'} color={'white'}>
                    <VStack align={'start'}>
                        <Text fontSize={'23px'} mb={10}>Access to OpenAI expertise</Text>
                        {/* check icon  */}
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Dedicated account team and prioritized support</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Guidance on AI deployment and best practices from solutions architects</Text>
                        <Text fontSize={'15px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/>Opportunity to collaborate with researchers on building custom AI models</Text>
                    </VStack>
                </Box>
                
            </HStack>
             <VStack mt={20} mb={20} bg={'#171717'} padding={20} w={'1200px'} rounded={'xl'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={'35px'} mb={3} color={'white'}>Three million developers build with OpenAI</Text>
                <HStack  alignItems={'center'} justify={'center'}>
                    <Button fontSize={'15px'} color={'black'} rounded={'full'} mt={0} fontWeight={400}> Sign up for a developer account <Icon ml={1} as={FiArrowUpRight }/> </Button>
                    <Button color={'white'} bg={'transparent'} _hover={{bg: "transparent"}} rounded={'full'} mt={0} fontWeight={400}> Talk to our team <Icon ml={1} as={MdArrowForwardIos }/> </Button>
                </HStack>
             </VStack>
        </VStack>
        
    )
}