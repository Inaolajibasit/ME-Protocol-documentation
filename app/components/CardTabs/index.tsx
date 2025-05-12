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

export default function CardsTabs(){

    return(
        <VStack mt={20}> 
            <Text fontSize={'39px'} mt={5} fontWeight={400} lineHeight={1} color={'white'} textAlign={'center'}>Access the power <br /> of our models with APIs</Text>
            <HStack p={10} minW={'5xl'} m={'auto'} display={'flex'} justify={'center'} align={'center'} gap={4}>
                <Tabs position={'relative'} variant='unstyled' colorScheme='blue'>
                    <TabList justifyContent={'center'}>
                        <Tab 
                          mx={1}
                          zIndex={1} 
                          color={'white'} 
                          rounded={'full'}
                          _hover={{
                            bg: '#1f1f1f'
                          }}
                          _selected={{ 
                            color: 'black', 
                            bg: 'white',
                          }}>
                            Chat Completions API
                        </Tab>
                        <Tab 
                          zIndex={1} 
                          mx={1}
                          color={'white'} 
                          rounded={'full'}
                          _hover={{
                            bg: '#1f1f1f'
                          }}
                          _selected={{ 
                            color: 'black', 
                            bg: 'white',
                          }}>
                            Assistant API
                        </Tab>
                        <Tab 
                          zIndex={1} 
                          mx={1}
                          color={'white'} 
                          rounded={'full'}
                          _hover={{
                            bg: '#1f1f1f'
                          }}
                          _selected={{ 
                            color: 'black', 
                            bg: 'white',
                          }}>
                            Batch API
                        </Tab>
                    </TabList>
                    <TabIndicator 
                      mt='-40px' 
                      zIndex={'0'} 
                      height='40px' 
                      bg='white' 
                      borderRadius='full'  />
                    <TabPanels mt={3}>
                        <TabPanel>
                            <HStack gap={0}>
                                <Box bg={'#171717'} boxSize={'540px'} px={14} py={16} color={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <VStack align={'start'} justify={'center'} m={'auto'} >
                                        <Text fontSize={'23px'} mb={5}> Chat Completions API</Text>
                                        <Text fontSize={'19px'} mb={6} fontWeight={400}>Get access to our most powerful models with a few lines of code.</Text>
                                        <Text as='a' href='#' fontSize={'15px'} mb={6} _hover={{borderBottom: '1px'}} pb={'5px'} fontWeight={500}>Learn More <Icon my={'-3px'} as={FaAngleRight}/></Text>
                                    </VStack>
                                </Box>
                                <Box w={'540px'}>
                                    <Image w={'100%'} src={'https://images.ctfassets.net/kftzwdyauwt9/6ZjPNWFU1dyEpRjT2BqB3R/fbac392265b2a20d28c0ff20bff59029/Chat_Completions_API_desktop_dark.jpg?w=1080&q=90&fm=webp'}/>
                                </Box>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack gap={0}>
                                <Box bg={'#171717'} boxSize={'540px'} px={14} py={16} color={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <VStack align={'start'} justify={'center'} m={'auto'} >
                                        <Text fontSize={'23px'} mb={5}> Assistants API</Text>
                                        <Text fontSize={'19px'} mb={6} fontWeight={400}>Build AI assistants within your own applications that can leverage models, tools, and knowledge to do complex, multi-step tasks.</Text>
                                        <Text as='a' href='#' fontSize={'15px'} mb={6} _hover={{borderBottom: '1px'}} pb={'5px'} fontWeight={500}>Learn More <Icon my={'-3px'} as={FaAngleRight}/></Text>
                                    </VStack>
                                </Box>
                                <Box w={'540px'}>
                                    <Image w={'100%'} src={'https://images.ctfassets.net/kftzwdyauwt9/41rRuZkL7Oex5f7lOOOs5m/fa61b0ec85a445a92bef310d8ffa21aa/Assistants_API.jpg?w=1080&q=90&fm=webp'}/>
                                </Box>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack gap={0}>
                                <Box bg={'#171717'} boxSize={'540px'} px={14} py={16} color={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <VStack align={'start'} justify={'center'} m={'auto'} >
                                        <Text fontSize={'23px'} mb={5}>Batch API</Text>
                                        <Text fontSize={'19px'} mb={6} fontWeight={400}>Run asynchronous workloads for 50% of the cost over 24 hours.</Text>
                                        <Text as='a' href='#' fontSize={'15px'} mb={6} _hover={{borderBottom: '1px'}} pb={'5px'} fontWeight={500}>Learn More <Icon my={'-3px'} as={FaAngleRight}/></Text>
                                    </VStack>
                                </Box>
                                <Box w={'540px'}>
                                    <Image w={'100%'} src={'https://images.ctfassets.net/kftzwdyauwt9/2EuEzGGrHBDmIv3P7rhReb/4bc1beac9402688075213b066db93e54/BatchAPI.jpg?w=1080&q=90&fm=webp'}/>
                                </Box>
                            </HStack>
                        </TabPanel>
                        
                        
                    </TabPanels>
                </Tabs>
            </HStack>
        </VStack>
        
    )
}