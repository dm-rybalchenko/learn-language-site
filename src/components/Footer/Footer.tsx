import Link from 'next/link';
import styled from 'styled-components';

import IconLogo from '../icons/IconLogo';
import Menu from '../Menu/Menu';


const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 96px;
  align-items: center;
  min-width: 100%;
  height: 60px;
  background: ${(props): string => props.theme.colors.primary30};
`;

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <Link href="/eng/films">
        <IconLogo />
      </Link>
      <Menu footer />
    </StyledFooter>
  );
}

export default Footer;
