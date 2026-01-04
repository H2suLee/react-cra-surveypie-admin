import MainLayout from '../layouts/MainLayout';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';

function ListPage() {
  const { data } = useSWR('/surveys', fetcher);
  console.log('data', data);
  return <MainLayout selectedKeys={['list']}>ListPage</MainLayout>;
}

export default ListPage;
