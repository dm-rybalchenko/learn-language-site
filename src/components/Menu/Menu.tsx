import Link from 'next/link';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { TConditionReturn } from '@/interfaces/styled.types';


const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 76px;
`;

interface ILinkProps {
  active?: boolean;
}

const StyledLink = styled(Link)<ILinkProps>`
  font-weight: 500;
  &:hover {
    color: ${(props): string => props.theme.colors.primary30};
  }

  ${(props): TConditionReturn =>
    Boolean(props.active) &&
    css`
      color: ${(props): string => props.theme.colors.primary30} !important;
    `}
`;

function Menu(): JSX.Element {
  const router = useRouter();

  const classes = {
    about: router?.route === '/about',
    eng: router?.query?.lang === 'eng',
    spa: router?.query?.lang === 'spa',
  };

  return (
    <StyledMenu>
      <StyledLink active={classes.about} href="/about">
        О сайте
      </StyledLink>
      <StyledLink active={classes.eng} href="/eng/films">
        Английский
      </StyledLink>
      <StyledLink active={classes.spa} href="/spa/films">
        Испанский
      </StyledLink>
    </StyledMenu>
  );
}

export default Menu;
