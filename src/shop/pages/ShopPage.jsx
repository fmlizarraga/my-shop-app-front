import { createStyles, Flex } from "@mantine/core";
import { AboutLayout, HeaderTabsColored, HomeLayout, ShopLayout } from "../"
import { useUiStore } from "../../hooks";

const useStyles = createStyles( theme => ({
  root: {
    position: 'absolute',
    padding: 0,
    margin: 0,
    minHeight: "100%",
    maxHeight: "100vp",
    width: "100%",
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
  },
  
  inner: {
    padding: 0,
    margin: 0,
    position: 'relative',
    height: '100%',
  },

  content: {
    margin: theme.spacing.md,
    marginTop: 120,
    position: 'relative',
  }

}) );

export const ShopPage = () => {
  const { tabs, activeTab } = useUiStore();
  const { classes } = useStyles();
  const selectViev = () => {
    if( activeTab === tabs[1] ) return <ShopLayout/>
    else if( activeTab === tabs[2] ) return <AboutLayout/>
    else return <HomeLayout/>
  }
  return (
    <Flex
      className={ classes.root }
      gap="md"
      justify="stretch"
      align="stretch"
      direction="column"
      wrap="wrap"
    >
      <div className={classes.inner} >
        <HeaderTabsColored tabs={['Home', 'Shop', 'About']} />
        <div className={classes.content} >
          { selectViev() }
        </div>
      </div>
    </Flex>
  )
}
