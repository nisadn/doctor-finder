import { Box, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import Card from './Card.tsx';
import MultiSelect from './MultiSelect';


const App = () => {

  return (
    <Flex px={24} py={16} direction='column'>
      <Box w='100%'>
        <Text fontWeight='700' fontSize='24px' mb='16px'>Doctor Finder</Text>
        <Flex w='100%' gap='14px'>
          <Input placeholder='Keyword' w='20%' />
          <MultiSelect />
          <MultiSelect />
        </Flex>
      </Box>

      <Grid mt='20px' templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem w='100%' bg='blue.500'>
          <Card />
        </GridItem>
        <GridItem w='100%' bg='blue.500'>
          <Card />
        </GridItem>
        <GridItem w='100%' bg='blue.500'>
          <Card />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default App;
