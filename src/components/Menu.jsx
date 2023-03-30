import MenuCard from './MenuCard';

export const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        console.log(item);
        const { id } = item;
        return <MenuCard {...item} key={id} />;
      })}
    </div>
  );
};
