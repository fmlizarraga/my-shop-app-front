import {
  createStyles,
  Header,
  Group,
  Button,
  rem,
  Text,
  Container,
  Anchor,
} from "@mantine/core";
import { IconBuildingStore } from "@tabler/icons-react";
import { useUiStore } from "../../hooks";

const useStyles = createStyles((theme) => ({
  header: {
    position: "fixed",
    width: "100%",
    // height: 60,
    paddingTop: theme.spacing.sm,
    // paddingBottom: theme.spacing.md,
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    borderBottom: `${rem(1)} solid ${
      theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .background
    }`,
    marginBottom: rem(60),
  },
  mainSection: {
    paddingBottom: theme.spacing.sm,
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export const SignHeaderBar = () => {
  const { classes, theme } = useStyles();
  const { tabs, setActiveTab, activeTab } = useUiStore();

  const onTabClick = (tab) => {
    setActiveTab(tab);
  };

  const links = tabs.map((tab) => (
    <Anchor
      key={tab}
      component="button"
      type="button"
      className={classes.link}
      underline={false}
      onClick={() => onTabClick(tab)}
    >
      {tab}
    </Anchor>
  ));

  return (
    <Header className={classes.header}>
      <Container size="xl" className={classes.mainSection}>
        <Group position="apart" sx={{ height: "100vp" }}>
          <Group>
            <IconBuildingStore size={28} color={theme.white} />
            <Text
              color={theme.white}
              ff="serif"
              fs="italic"
              fz="xl"
              fw={900}
              align="left"
            >
              React Shop
            </Text>
          </Group>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {links}
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button variant="default" onClick={() => onTabClick("login")}>
              Log in
            </Button>
          </Group>
        </Group>
      </Container>
    </Header>
  );
};
