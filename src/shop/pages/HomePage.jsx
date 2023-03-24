import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';

import { useShopStore } from '../../hooks';
import { FeaturesCard } from '../components/FeaturesCard';

const PRIMARY_COL_HEIGHT = rem(300);

export const HomePage = () => {
  const { products } = useShopStore();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <FeaturesCard optTitle="Offer of the day" {...products[0]} />
        <Grid gutter="md">
          <Grid.Col>
            <FeaturesCard
              optTitle="Everything you need in one place"
              name="A huge variety of products"
              description="Several pay methods, buy with just one click from the comfort of your home or from wherever you are."
              image="https://upload.wikimedia.org/wikipedia/commons/f/fe/Smiling_woman_picture.jpg"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <FeaturesCard
              name="All cards accepted"
              description="credit and debit"
              image="https://upload.wikimedia.org/wikipedia/commons/b/bd/Credit_Card_Flat_Icon_GIF_Animation.gif"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <FeaturesCard
              name="Fast Shipping"
              description="Check availivility and extra charges"
              image="https://upload.wikimedia.org/wikipedia/commons/6/67/Shipping_Flat_Icon_GIF_Animation.gif"
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}