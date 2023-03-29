import { Card, Center, createStyles, Grid, Group, rem, Text } from "@mantine/core";
import { IconTag } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    card: {
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
    },

    section: {
      padding: 0,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },

    icon: {
      marginRight: rem(5),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },

  }));

export const TagsField = ({value,label,classNames}) => {
    const { classes } = useStyles();

    const tagList = value.map( tag => (
        <Center key={tag} p="sm" >
            <IconTag size="0.8rem" className={classes.icon} stroke={1.5} />
            <Text size="xs" >{ tag }</Text>
        </Center>
    ) );

  return (
    <>
        <Card shadow="md" className={ classes.card } padding="xl" mb="md" >
            <Card.Section className={ classes.section } >
                <Text className={ classNames.label } >{ label }</Text>
                <Grid pl="sm" pr="sm" className={ classNames.input } >
                    { tagList }
                </Grid>
            </Card.Section>
        </Card>
    </>
  )
}
