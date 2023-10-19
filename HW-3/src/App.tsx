import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import Button from '@mui/material/Button';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Steps } from './components/Steps';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Footer } from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="box">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Steps></Steps>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
