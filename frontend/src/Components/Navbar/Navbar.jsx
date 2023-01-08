import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CategoriesModal from './CategoriesModal'
import DailydealsModal from './DailydealsModal'
import GiftModals from './GiftModals'
import MoreModals from './MoreModals'

function Navbar() {
  return (
 
      <Box   >

{/* Headline */}

      <Box background="black" color={"white"} textAlign="center"  >
        <Text fontSize={"1rem"}  >✨ Celebrate 2023 with boAt ✨ Get up to 75% OFF. Shop Now!</Text>
      </Box>
           
        {/* Navbar */}

      <Box display={"flex"} border={"1px solid red"} justifyContent="space-between" >
        <Box>
          <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935' />
        </Box>

        <Box display={"flex"} justifyContent="space-between">
          <CategoriesModal/>
          <DailydealsModal/>
          <GiftModals/>
          <MoreModals/>
        </Box>

        <Box></Box>
 
      </Box>

      </Box>
  
  )
}

export default Navbar