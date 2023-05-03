import { Avatar, Center, Flex, Text } from "@chakra-ui/react"
import { DoctorType } from "../types"

type CardProps = {
    data: DoctorType
}

const Card = ({ data }: CardProps) => {
    return (
        <>
            <Flex 
                gap='24px' 
                p='32px 32px 12px 24px' 
                direction={['column', 'column', 'row']}
            >
                <Center>
                    <Avatar name={data.name} src={data.imgUrl} w='200px' h='200px'/>
                </Center>
                <Flex w='100%' direction='column' gap='2'>
                <Text 
                    fontWeight='bold' 
                    fontSize='lg' 
                    color='blue.darker'
                >
                    {data.name}
                </Text>
                <Text color='blue.dark'>
                    {data.hospital.name} - {data.specialization.name}
                </Text>
                <div
                    dangerouslySetInnerHTML={{__html: data.about}}
                    style={{
                        wordBreak: 'break-word'
                    }}
                    />
                </Flex>
            </Flex>
            <Text 
                p='0 24px 24px' 
                fontWeight='bold' 
                fontSize='xl' 
                textAlign='right'
                color='green.dark'
            >
                {data.price}
            </Text>
        </>
    )
}

export default Card