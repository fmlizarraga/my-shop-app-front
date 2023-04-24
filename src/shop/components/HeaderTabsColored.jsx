import { useState } from 'react';
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  Header,
  TextInput,
  Button,
  Divider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
  IconShoppingCart,
  IconBuildingStore,
  IconSearch,
} from '@tabler/icons-react';

import { useAuthStore, useUiStore } from '../../hooks';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'fixed',
    width: '100%',
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: `${rem(1)} solid ${
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background
    }`,
    marginBottom: rem(60),
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
      0.1
    ),
  },

  tabs: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    color: theme.white,
    backgroundColor: 'transparent',
    borderColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },

    '&[data-active]': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
      borderColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    },
  },

  search: {
    width: '55%',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  sticky: {
    position: 'fixed',
    top: 0,
    width: '100%',
  },
}));

// interface HeaderTabsProps {
//   user: { name: string; image: string };
//   tabs: string[];
// }

export const HeaderTabsColored = () => {
  const { user } = useAuthStore();
  const { tabs, setActiveTab, activeTab } = useUiStore();
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const onTabClick = (tab) => {
    setActiveTab(tab);
  };

  const onClickCart = () => {
    setActiveTab('Cart');
  };

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab} onClick={ (e) => onTabClick(tab) } >
      {tab}
    </Tabs.Tab>
  ));

  return (
    <Header className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Group>
            <IconBuildingStore size={28} color={theme.white} />
            <Text color={theme.white} ff="serif" fs="italic" fz="xl" fw={900} align="left" >React Shop</Text>
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color={theme.white}
          />

          <TextInput
            placeholder="Search"
            radius='xl'
            className={classes.search}
            rightSection={
              <>
                <Divider orientation='vertical' size='sm' />
                <Button
                  fullWidth
                  radius={0}
                  variant='subtle'
                ><IconSearch size="1rem" stroke={1.5} /></Button>
              </>
            }
            rightSectionWidth='xl'
            // here goes the inputprops...
          />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
            offset={60}
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1, color: theme.white }} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={rem(12)} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                icon={<IconShoppingCart size="0.9rem" stroke={1.5} color={theme.colors.green[6]} />}
                onClick={ onClickCart }
              >
                Your cart
              </Menu.Item>
              <Menu.Item
                icon={<IconHeart size="0.9rem" stroke={1.5} color={theme.colors.red[6]} />}
              >
                Saved products
              </Menu.Item>
              <Menu.Item
                icon={<IconMessage size="0.9rem" stroke={1.5} color={theme.colors.blue[6]} />}
              >
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                Account settings
              </Menu.Item>
              {/* <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}>
                Change account
              </Menu.Item> */}
              <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              {/* <Menu.Item icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}>
                Pause subscription
              </Menu.Item> */}
              <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          defaultValue="Home"
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </Header>
  );
}