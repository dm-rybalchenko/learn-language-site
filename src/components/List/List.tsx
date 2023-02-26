import ItemList from '../ItemList/ItemList';
import Flex from '../UI/Flex/Flex';

import { IListProps } from './List.types';


function List({ items }: IListProps): JSX.Element {
  return (
    <Flex gap={50} padding='50px 0 50px 0'>
      {items.map((item) => (
        <ItemList key={item.id} item={item} />
      ))}
    </Flex>
  );
}

export default List;
