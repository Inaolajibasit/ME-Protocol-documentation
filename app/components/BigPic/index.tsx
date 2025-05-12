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
  Tabs,
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react'
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCheckmark } from 'react-icons/io5';
import { FaAngleRight, FaCheck } from 'react-icons/fa';

export default function BigPictureComp(){

    return(
        <VStack>
            <Text fontSize={'40px'} mt={5} mb={2} fontWeight={400} lineHeight={1} color={'white'} textAlign={'center'}>See what you can build in Playground</Text>
            <Text fontSize={'18px'} mb={2} fontWeight={400} color={'white'}>Explore our models and APIs in Playground without writing a single line of code.</Text>
            <Button color={'black'} rounded={'full'} mb={7} mt={2} fontWeight={400}> Learn more </Button>
            <Image w={'1100px'} rounded={'xl'} src='https://images.ctfassets.net/kftzwdyauwt9/28qxxWxqGHZGPjIzjsxPEI/f8583f89ca8f5db32c4fa0ccdb177086/API-Playground.jpg?w=3840&q=90&fm=webp'/>
        </VStack>
        
    )
}