import Link from 'next/link';
import { useRouter } from 'next/router';
import { SingleValue } from 'react-select';
import styled, { css } from 'styled-components';

import Select from '../Select/Select';
import IconAudioBook from '../icons/IconAudioBook';
import IconBook from '../icons/IconBook';
import IconFilm from '../icons/IconFilm';

import { IOption } from '../Select/Select.types';
import { TConditionReturn } from '@/interfaces/styled.types';
import { ILinkProps } from './Fitrers.types';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin: 0 30px;
  padding: 46px 48px 62px;
  background: ${(props): string => props.theme.colors.primary30};
  border-radius: 16px;
`;

const Selects = styled.div`
  display: flex;
  gap: 66px;
`;

const Links = styled.div`
  display: flex;
  gap: 80px;
`;

const StyledLink = styled(Link)<ILinkProps>`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 14px;
  color: ${(props): string => props.theme.colors.secondary30} !important;
  &:hover {
    color: ${(props): string => props.theme.colors.secondary10} !important;
    & rect {
      fill: ${(props): string => props.theme.colors.secondary10};
    }
  }
  &:active {
    color: ${(props): string => props.theme.colors.secondary40} !important;
    & rect {
      fill: ${(props): string => props.theme.colors.secondary40};
    }
  }

  ${(props): TConditionReturn =>
    Boolean(props.active) &&
    css`
      &, &:hover, &:active {
        color: ${(props): string => props.theme.colors.white} !important;
		font-weight: 700;
        & rect {
          fill: ${(props): string => props.theme.colors.white};
        }
      }
    `}
`;

function Filters(): JSX.Element {
  const { query, pathname } = useRouter();

  const options1 = [
    { value: 'A1', name: 'Начальный A1' },
    { value: 'A2', name: 'Ниже среднего A2' },
    { value: 'B1', name: 'Средний B1' },
    { value: 'B2', name: 'Выше среднего B2' },
    { value: 'A1', name: 'Продвинутый A1' },
  ];
  const options2 = [
    { value: 'Детектив', name: 'Детектив' },
    { value: 'Роман', name: 'Роман' },
    { value: 'Приключения', name: 'Приключения' },
    { value: 'Рассказы', name: 'Рассказы' },
  ];
  const options3 = [
    { value: 'Легкие', name: 'Легкие' },
    { value: 'Сложные', name: 'Сложные' },
    { value: 'Короткие', name: 'Короткие' },
    { value: 'Длинные', name: 'Длинные' },
  ];

  const handleChange = (value: SingleValue<IOption>): void => {
    console.log(value);
  };

  return (
    <Wrapper>
      <Links>
        <StyledLink
          active={pathname.includes('/films')}
          href={`/${query.lang}/films`}
        >
          <IconFilm /> Фильмы
        </StyledLink>
        <StyledLink
          active={pathname.includes('/books')}
          href={`/${query.lang}/books`}
        >
          <IconBook /> Книги
        </StyledLink>
        <StyledLink
          active={pathname.includes('/audio-books')}
          href={`/${query.lang}/audio-books`}
        >
          <IconAudioBook /> Аудио-книги
        </StyledLink>
      </Links>
      <Selects>
        <Select
          label="Уровень"
          value={options1[0]}
          onChange={handleChange}
          options={options1}
        />
        <Select
          label="Жанр"
          value={options2[0]}
          onChange={handleChange}
          options={options2}
        />
        <Select
          label="Сортировать"
          value={options3[0]}
          onChange={handleChange}
          options={options3}
        />
      </Selects>
    </Wrapper>
  );
}

export default Filters;
