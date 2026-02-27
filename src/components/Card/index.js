import { DeleteOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';
function Card({
  title,
  desc,
  children,
  onUpBtnClick,
  onDownBtnClick,
  onDelBtnClick,
}) {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>
      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button type="text" icon={<UpOutlined />} onClick={onUpBtnClick} />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={onDelBtnClick}
          />
          <Button
            type="text"
            icon={<DownOutlined />}
            onClick={onDownBtnClick}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
    </CardWrapper>
  );
}

const ButtonGroupWrapper = styled.div`
  position: absolute;
  left: calc(100%);
  top: 0;
  display: none;
`;
const ButtonGroup = styled.div`
  background: #ffffff;
  margin-left: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

const CardWrapper = styled.div`
  border: 1px solid #dddddd;
  width: 500px;
  margin: 30px auto;
  background: #ffffff;
  padding: 20px;
  position: relative;

  &:hover ${ButtonGroupWrapper} {
    display: block;
  }
`;

const Head = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 5px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Desc = styled.div`
  color: #666666;
  margin-left: 5px;
`;

const Body = styled.div`
  padding: 5px;
`;

export default Card;
