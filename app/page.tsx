'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Container,
  Heading,
  Icon,
  IconProps,
  Image,
} from '@chakra-ui/react'

import HeroSection from './components/Hero';
import Navbar from './components/navbar';
import Cards from './components/Cards';
import CardsTabs from './components/CardTabs';
import PictureCards from './components/PicCards';
import BigPictureComp from './components/BigPic';
import Sliders from './components/Sliders';
import DetailsCards from './components/DetailCards';
import Footer from './components/Footer';



export default function Home() {
  return (
    <>
      <Box w={'full'} bg={'black'} minH={'100vh'}>
        <Navbar/>
        <HeroSection />
        <Cards />
        <CardsTabs />
        <PictureCards />
        <CardsTabs />
        <BigPictureComp />
        <Sliders> 
          <Image w={'full'} h={'100%'} objectFit={'cover'} src="https://images.ctfassets.net/kftzwdyauwt9/3Bre17thWaoDDc2jrKbMB7/3599c43369575e04ad1a7a4a9eea2d36/harvey.png?w=640&q=90&fm=webp" />
          <Image w={'full'} h={'100%'} objectFit={'cover'} src="https://images.ctfassets.net/kftzwdyauwt9/3pyY5QDNdExFmc3OcrqqBK/643bb793e8173e886c56e952e34c69c2/oscar.png?w=828&q=90&fm=webp" />
          <Image w={'full'} h={'100%'} objectFit={'cover'} src="https://images.ctfassets.net/kftzwdyauwt9/e4cda57a-c977-4855-16b96e288c99/40db1a7d78522f9f9030942dd4a3e72b/superhuman.png?w=828&q=90&fm=webp" />
          <Image w={'full'} h={'100%'} objectFit={'cover'} src="https://images.ctfassets.net/kftzwdyauwt9/3ca8d32a-0df0-42f7-4b4024199ea4/45fab493b5c2ab88ebc04b204df4c25b/healthify.png?w=828&q=90&fm=webp" />
          <Image w={'full'} h={'100%'} objectFit={'cover'} src="https://images.ctfassets.net/kftzwdyauwt9/7j7BUyh29FbUUTJudSM8JR/76c28a0752b613de7930e7a0183629f1/ironclad.png?w=640&q=90&fm=webp" />
          <Image w={'full'} h={'100%'} objectFit={'cover'} src="https://images.ctfassets.net/kftzwdyauwt9/c27a2bd7-3a3b-4f1f-061ce567b7b0/96fdbd2f3bc7219cefbef6954c924d73/khan_academy.png?w=828&q=90&fm=webp" />
        </Sliders>
        <DetailsCards/>
        <Footer/>
      </Box>
      
    </>
  );
}
