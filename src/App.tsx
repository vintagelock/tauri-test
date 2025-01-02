import './App.css';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { invoke } from '@tauri-apps/api/core';

import {
  AppShell,
  Burger,
  Group,
  ScrollArea,
  NavLink,
  Indicator,
  Divider,
  Tooltip,
  Text,
  Menu,
  rem,
} from '@mantine/core';
import { Avatar } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import MyHead from '@/assets/images/avatar.jpg';

import { ChevronRight } from 'lucide-react';

import { Bug, Info, LayoutDashboard, Settings, Users } from 'lucide-react';

import RouteSwitcher from './components/routeswitcher';

interface MenuItem {
  id: number;
  icon: React.ElementType;
  label: string;
  tooltip: string;
  path: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 0,
    icon: LayoutDashboard,
    label: 'Dashboard',
    tooltip: '-',
    path: '/',
  },
];

function App() {
  const navigate = useNavigate();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [activeNavLink, setActiveNavLink] = useState(0);

  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  // Navigatge to the required page and handles setting the active flag
  function onClickNavItem(item: MenuItem, index: number) {
    setActiveNavLink(index);
    navigate(item.path);
  }

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={desktopOpened} onClick={toggleDesktop} hiddenFrom="sm" size="sm" />
          <div className="p-1 flex items-center justify-center">
            <img src={MyHead} width={42} height={42} />
            <div className="ml-2 text-2xl font-bold text-white font-autowide">ERDPOC</div>
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section grow my="md" component={ScrollArea}>
          {menuItems.map((item, index) => {
            return (
              <Tooltip key={index} label={item.tooltip} openDelay={500}>
                <NavLink
                  variant="filled"
                  key={index}
                  active={index === activeNavLink}
                  label={item.label}
                  onClick={() => onClickNavItem(item, index)}
                  leftSection={<item.icon size={40} />}
                />
              </Tooltip>
            );
          })}
        </AppShell.Section>
        <AppShell.Section>
          <Divider my="md" />

          {/* This menu should probably form part of the UserButton component so we dont re-define */}
          <Menu withArrow>
            <Menu.Target>
              <p>avatar</p>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item leftSection={<Settings style={{ width: rem(12), height: rem(12) }} />}>Settings</Menu.Item>
              <Menu.Item component="a" href="https://google.com">
                A Website
              </Menu.Item>
              <Menu.Item component="a" href="https://eset.com" target="_blank">
                ESET Website
              </Menu.Item>
              <Menu.Label>Billing</Menu.Label>
            </Menu.Dropdown>
          </Menu>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <RouteSwitcher />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
