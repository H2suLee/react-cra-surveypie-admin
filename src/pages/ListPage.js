import MainLayout from '../layouts/MainLayout';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { Flex, Space, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PAGE_SIZE = 20;

function ListPage() {
  const { data, error } = useSWR('/surveys', fetcher);
  console.log('data', data);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  if (error) {
    return 'error2';
  }

  if (!data) {
    return 'loading...';
  }
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
        return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;
      },
    },
    {
      title: '액션',
      dataIndex: 'id',
      key: 'action',
      render: (key) => {
        return <button onClick={() => console.log('click')}>삭제</button>;
      },
    },
  ];

  return (
    <MainLayout selectedKeys={['list']}>
      <Table
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        pagination={{
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        onChange={(pagination) => setPage(pagination.current)}
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
