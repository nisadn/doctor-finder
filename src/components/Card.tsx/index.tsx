import { Avatar, Center, Flex, Text } from "@chakra-ui/react"
import { DoctorType } from "../types"

type CardProps = {
    data: DoctorType
}

const Card = ({ data }: CardProps) => {
    return (
        <>
            <Flex p='24px' gap='24px'>
                <Center>
                    <Avatar name={data.name} src={data.imgUrl} w='200px' h='200px'/>
                </Center>
                <Flex w='100%' direction='column' gap='2'>
                <Text fontWeight='700' fontSize='lg'>{data.name}</Text>
                <Text>{data.hospital.name} - {data.specialization.name}</Text>
                <div
                    dangerouslySetInnerHTML={{__html: data.about}}
                    style={{
                        wordBreak: 'break-word'
                    }}
                    />
                </Flex>
            </Flex>
            <Text p='0 24px 24px' fontWeight='bold' fontSize='lg' textAlign='right'>{data.price}</Text>
        </>
    )
}

export default Card