import styled from "styled-components";
import { ReactComponent as houses } from '../../assets/icon/houses.svg'
import { ReactComponent as filter } from '../../assets/icon/filter.svg'
import { ReactComponent as search } from '../../assets/icon/search.svg'
import { Select } from 'antd';


const Container = styled.div`
display: flex;
padding: var(--padding);
padding-top: 10px;
padding-bottom: 10px;
gap: 20px;
width: 100%;
max-width: 1440px;
margin: auto;
`;

const Icons = styled.div``;
Icons.Search = styled(search)`
margin-right: 8px;
`;
Icons.Filter = styled(filter)`
margin-right: 8px;
`;
Icons.Houses = styled(houses)`
margin-right: 8px;
`;
const MenuWrapper = styled.div`
padding: 30px;
background:white ;
border: 1px solid #E6E9EC;
`;
const Section = styled.div`
margin-bottom: 20px;
display: flex;
gap: 20px;
`;

const SelectAnt = styled(Select)`
min-width: 200px;
max-width: 200px;
.ant-select-selector {
    height: 44px !important;
    display: flex !important;
    align-items: center !important;
}
`;

export { Container, SelectAnt, Icons, MenuWrapper, Section }