import React from "react"
import { Flex } from "@chakra-ui/react"

type LayoutProps = {
    children: React.ReactNode
}
const Layout = ({
    children
}: LayoutProps) => {
    return (
        <Flex>
            {children}
        </Flex>
    )
}

export default Layout