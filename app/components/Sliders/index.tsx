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
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import React, { ReactNode, useState } from 'react';

interface sliderProps {
    children: ReactNode[];
}
 
const Sliders: React.FC<sliderProps> = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalItems = children.length

    const handelPrev = () =>{
        setCurrentIndex( (prevIndex) => prevIndex === 0 ? totalItems - 1 : prevIndex - 1 )
    }
    const handelNext = () =>{
        setCurrentIndex((prevIndex) => prevIndex === totalItems - 1 ? 0 : prevIndex + 1 )
    }

    return(
        <VStack mt={20}>
            <Text fontSize={'40px'} mt={5} mb={2} fontWeight={400} lineHeight={1} color={'white'} textAlign={'center'}>Trusted by the world’s most innovative organizations</Text>
            <Text fontSize={'18px'} mb={2} fontWeight={400} textAlign={'center'} color={'white'}>Our customers are leading the way with AI-powered customer service, knowledge <br /> management, recommendation engines, audio translation, content generation, and more.</Text>

            <VStack w={'full'}>
                <HStack gap={1} m={10}>
                    <Box onClick={handelPrev} cursor={'pointer'} boxSize={'40px'} display={'flex'} justifyContent={'center'} _hover={{bg: "#2e2e2e"}} alignContent={'center'} bg={'#171717'} ><Icon fontSize={'24px'} color={'white'} m={'auto'} as={FaAngleLeft}/> </Box>
                    <Box onClick={handelNext} cursor={'pointer'} boxSize={'40px'} display={'flex'} justifyContent={'center'} _hover={{bg: "#2e2e2e"}} alignContent={'center'} bg={'#171717'} ><Icon fontSize={'24px'} color={'white'} m={'auto'} as={FaAngleRight}/> </Box>
                </HStack>
                <HStack p={10} position={'relative'} w={'full'} overflow={'hidden'}>
                    <Box gap={10} display={'flex'} transition="transform 0.5s ease-in-out" transform={`translateX(-${currentIndex * 10}%)`} >
                        {
                            children.map((child, index) => (
                                <Box rounded={'lg'} overflow={'hidden'} key={index} w={'350px'} height={'500px'} boxSizing='border-box' >{child}</Box>
                            ) )
                        }
                    </Box>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default Sliders











