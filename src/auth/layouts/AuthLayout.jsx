import { Flex, createStyles } from "@mantine/core";
import { SignHeaderBar } from "../components/SignHeaderBar";

const useStyles = createStyles((theme) => ({
  root: {
    position: "absolute",
    padding: 0,
    margin: 0,
    minHeight: "100%",
    maxHeight: "100vp",
    width: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },

  inner: {
    padding: 0,
    margin: 0,
    position: "relative",
    height: "100%",
  },

  content: {
    margin: theme.spacing.md,
    marginTop: 120,
    position: "relative",
  },
}));

export const AuthLayout = ({ children }) => {
  const { classes } = useStyles();
  return (
    <>
      <Flex
        className={classes.root}
        gap="md"
        justify="stretch"
        align="stretch"
        direction="column"
        wrap="wrap"
      >
        <div className={classes.inner}>
          <SignHeaderBar />
          <div className={classes.content}>{children}</div>
        </div>
      </Flex>
    </>
  );
};
