// src/components/Home.js

import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Example from './Button';
import { DrawerWithNavigation } from './Drawer'; // Import the DrawerWithNavigation component
import '../index.css';
import { Button, Drawer } from '@material-tailwind/react';
import { CarouselTransition } from './Carousel';
import { FooterWithSocialLinks } from './Footer';
import { StickyNavbar } from './Navigation';
import Footer from './Footer2';
import { NavbarDefault } from './Navbar';

function Home() {
  return (
    <div>
      <NavbarDefault />
      <StickyNavbar />
      <CarouselTransition />
    
      <Header />
      <ProductList />
      <Button />
      
      <DrawerWithNavigation />

      <FooterWithSocialLinks />
      <Button />
      <Footer />
    
      
    </div>
    
    
  );
}

export default Home;
