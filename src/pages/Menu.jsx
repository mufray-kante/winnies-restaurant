import React from 'react';
import FoodCard from '../components/FoodCard';
import waffle from '../assets/images/waffle.jpg';

const Menu = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <FoodCard
          image={waffle}
          title="Waffles & Coffee"
          description="Golden crispy waffles served with hot fresh coffee."
          price="450"
        />
      </div>
    </div>
  );
};

export default Menu;
