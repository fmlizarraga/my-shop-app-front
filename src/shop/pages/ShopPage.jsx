import { createStyles, Flex } from "@mantine/core";
import { AboutLayout, HeaderTabsColored, HomeLayout, ShopLayout } from "../"

// TODO esto tiene que estar en el store global ~
const activeView = 'Shop';

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
  const { classes } = useStyles();
  const selectViev = () => {
    if( activeView === 'Shop' ) return <ShopLayout/>
    else if( activeView === 'About' ) return <AboutLayout/>
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
