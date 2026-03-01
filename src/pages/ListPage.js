import MainLayout from '../layouts/MainLayout';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { Flex, Space, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PAGE_SIZE = 20;
const columns = [
  {
    title: '번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '생성일',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt) => {
      const time = new Date(createdAt);
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: '액션',
    dataIndex: 'id',
    key: 'action',
    render: (id) => {
      return <button onClick={() => console.log('click ', id)}>삭제</button>;
    },
  },
];

function ListPage() {
  const { data, error } = useSWR('/surveys', fetcher);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  if (error) {
    return 'error2';
  }

  if (!data) {
    return 'loading...';
  }

  return (
    <MainLayout selectedKeys={['list']}>
      <Table
        columns={columns}
        /*
          dataSource={data} 로 했을 때, 데이터마다 key 가 없으면 에러남. data의 id를 key 로 정해주는 별도의 작업이 필요
        */
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        pagination={{
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        // 페이지 변경을 위해 onChange 정의
        onChange={(pagination) => setPage(pagination.current)}
        // 행에 대한 이벤트 정의, record 는 데이터의 {}, rowIndex는 맨위부터 0,1,2,..
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate(`/builder/${record.id}`);
            }, // click row
          };
        }}
      />
    </MainLayout>
  );
}

export default ListPage;
