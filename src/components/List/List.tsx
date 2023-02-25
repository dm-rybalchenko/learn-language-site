import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
`;

const Item = styled.div`
	
`

interface IListProps {
	items: any[]
}

function List ({items}:IListProps) {
	
	return (
		<Wrapper>
			{/* {items.map(item => <Item />) } */}
		</Wrapper>
	);
}


export default List;
