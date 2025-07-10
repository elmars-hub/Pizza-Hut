import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Our Delicious Menu
          </h1>
          <p className="text-lg text-stone-600">
            Choose from our selection of handcrafted pizzas
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
