import { SimpleGrid, Stack } from '@mantine/core';

import { FeaturesCard } from '..';
import { useShopStore } from '../../hooks';

export const ShopPage = () => {
  const { products } = useShopStore();
  return (
    <SimpleGrid 
        cols={3} 
        spacing="md" 
        maw={1200}
        style={{margin: 'auto'}}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
    >
        {
          products.map(product => <Stack key={product.id + '-stack'} >
            <FeaturesCard 
                { ...product }
            />
          </Stack>
          )
        }
    </SimpleGrid>
  )
}
