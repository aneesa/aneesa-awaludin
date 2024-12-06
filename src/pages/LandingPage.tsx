// src/pages/LandingPage.tsx
import React from 'react';
import NavDrawer from '../components/organisms/NavDrawer';
import SettingDrawer from '../components/organisms/SettingDrawer';
import Div from '../components/atoms/Div';
import Flex from '../components/atoms/Flex';

const LandingPage: React.FC = () => {
  return (
    <Div className="landing-page h-full" variant="light">
      {/* Navigation Drawer */}
      <NavDrawer />

      {/* Main Content Area */}
      <Flex variant="light" className="h-full !p-0">
        {/* This dummy block can be used for visual testing behind the NavDrawer */}
        <Div
          variant="light"
          className="h-full !p-0 w-0 md:w-72 ml-0 md:-ml-4">
          *
        </Div>

        {/* Main Content - Adjusts depending on screen size */}
        <Div
          variant="light"
          className="h-full flex-1 !p-0">
          {/* Content area that pushes right on desktop */}
          Content
        </Div>
      </Flex>

      {/* Settings Drawer */}
      <SettingDrawer />
    </Div>
  );
};

export default LandingPage;
