import { HomePage } from './portfolio/pages/HomePage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Profile } from './portfolio/pages/Profile';
import { MainLayout } from './portfolio/MainLayout';
import { Skills } from './portfolio/pages/Skills';
import { Projects } from './portfolio/pages/Projects';
import { Contact } from './portfolio/pages/Contact';
import './index.css';
import React from 'react';

const PageWrapper: React.FC<{ children: React.ReactNode; id?: string }> = ({ children }) => <div className="page">{children}</div>;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <PageWrapper key={location.pathname}>
            <HomePage />
          </PageWrapper>
        }
      />
      <Route element={<MainLayout />}>
        <Route
          path="/profile"
          element={
            <PageWrapper key={location.pathname}>
              <Profile />
            </PageWrapper>
          }
        />
        <Route
          path="/skills"
          element={
            <PageWrapper key={location.pathname}>
              <Skills />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper key={location.pathname}>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper key={location.pathname}>
              <Contact />
            </PageWrapper>
          }
        />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative' }}>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
