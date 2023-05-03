import { Box, Flex, Text } from "@chakra-ui/react"

const Card = () => {
    return (
        <Flex p='16px' gap='14px' bg='skyblue'>
            <Box w='30%' bg='white'>Image</Box>
            <Flex w='100%' direction='column'>
              <Text>name</Text>
              <Text>hospital - specialization</Text>
              <Text>about</Text>
              <Text mt='14px' textAlign='right'>price</Text>
            </Flex>
          </Flex>
    )
}

export default Card