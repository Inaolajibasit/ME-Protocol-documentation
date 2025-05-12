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

export default function PictureCards(){
    
    return(
        <VStack mt={20}> 
            <Text fontSize={'39px'} mt={5} fontWeight={400} lineHeight={1} color={'white'} textAlign={'center'}>Build AI-native experiences <br /> with our tools and capabilities</Text>
            {
                Card_Items.map( (items) => (
                    <HStack p={10} minW={'5xl'} m={'auto'} display={'flex'} justify={'center'} align={'center'} gap={4}>
                        <HStack gap={0} flexDirection={items.direction}>
                            <Box bg={'#171717'} boxSize={'540px'} px={14} py={16} color={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <VStack align={'start'} justify={'center'} m={'auto'} >
                                    <Text fontSize={'23px'} mb={5}> {items.title}</Text>
                                    <Text fontSize={'19px'} mb={6} fontWeight={400}>{items.info}</Text>
                                    <Text as='a' href={items.href} fontSize={'15px'} mb={6} _hover={{borderBottom: '1px'}} pb={'5px'} fontWeight={500}>Learn More <Icon my={'-3px'} as={FaAngleRight}/></Text>
                                </VStack>
                            </Box>
                            <Box w={'540px'}>
                                <Image w={'100%'} src={items.img} alt='picture'/>
                            </Box>
                        </HStack>
                    </HStack>
                ) )
            }
        </VStack>
        
    )
}

interface CardItem {
    title: "string"
    info: "string"
    href: "string"
    img: "string"
    direction?: "any"
}

const Card_Items = [
    {
        title: "Knowledge retrieval",
        info: "Give the model access to your data for intelligent retrieval in your AI applications. ",
        href: "#",
        img: "https://images.ctfassets.net/kftzwdyauwt9/549RWA1irZx4dgrE0QqIvq/158ce22583a53efef5139fff97529093/Knowledge_retrieval_API_desktop_light.jpg?w=1080&q=90&fm=webp",
        direction: "row",
    },
    {
        title: "Code interpreter",
        info: "Get models to run code iteratively to solve challenging code and math problems, and generate charts.",
        href: "#",
        img: "https://images.ctfassets.net/kftzwdyauwt9/3ifnbbKQifz4pDDWXp0bAc/4a4148e7de2dc5022113808bbce3d338/Code_interpreter_API_desktop_light.jpg?w=1080&q=90&fm=webp",
        direction: "row-reverse",
    },
    {
        title: "Function Calling",
        info: "Instruct the model to intelligently interact with your codebase and APIs using custom functions. ",
        href: "#",
        img: "https://images.ctfassets.net/kftzwdyauwt9/7B7eOk5AGZqU7E55cW8X7o/d3ec94492b0741a7a69c367a1316b2ea/Function_calling_API_desktop.png?w=1080&q=90&fm=webp",
        direction: "row",
    },
    {
        title: "Vision",
        info: "Get the model to understand and answer questions about images using vision capabilities.",
        href: "#",
        img: "https://images.ctfassets.net/kftzwdyauwt9/15rClqAAmT7HwPHHO40vnP/a303489ed5a760d291229c70f10a0227/Vision.jpg?w=1080&q=90&fm=webp",
        direction: "row-reverse",
    },
    {
        title: "JSON Mode",
        info: "Guarantee JSON outputs from the model when you enable JSON mode.",
        href: "#",
        img: "https://images.ctfassets.net/kftzwdyauwt9/55d74FcJxXrV3OT5V8HoZJ/186d31ba2bd5c4db0ceebabc4871259f/JSON_Mode__Code_Snippet.jpg?w=1080&q=90&fm=webp",
        direction: "row",
    },
    {
        title: "Streaming",
        info: "Display model outputs in real-time as they are generated.",
        href: "#",
        img: "https://images.ctfassets.net/kftzwdyauwt9/3ifnbbKQifz4pDDWXp0bAc/4a4148e7de2dc5022113808bbce3d338/Code_interpreter_API_desktop_light.jpg?w=1080&q=90&fm=webp",
        direction: "row-reverse",
    },
]