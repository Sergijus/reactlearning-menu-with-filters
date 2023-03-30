import { useState } from 'react';
import Filters from './components/Filters';
import { Menu } from './components/Menu';
import Title from './components/Title';
import data from './data';

const categories = ['All', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);

  const filterMenu = (category) => {
    console.log(category);
    if (category === 'All') {
      setMenuItems(data);
      return;
    }
    let newMenuItems = data.filter((item) => item.category === category);
    setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our Menu" />
        <Filters categories={categories} filterMenu={filterMenu} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
