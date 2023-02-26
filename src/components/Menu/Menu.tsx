import Link from 'next/link';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { TConditionReturn } from '@/interfaces/styled.types';
import { ILinkProps, IMenuProps } from './Menu.types';


const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 76px;
`;

const StyledLink = styled(Link)<ILinkProps>`
  font-weight: 500;
  &:hover {
    color: ${(props): string => props.theme.colors.primary30};
  }

  ${(props): TConditionReturn =>
    props.$active &&
    !props.footer &&
    css`
      color: ${(props): string => props.theme.colors.primary30} !important;
    `}

  ${(props): TConditionReturn =>
    props.footer &&
    css`
      &,
      &:hover {
        color: ${(props): string => props.theme.colors.white} !important;
      }
    `}
`;

function Menu({ footer }: IMenuProps): JSX.Element {
  const router = useRouter();

  const classes = {
    about: router?.route === '/about',
    eng: router?.query?.lang === 'eng',
    spa: router?.query?.lang === 'spa',
  };

  return (
    <StyledMenu>
      <StyledLink footer={footer} $active={classes.about} href="/about">
        О сайте
      </StyledLink>
      <StyledLink footer={footer} $active={classes.eng} href="/eng/films">
        Английский
      </StyledLink>
      <StyledLink footer={footer} $active={classes.spa} href="/spa/films">
        Испанский
      </StyledLink>
    </StyledMenu>
  );
}

export default Menu;
