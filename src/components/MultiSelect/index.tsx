import { SetStateAction, useEffect, useState } from 'react';
import { Box, Checkbox, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Option } from "../types";

type MultiSelectProps = {
  data: Option[]
  label: string
  setFilterData: React.Dispatch<SetStateAction<string[]>>
}

const MultiSelect = ({ data, label, setFilterData }: MultiSelectProps) => {

  const [checkedItems, setCheckedItems] = useState(
    data.map(() => false)
  );

  useEffect(() => {
    setFilterData(data.filter((item) => 
      checkedItems[data.indexOf(item)] === true).map(obj => obj.name))
  }, [checkedItems, data, setFilterData])

    return (
      <Menu>
        <MenuButton
          px={4}
          py={2}
          w='20%'
          transition='all 0.2s'
          borderRadius='md'
          borderWidth='1px'
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'blue.400' }}
          _focus={{ boxShadow: 'outline' }}
        >
          <Flex justifyContent={'space-between'}>
            <Text>{label}</Text>
            <Box>
                <ChevronDownIcon />
            </Box>
          </Flex>
        </MenuButton>
        <MenuList w='100%'>
          {data.map((option, index) => (
            <MenuItem w='100%'>
              <Checkbox
                key={option.id}
                isChecked={checkedItems[index]}
                onChange={(e) =>
                  setCheckedItems([
                    ...checkedItems.slice(0, index),
                    e.target.checked,
                    ...checkedItems.slice(index + 1)
                  ])
                }
              >
                {option.name}
            </Checkbox>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    )
}

export default MultiSelect