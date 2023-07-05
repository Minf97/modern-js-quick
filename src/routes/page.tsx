import { List } from 'antd';
import { Helmet } from '@modern-js/runtime/head';
// import 'tailwindcss/base.css';
// import 'tailwindcss/components.css';
// import 'tailwindcss/utilities.css';
// import '../styles/utils.css';
import Item from '../components/Item';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const mockData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },
  { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu' },
]);

function Index() {
  return (
    <div>
      <Helmet>
        <title>All</title>
      </Helmet>
      <List
        dataSource={mockData}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default Index;
