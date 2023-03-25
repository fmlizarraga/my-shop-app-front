import { Box, Button, Group, Header, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconAlertTriangle, IconSquarePlus } from "@tabler/icons-react";

import { useShopStore } from "../../hooks";
import { FeaturesCard } from "../../shop";

export const ProductEditor = () => {
    const { products } = useShopStore();
  return (
    <>
      <Box pb={20} >
        <Header height={60} px="md" >
          <Group position="apart" sx={{ height: '100%' }} >
            <IconAlertTriangle size="2rem" color="yellow" stroke={2.4} />
            <Text fz="lg" fw={700} >
              Edit/Add/Delete a product here
            </Text>
            <Button leftIcon={ <IconSquarePlus size="1.2rem" color="white" stroke={2.4} /> } >
              Add New
            </Button>
          </Group>
        </Header>
      </Box>
      <SimpleGrid
          cols={3} 
          spacing="xl" 
          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
          {
            products.map(product => <Stack key={product.id + '-stack'} >
              <FeaturesCard
                isAdmin={true}
                { ...product }
              />
            </Stack>
            )
          }
      </SimpleGrid>
    </>
  )
}
