import { useEffect, useState } from 'react';
import { Box, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import Card from './Card.tsx';
import MultiSelect from './MultiSelect';
import useGetData from '../hooks/useGetData';
import { DoctorType } from './types';

const App = () => {

  const { data, hospitalOptions, specOptions, loading } = useGetData();

  const [value, setValue] = useState<string>('')
  const [filterHospital, setFilterHospital] = useState<string[]>([])
  const [filterSpec, setFilterSpec] = useState<string[]>([])
  const [filteredData, setFilteredData] = useState<DoctorType[]>(data)

  useEffect(() => {
    if (!value && !filterHospital.length && !filterSpec.length) {
      setFilteredData(data)
    } else {
      setFilteredData(
        data.filter(item => {
          return (value && item.name.toLowerCase().includes(value.toLowerCase())) 
          || (filterHospital && filterHospital.some(itemFilter => {
            return item.hospital.name.includes(itemFilter)
          })) || (filterSpec && filterSpec.some(itemFilter => {
            return item.specialization.name.includes(itemFilter)
          }))
        })
      )
    }
  }, [value, filterHospital, filterSpec, data])

  if (loading) {
    return <>Loading...</>
  }

  return (
    <Flex px={24} py={16} direction='column' bgColor='grey.light' minH='100vh'>
      <Box w='100%'>
        <Flex fontWeight='bold' fontSize='4xl' mb='16px'>
          <Text color='blue.darker'>Doctor</Text><Text color='green.dark'>Finder</Text>
        </Flex>
        <Flex w='100%' gap='14px'>
          <Input 
            w='20%' 
            bgColor='white'
            placeholder='Keyword' 
            value={value} 
            onChange={(e)=> setValue(e.currentTarget.value)} 
          />
          <MultiSelect 
            data={hospitalOptions} 
            label='Hospital' 
            setFilterData={setFilterHospital} 
          />
          <MultiSelect 
            data={specOptions} 
            label='Specialization' 
            setFilterData={setFilterSpec} 
          />
        </Flex>
      </Box>

      <Grid mt='20px' w='100%' templateColumns='repeat(2, 1fr)' gap={6}>
        {filteredData.length ? 
          filteredData.map((item, idx) => (
            <GridItem 
              key={idx} 
              rounded='20px' 
              bgColor='white'
              boxShadow='custom'
              h='100%' 
              display='flex' 
              flexDir='column' 
              justifyContent='space-between'
            >
              <Card 
                data={item}
              />
            </GridItem>
          ))
        :
          <Text>No data found</Text>
        }
      </Grid>
    </Flex>
  );
}

export default App;
