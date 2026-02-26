import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function AddButton() {
  return (
    <AddButtonWrapper>
      <PlusCircleOutlined />
    </AddButtonWrapper>
  );
}

const AddButtonWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
export default AddButton;
