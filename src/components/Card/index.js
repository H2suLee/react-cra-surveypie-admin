import styled from 'styled-components';
function Card({ title, desc, children }) {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 1px solid #dddddd;
  width: 300px;
  margin: 30px auto;
  background: #ffffff;
  padding: 20px;
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
