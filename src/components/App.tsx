import { useEffect, useState } from 'react';
import { Box, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import Card from './Card.tsx';
import MultiSelect from './MultiSelect';
import { DoctorType } from './types';

const data = [{
  name: 'dr. Leony Nerry Sabatini Tambunan',
  imgUrl: "https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/dr_Leony_Nerry_Sabatini_Tambunan_670ab042e6.png",
  about: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">&nbsp;dr. Leony Nerry Sabatini Tambunan adalah&nbsp;Dokter&nbsp;Umum&nbsp;yang&nbsp;telah&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Universitas Pelita Harapan. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit umum.&nbsp;</span></p>",
  specialization: "Dokter Umum",
  hospital: "Mitra Keluarga Bintaro",
  price: "Rp 50.000",
},{
  name: 'dr. Leany Nerry Sabatini Tambunan',
  imgUrl: "https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/MK_KG_656b684faf_38207250c3.jpg",
  about: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">&nbsp;dr. Leony Nerry Sabatini Tambunan adalah&nbsp;Dokter&nbsp;Umum&nbsp;yang&nbsp;telah&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Universitas Pelita Harapan. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit umum.&nbsp;</span></p>",
  specialization: "Dokter Umum",
  hospital: "Mitra Keluarga Bintaro",
  price: "Rp 50.000",
}]

const hospitalOptions = [
  { id: "1", name: "Mitra Keluarga Bintaro" },
  { id: "2", name: "Hermina" },
  { id: "3", name: "HGA" },
  { id: "4", name: "Rumah Sakit" },
  { id: "5", name: "Klinik" },
  { id: "6", name: "Puskesmas" },
];

const specOptions = [
  { id: "10", name: "Anak" },
  { id: "20", name: "General" },
  { id: "30", name: "CS" },
  { id: "40", name: "Ortopedi" },
  { id: "50", name: "Obs-Gyn" },
  { id: "60", name: "Jantung" },
  { id: "70", name: "Saraf" },
  { id: "80", name: "Dokter Umum" }
];



const App = () => {

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
            return item.hospital.includes(itemFilter)
          })) || (filterSpec && filterSpec.some(itemFilter => {
            return item.specialization.includes(itemFilter)
          }))
        })
      )
    }
  }, [value, filterHospital, filterSpec])

  return (
    <Flex px={24} py={16} direction='column'>
      <Box w='100%'>
        <Text fontWeight='700' fontSize='24px' mb='16px'>Doctor Finder</Text>
        <Flex w='100%' gap='14px'>
          <Input placeholder='Keyword' w='20%' value={value} onChange={(e)=> setValue(e.currentTarget.value)} />
          <MultiSelect data={hospitalOptions} label='Hospital' setFilterData={setFilterHospital} />
          <MultiSelect data={specOptions} label='Specialization' setFilterData={setFilterSpec} />
        </Flex>
      </Box>

      <Grid mt='20px' w='100%' templateColumns='repeat(2, 1fr)' gap={6}>
        {filteredData.length ? 
          filteredData.map((item, idx) => (
            <GridItem key={idx} border='2px' borderColor='blue.600' rounded='lg' h='100%' display='flex' flexDir='column' justifyContent='space-between'>
              <Card 
                data={item}
              />
            </GridItem>
          ))
        :
          <Text>No search found</Text>
        }
      </Grid>
    </Flex>
  );
}

export default App;
