import { List } from 'antd';
import { Helmet } from '@modern-js/runtime/head';
import { useLoaderData } from '@modern-js/runtime/router';
import Item from '../components/Item';

function Index() {
  const { data } = useLoaderData() as LoaderData;
  return (
    <div>
      <Helmet>
        <title>All</title>
      </Helmet>
      <List
        dataSource={data}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default Index;
