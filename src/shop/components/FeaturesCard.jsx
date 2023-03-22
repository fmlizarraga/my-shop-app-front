import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import { IconShoppingCartPlus, IconTag } from '@tabler/icons-react';

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
}));

export const FeaturesCard = ({name,description,price,image,tags,badge}) => {
  const { classes } = useStyles();
  const tagList = tags.map((tag) => (
    <Center key={tag}>
      <IconTag size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{tag}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt={name} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{ name }</Text>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
        </div>
        {
          badge ? <Badge variant="outline">{ badge }</Badge> : ''
        }
        
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          tags
        </Text>

        <Group spacing={8} mb={-8}>
          {tagList}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              {price}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              USD
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            <IconShoppingCartPlus size="1.2rem" className={`${classes.icon} ${classes.iconCart}`} stroke={2.4} />
            Add to cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}