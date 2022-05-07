import { Navbar } from '@mantine/core';
import MainNavigation from '../main-navigation/main-navigation';

/* eslint-disable-next-line */
export interface MainNavBarProps {
  opened: boolean;
}

export function MainNavBar(props: MainNavBarProps) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      width={{ sm: 300 }}
      hidden={!props.opened}
    >
      <Navbar.Section grow mt="md">
        <MainNavigation />
      </Navbar.Section>
    </Navbar>
  );
}

export default MainNavBar;
