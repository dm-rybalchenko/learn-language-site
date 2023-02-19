import Link from 'next/link';
import styled from 'styled-components';


const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 76px;
  font-weight: 500;
  & a:hover, & a.active {
    color: ${(props): string => props.theme.colors.primary30};
  }
`;

function Menu(): JSX.Element {
  return (
    <StyledMenu>
      <Link href="/about">О сайте</Link>
      <Link href="/eng/films">Английский</Link>
      <Link href="/spa/audio-books">Испанский</Link>
    </StyledMenu>
  );
}

export default Menu;
