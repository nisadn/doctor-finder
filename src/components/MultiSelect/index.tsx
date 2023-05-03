import { Box, Checkbox, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const data = {
    users: [
      { id: "user-1", name: "User 1" },
      { id: "user-2", name: "User 2" },
      { id: "user-3", name: "User 3" },
      { id: "user-4", name: "User 4" },
      { id: "user-5", name: "User 5" },
      { id: "user-6", name: "User 6" },
      { id: "user-7", name: "User 7" },
      { id: "user-8", name: "User 8" }
    ]
  };

const MultiSelect = () => {

  const [checkedItems, setCheckedItems] = useState(
    data.users.map(() => false)
  );

//   useEffect(() => {
//     console.log(checkedItems)
//   }, [checkedItems])

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
            <Text>File</Text>
            <Box>
                <ChevronDownIcon />
            </Box>
          </Flex>
        </MenuButton>
        <MenuList w='100%'>
          {data.users.map((user, index) => (
            <MenuItem w='100%'>
              <Checkbox
                key={user.id}
                isChecked={checkedItems[index]}
                onChange={(e) =>
                  setCheckedItems([
                    ...checkedItems.slice(0, index),
                    e.target.checked,
                    ...checkedItems.slice(index + 1)
                  ])
                }
              >
                {user.name}
            </Checkbox>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    )
}

export default MultiSelect