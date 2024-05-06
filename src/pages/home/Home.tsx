import { HomeFilters, HomeNews } from '@components';
import { AppShell, Group, Burger } from '@uiKits';
import { useDisclosure } from '@mantine/hooks';

const HomePage = () => {

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding='md'
    >

      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom='sm' size='sm' />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom='sm' size='sm' />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p='md'>
        <HomeFilters />
      </AppShell.Navbar>

      <AppShell.Main>
        <HomeNews />
      </AppShell.Main>

    </AppShell>
  );
};

export default HomePage;