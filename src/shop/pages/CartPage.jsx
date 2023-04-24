import { Avatar, Badge, Button, Container, createStyles, Divider, Group, SimpleGrid, Space, Stack, Text } from "@mantine/core";
import { IconCash, IconCircleX, IconInfoCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { useAuthStore, useCartTotal } from "../../hooks";

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export const CartPage = () => {
  const { classes, theme } = useStyles();

  const { user } = useAuthStore();
  const myCart = user.cart;

  const total = useCartTotal();

  const cartList = (
    <>
      {myCart.map( item => (
      <div key={item.id} >
        <Group noWrap >
          <Avatar src={item.image} size={120} radius="md" ml="xl" mr="xl" />
          <div>
            <Group noWrap >
              <Text fz="xl" fw={500} className={classes.name} >
                {item.name}
              </Text>
              <Badge variant="filled" >{ item.quantity }</Badge>
              <Button ml="xl" radius="xl" variant="subtle" ><IconCircleX color={theme.colors.red[6]} /></Button>
            </Group>

            <Group noWrap spacing={10} mt={3} >
              <IconInfoCircle stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="md" c="dimmed" >{ item.description }</Text>
            </Group>

            <Group noWrap spacing={10} mt={3} >
              <IconCash stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="md" c="dimmed" >{ item.price * item.quantity } USD</Text>
            </Group>
          </div>
        </Group>
        <Space h="lg" />
        <Divider my="sm"/>
      </div>
    ))}
    <Text ml="lg" fz="xl" fw={500} >Total: { total } USD</Text>
    <Group ml="lg" >
      <Button variant="outline" radius="xl" >Keep shopping</Button>
      <Button radius="xl" >Purchase All</Button>
    </Group>
  </>
  );

  return (
    <Container my="md" >
      <SimpleGrid cols={1} >
        <Stack mt={60} >
          <Text fz={25} fw={700} >Cart</Text>
          <Divider my="sm" />
          {
            myCart.length > 0
              ? cartList
              : <Text fz="xl" fw={500} >Your cart is empty</Text>
          }
          
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
