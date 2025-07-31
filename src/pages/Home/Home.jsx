import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Navbar/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/foodDisplay/foodDisplay'; // ✅ path should match your file

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} /> {/* ✅ Capitalized usage */}
    </div>
  );
};

export default Home;
