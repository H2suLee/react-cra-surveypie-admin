import { useState } from 'react';
import { Popover, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function AddButton({ addQuestion }) {
  const [visible, setVisible] = useState(false);
  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };
  return (
    <AddButtonWrapper>
      <Popover
        content={
          <div>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('select');
              }}
            >
              객관식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('text');
              }}
            >
              단답식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('textarea');
              }}
            >
              서술식
            </Button>
          </div>
        }
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
        placement="right"
      >
        <PlusCircleOutlined />
      </Popover>
    </AddButtonWrapper>
  );
}

const AddButtonWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
export default AddButton;
