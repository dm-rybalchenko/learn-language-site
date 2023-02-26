import Link from 'next/link';
import styled from 'styled-components';

import IconLogo from '../icons/IconLogo';
import Menu from '../Menu/Menu';


const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  min-width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(50px);
`;

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Link href="/eng/films">
        <IconLogo />
      </Link>
      <Menu />
    </StyledHeader>
  );
}

export default Header;
