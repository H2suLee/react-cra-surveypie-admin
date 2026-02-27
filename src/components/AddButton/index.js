import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function AddButton({ onClick }) {
  return (
    <AddButtonWrapper>
      <PlusCircleOutlined onClick={onClick} />
    </AddButtonWrapper>
  );
}

const AddButtonWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
export default AddButton;
