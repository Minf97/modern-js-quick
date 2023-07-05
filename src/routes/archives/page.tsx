import { List } from 'antd';
import { Helmet } from '@modern-js/runtime/head';
import Item from '../../components/Item';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const getMockArchivedData = () =>
  getAvatar([
    { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
    { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  ]);
function Index() {
  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>Archives</title>
      </Helmet>
      <List
        dataSource={getMockArchivedData()}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default Index;
