'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  VStack,
  HStack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Link,
  color,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { IoSearch } from 'react-icons/io5'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={'black'}
        position={'fixed'}
        top={0}
        left={0}
        right={0}
        zIndex={10}
        color={'white'}
        minH={'50px'}
        py={{ base: 1 }}
        px={{ base: 80 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} alignItems={'center'} justify={{ base: 'space-between', md: 'start' }}>
          <Link href='www.youtube.com'> 
            <Image src='../../Screenshot 2024-08-27 130014.png' w={100} h={10} objectFit={'cover'}/>
          </Link> 
          <Flex display={{ base: 'none', md: 'flex' }} m={'auto'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={600} color={'white'} variant={'link'} href={'#'}>
            <Icon as={IoSearch} fontSize={20}/>
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'white')
  const linkHoverColor = useColorModeValue('gray.400', 'gray.400')
  const popoverContentBgColor = useColorModeValue('gray.900', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={2}
                borderColor={'#191919'}
                borderStyle={'solid'}
                boxShadow={'dark-lg'}
                // bg={popoverContentBgColor}
                bg={'black'}
                p={10}
                rounded={'md'}
                minW={'5xl'}
                w={'auto'}>
                <HStack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </HStack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel, img }: NavItem) => {
  return (
    <Box
      role={'group'}
      display={'flex'}
      alignItems={'start'}
      justifyContent={'start'}
      p={2}
      rounded={'xs'}
    //   _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    //   bg={'yellow'}
      minH={'160px'}
      >
      <Stack minW={'300px'} direction={'row'} align={'center'}>
        <Box display={'flex'} flexDir={'column'} w={'full'}>
            {/* group heading  */}
          <Text 
            mb={4}
            fontSize={'sm'}
            fontWeight={500}>
            {label}
          </Text>
          <VStack my={1} alignItems={'start'} >
            {
                subLabel?.map((item) => (
                    <Text _hover={{color: 'white'}} fontSize={'sm'} fontWeight={300} color={'gray.300'} as="a" href={item.href}>
                        {item.label}
                    </Text>
                ))
            }
          </VStack>
        </Box>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: Array<NavItem>
  children?: Array<NavItem>
  href?: string
  img?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Research',
    children: [
      {
        label: 'Our Research',
        subLabel: [
            {
                label: 'Overview',
                href: 'www.youtube.com',
            },
            {
                label: 'Index',
                href: '#',
            },
        ],
    
      },
      {
        label: 'Latest Advancements',
        subLabel: [
            {
                label: 'GPT-4o',
                href: '#',
            },
            {
                label: 'GPT-4o mini',
                href: '#',
            },
            {
                label: 'DALL-E3',
                href: '#',
            },
            {
                label: 'Sora',
                href: '#',
            },
        ],
      },
      {
        img: '#',
        label: 'Hello GPT-4'
      },
    ],
  },

  {
    label: 'Products',
    children: [
      {
        label: 'ChatGPT',
        subLabel: [
            {
                label: 'For Everyone',
                href: '#',
            },
            {
                label: 'For Teams',
                href: '#',
            },
            {
                label: 'For Enterprise',
                href: '#',
            },
            {
                label: 'For Education',
                href: '#',
            },
            {
                label: 'Pricing',
                href: '#',
            },
            {
                label: 'ChatGPT login',
                href: '#',
            },
        ],
    
      },
      {
        label: 'API',
        subLabel: [
            {
                label: 'Platform overview',
                href: '#',
            },
            {
                label: 'Pricing',
                href: '#',
            },
            {
                label: 'Documentation',
                href: '#',
            },
            {
                label: 'API Login',
                href: '#',
            },
        ],
      },
      {
        label: 'Explore More',
        subLabel: [
            {
                label: 'OpenAI for business',
                href: '#',
            },
            {
                label: 'Stories ',
                href: '#',
            },
        ],
      },
    ],
  },


  {
    label: 'Safety',
    children: [
      {
        label: 'Safety Overview',
        subLabel: [
            {
                label: 'Safety Overview',
                href: '#',
            },
            {
                label: 'Safety Standards',
                href: '#',
            },
        ],
    
      },
      {
        label: 'Teams',
        subLabel: [
            {
                label: 'Safety Systems',
                href: '#',
            },
            {
                label: 'Preparedness',
                href: '#',
            },
            {
                label: 'Superalignment',
                href: '#',
            },
        ],
      },
    ],
  },

  {
    label: 'Company',
    children: [
        {
            label: 'About Us',
            subLabel: [
          {
              label: 'Our charter',
              href: '#',
          },
          {
              label: 'Residency',
              href: '#',
          },
      ],
  
    },
    {
      label: 'News',
      subLabel: [
          {
              label: 'Security and Privacy',
              href: '#',
          },
          {
              label: 'Careers',
              href: '#',
          },
      ],
    },
    {
      label: 'Explore More',
      img: '#',
    },
  ],
},
  
]