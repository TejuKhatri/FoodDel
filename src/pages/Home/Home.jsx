import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Navbar/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'; // ✅ path should match your file
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} /> {/* ✅ Capitalized usage */}
      <AppDownload/>
    </div>
  );
};

export default Home;
