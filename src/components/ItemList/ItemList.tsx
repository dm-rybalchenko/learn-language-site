import Image from 'next/image';
import styled from 'styled-components';

import cover from '../../../public/example-cover.jpg';
import Button from '../UI/Button/Button';
import Flex from '../UI/Flex/Flex';

import { IItemListProps } from './ItemList.types';


const Item = styled(Flex)`
  flex: 1 1 50%;
  height: 354px;
`;

const Cover = styled(Image).attrs({
  width: 240,
  height: 354,
})``;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${(props): string => props.theme.colors.primary10};
`;

const SubTitle = styled.h3`
  font-size: 18px;
  color: ${(props): string => props.theme.colors.secondary50};
`;

const Content = styled.p`
  max-height: 110px;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  overflow: hidden;
`;

function ItemList({ item }: IItemListProps): JSX.Element {
  return (
    <Item>
      <Cover src={cover} alt="cover" />
      <Flex padding="40px 9px 70px 11px" direction="column" gap={8}>
        <Title>{item.name}</Title>
        <SubTitle>{item.level}</SubTitle>
        <Content>{item.descr}</Content>
        <Button border view="primary">
          Подробнее
        </Button>
      </Flex>
    </Item>
  );
}

export default ItemList;
