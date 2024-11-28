// src/pages/LandingPage.tsx
import React from 'react';
import NavDrawer from '../components/organisms/NavDrawer';
import SettingDrawer from '../components/organisms/SettingDrawer';
import Div from '../components/atoms/Div';

const LandingPage: React.FC = () => {
  return (
    <Div className="landing-page h-full" variant="light">
      <NavDrawer />
      <SettingDrawer />
    </Div>
  );
};

export default LandingPage;
