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
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCheckmark } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';

export default function Cards(){

    return(
        <VStack mt={20}> 
            <Text fontSize={'37px'} mt={5} fontWeight={400} color={'white'}>Flagship models</Text>
            <HStack p={10} minW={'5xl'} m={'auto'} display={'flex'} justify={'center'} align={'center'} gap={4}>
            <Box bg={'#171717'} rounded={'lg'} px={10} py={16} color={'white'}>
                <VStack align={'start'}>
                    <Text fontSize={'25px'}>GPT-4o</Text>
                    <Text fontSize={'15px'} mb={6} fontWeight={500}>Our high-intelligence flagship model for complex, multi-step tasks</Text>
                    {/* check icon  */}
                    <Text fontSize={'16px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/> Text and vision </Text>
                    <Text fontSize={'16px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/> 128k context length </Text>
                    <Text fontSize={'16px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/> Input:$5 | Output:$15 per 1M tokens</Text>
                    <Button color={'black'} rounded={'full'} mt={7} fontWeight={400}> Learn more </Button>
                </VStack>
            </Box>
            <Box bg={'#171717'} rounded={'lg'} px={10} py={16} color={'white'}>
                <VStack align={'start'}>
                    <Text fontSize={'25px'}>GPT-4o mini</Text>
                    <Text fontSize={'15px'} mb={6} fontWeight={500}>Our affordable and intelligent small model for fast, lightweight tasks</Text>
                    {/* check icon  */}
                    <Text fontSize={'16px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/> Text and vision </Text>
                    <Text fontSize={'16px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/> 128k context length </Text>
                    <Text fontSize={'16px'} fontWeight={500} mb={4} > <Icon mr={4} fontSize={'16px'} fontWeight={900} as={FaCheck}/> Input: $0.15 | Output: $0.60 per 1M tokens</Text>
                    <Button color={'black'} rounded={'full'} mt={7} fontWeight={400}> Learn more </Button>
                </VStack>
            </Box>
            </HStack>
        </VStack>
        
    )
}