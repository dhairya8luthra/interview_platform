import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
  } from '@mantine/core';
  import Logo from './Logo';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './HeaderMegaMenu.module.css';
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];
  
  export default function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color="white" />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500} style={{ color: 'white' }}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed" style={{ color: 'white' }}>
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box pb={60}>
        <header
          className={classes.header}
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          <Group justify="space-between" h="100%">
            <Logo />
  
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link} style={{ color: 'white' }} onMouseEnter={(e) => (e.currentTarget.style.color = ' rgb(38, 96, 223)')}
  onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
                Home
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                <a href="#" className={classes.link} style={{ color: 'white' }} onMouseEnter={(e) => (e.currentTarget.style.color = ' rgb(38, 96, 223)')}
  onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Features
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color="black"
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ backgroundColor: 'black' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500} style={{ color: 'white' }}>
                      Features
                    </Text>
                    <Anchor href="#" fz="xs" style={{ color: 'white' }}>
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" style={{ borderColor: 'white' }} />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter} style={{ backgroundColor: 'black' }}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm" style={{ color: 'white' }}>
                          Get started
                        </Text>
                        <Text size="xs" color="dimmed" style={{ color: 'white' }}>
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link} style={{ color: 'white' }} onMouseEnter={(e) => (e.currentTarget.style.color = '  ')}
  onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
                Learn
              </a>
              <a href="#" className={classes.link} style={{ color: 'white' }} onMouseEnter={(e) => (e.currentTarget.style.color = ' rgb(38, 96, 223)')}
  onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
                Academy
              </a>
            </Group>
  
            <Group visibleFrom="sm">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" style={{ borderColor: 'white' }} />
  
            <a href="#" className={classes.link} style={{ color: 'white' }}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color="white"
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link} style={{ color: 'white' }}>
              Learn
            </a>
            <a href="#" className={classes.link} style={{ color: 'white' }}>
              Academy
            </a>
  
            <Divider my="sm" style={{ borderColor: 'white' }} />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }
  