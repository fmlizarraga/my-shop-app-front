import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import { IconPencil, IconShoppingCartPlus, IconTag, IconTrash } from '@tabler/icons-react';

import { useShopStore } from '../../hooks';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },

  iconCart: {
    color: theme.colors.green[6],
  },

  iconDanger: {
    color: theme.colors.red[6],
  },
}));

export const FeaturesCard = ({id,name,description,price,image,tags,badge,optTitle,isAdmin}) => {
  const { classes } = useStyles();
  const { setFeaturedProduct, setActiveProduct, activeProduct } = useShopStore();

  const handleSetActive = (product) => {
    if(product.id !== activeProduct?.id) setActiveProduct(product);
  };

  const handleEdit = () => {
    // ! delete me
    console.log(activeProduct)
  };
  
  const tagList = tags?.map((tag) => (
    <Center key={tag}>
      <IconTag size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{tag}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card} onMouseOver={ () => handleSetActive({id,name,description,price,image,tags,badge}) } >

      {
        optTitle
          ? <Card.Section className={ classes.section } >
            <Text fz="xl" fw={700} >{ optTitle }</Text>
          </Card.Section>
          : <></>
      }

      <Card.Section className={classes.imageSection}>
        <Image src={image} alt={name} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{ name }</Text>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
          {
            isAdmin
              ? <Button mt="md" radius="xl" style={{ flex: 1 }} onClick={ setFeaturedProduct } >
                Set featured
              </Button>
              : <></>
          }
        </div>
        {
          badge ? <Badge variant="outline">{ badge }</Badge> : ''
        }
        
      </Group>

      {
        tags
          ? <Card.Section className={classes.section} mt="md">
            <Text fz="sm" c="dimmed" className={classes.label}>
              tags
            </Text>

            <Group spacing={8} mb={-8}>
              {tagList}
            </Group>
          </Card.Section>
          : <></>
      }

      {
        price
          ? <Card.Section className={classes.section}>
            <Group spacing={30}>
              <div>
                <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                  {price}
                </Text>
                <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                  USD
                </Text>
              </div>

              {
                isAdmin
                  ? <>
                    <Button radius="xl" style={{ flex: 1 }} onClick={ handleEdit } >
                    <IconPencil size="1.2rem" className={`${classes.icon} ${classes.iconCart}`} stroke={2.4} />
                      Edit
                    </Button>
                    <Button variant="outline" radius="xl" style={{ flex: 1 }}>
                    <IconTrash size="1.2rem" className={`${classes.icon} ${classes.iconDanger}`} stroke={2.4} />
                      Delete
                    </Button>
                  </>
                  : <Button radius="xl" style={{ flex: 1 }}>
                    <IconShoppingCartPlus size="1.2rem" className={`${classes.icon} ${classes.iconCart}`} stroke={2.4} />
                    Add to cart
                  </Button>
              }
            </Group>
          </Card.Section>
          : <></>
      }

    </Card>
  );
}