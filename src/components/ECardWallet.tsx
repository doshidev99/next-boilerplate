import { CopyIcon } from "@chakra-ui/icons"
import { Avatar, Box, Flex, Text, WrapItem } from "@chakra-ui/react"
import React from "react"

const ECardWallet: React.FC = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      w="100%"
      flexWrap={"wrap"}
      flex={{
        base: "flex",
        md: "block",
      }}
    >
      <Flex flex={1} gap={4} alignItems="center">
        <WrapItem>
          <Avatar
            width={"64px"}
            height={"64px"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            css={{
              border: "2px solid white",
            }}
          />
        </WrapItem>
        <Box>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            Wallet 1
          </Text>
          <Text fontSize={14} fontWeight={500}>
            0x2a82ae142b2e62cb7d10b55e323acb1cab663a26 <CopyIcon />
          </Text>
        </Box>
      </Flex>

      <Box mt={{
        base: 4,
        md: 0,
      }}>
        <Flex>
          <Box>
            <Text fontSize={30} fontWeight="bold" color={"gray.800"}>
              $3.297.425421
            </Text>
            <Box color={"green.400"} fontWeight="600" display="flex" gap={2}>
              +$68126 (14%)
              <Text color={"gray.500"}>24h</Text>
            </Box>
          </Box>

          {/* <Box>
            <LineChart className="center__chart" width={150} height={50} data={[200, 300, 400, 400]}>
              <YAxis hide domain={[200, 400]} />
              <Line
                dot={false}
                className="center__line"
                dataKey="price"
                type="natural"
                // stroke={true ? "#38C976" : "#FE5050"}
                stroke={"#38C976"}
                strokeWidth={2}
              />
            </LineChart>
          </Box> */}
        </Flex>
      </Box>
    </Flex>
  )
}
export default ECardWallet
