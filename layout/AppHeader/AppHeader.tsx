import { Burger, Container, createStyles, Group, Header } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  {
    label: 'Work',
    link: '/work',
  },
];

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const AppHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      <a className={cx(classes.link, { [classes.linkActive]: router.pathname === link.link })}>
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        Eddie Chok
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
};

export default AppHeader;
