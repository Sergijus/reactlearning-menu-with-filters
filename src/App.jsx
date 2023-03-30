import { useState } from 'react';
import Filters from './components/Filters';
import { Menu } from './components/Menu';
import Title from './components/Title';
import data from './data';

const categories = ['All', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  return (
    <main>
      <section className="menu">
        <Title title="Our Menu" />
        <Filters categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
