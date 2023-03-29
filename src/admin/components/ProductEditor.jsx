import { Box, Button, Container, createStyles, Group, Header, rem, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconAlertTriangle, IconSquarePlus } from "@tabler/icons-react";

import { useShopStore, useUiStore } from "../../hooks";
import { FeaturesCard } from "../../shop";
import { EditorModal } from "./EditorModal";

const useStyles = createStyles((theme) => ({
  header: {
    // position: 'fixed',
    // marginTop: 120,
    // marginLeft: '10%',
    // width: '80%',
    paddingTop: theme.spacing.sm,
    borderRadius: 10,
    // backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    // borderBottom: `${rem(1)} solid ${
    //   theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background
    // }`,
    // marginBottom: rem(60),
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  title: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

}));

export const ProductEditor = () => {
    const { products, setActiveProduct } = useShopStore();
    const { openProductEditModal } = useUiStore();

    const { classes } = useStyles();

    const handleAddNew = () => {
      setActiveProduct({});
      openProductEditModal();
    };

  return (
    <>
      <Box pb="xl" >
        <Header height={60} px="md" className={classes.header} >
          <Container className={ classes.mainSection } >
            <Group position="apart" sx={{ height: '100%' }} >
              <IconAlertTriangle size="2rem" color="yellow" stroke={2.4} />
              <Text fz="lg" fw={700} className={ classes.title } >
                Manage products
              </Text>
              <Button onClick={ handleAddNew } leftIcon={ <IconSquarePlus size="1.2rem" color="white" stroke={2.4} /> } >
                Add New
              </Button>
            </Group>
          </Container>
        </Header>
      </Box>
      <SimpleGrid
          // mt={50}
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
      <EditorModal/>
    </>
  )
}
