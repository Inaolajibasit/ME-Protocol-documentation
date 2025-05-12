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
import img1 from "@/app/complogo2.svg"

const animation = keyframes `
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-120px);
    }
`


export default function HeroSection() {
    const myAnimation = `${animation} infinite 3s`;
  return (
    <Container maxW={'5xl'} >
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={400}
          textColor={'white'}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          lineHeight={'110%'}>
          The Most powerful platform <br />for building{' '}
          <Text as={'span'} color={'orange.400'}>
            AI products
          </Text>
        </Heading>
        <Text color={'gray.200'} fontSize={'xl'} maxW={'xl'}>
            Build and scale AI experiences powered <br /> by industry-leading models and tools.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            fontSize={'sm'}
            fontWeight={500}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Start Building <Icon ml={1} as={MdArrowOutward}/>
          </Button>
          <Button 
            colorScheme={'black'}  
            px={3}
            rounded={'0px'} 
            _hover={{
                borderBottom: '1px' 
            }}>
            Learn more <Icon as={IoIosArrowForward}/>
          </Button>
        </Stack>
      </Stack>
        {/* ===================== logo box part ============================== */}
      <HStack color={'white'} flexWrap={'wrap'} gap={'60px'} justifyContent={'center'}>
        <Box bg={'black'} display={'flex'} justifyItems={'center'} alignItems={'center'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
        </Box>
        <Box bg={'black'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
        </Box>
        <Box bg={'black'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
        </Box>
        <Box bg={'black'} display={'flex'} justifyItems={'center'} alignItems={'center'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
        </Box>
        <Box bg={'black'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
        </Box>
        <Box bg={'black'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
        </Box>
        <Box bg={'black'} display={'flex'} justifyItems={'center'} alignItems={'center'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src='/Screenshot 2024-08-27 125932.png' />
        </Box>
        <Box bg={'black'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 130014.png" />
        </Box>
        <Box bg={'black'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
        </Box>
        <Box bg={'black'} boxSize={'120px'} overflow={'hidden'}>
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
          <Image animation={myAnimation} height={'120px'} objectFit={'cover'} alt='pls work' src="/Screenshot 2024-08-27 125937.png" />
        </Box>
        
        
        
      </HStack>
    </Container>
  )
}