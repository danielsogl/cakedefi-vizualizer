import { Search, Home, Calculator, ChartArcs } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

const data = [
  {
    icon: <Home size={16} />,
    color: 'blue',
    label: 'Transaction Virtualizer',
    href: '/',
  },
];

export function MainNavigation() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
          backgroundColor:
            router.asPath === href
              ? theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0]
              : undefined,
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export default MainNavigation;
