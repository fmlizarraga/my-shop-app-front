import { SimpleGrid, Stack } from '@mantine/core'
import { FeaturesCard } from '../'
import { useShopStore } from '../../hooks'

export const ShopLayout = () => {
  const { products } = useShopStore();
  return (
    <SimpleGrid 
        cols={3} 
        spacing="xl" 
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
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
