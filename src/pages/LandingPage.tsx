// src/pages/LandingPage.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { content } from '../content/nav';
import Div from '../components/atoms/Div';
import Flex from '../components/atoms/Flex';
import NavDrawer from '../components/organisms/NavDrawer';
import SettingDrawer from '../components/organisms/SettingDrawer';
import Home from '../components/templates/Home';
import Experience from '../components/templates/Experience';
import Education from '../components/templates/Education';

interface SectionProps {
  id: string;
}

const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const getSection = ({ id }: SectionProps): React.ReactNode => {
  let section = undefined;
  switch (id) {
    case 'experience':
      section = <Experience />;
      break;
    case 'education':
      section = <Education />;
      break;
    default:
      section = <Home />
  }

  return (
    <Div id={id} className="section flex-shrink-0 min-h-[calc(100vh-2rem)] snap-start !p-0">
      {section}
    </Div>
  )
};

const LandingPage: React.FC = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Ref to hold the timer ID

  // Debounce the selection update to prevent flickering
  const debouncedSetSelected = useCallback(
    (id: string) => {
      // If a timer already exists, clear it
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      // Set a new timer
      timerRef.current = setTimeout(() => {
        setSelected(id); // Update selected after delay
      }, 500); // Adjust the delay as needed
    },
    []
  );

  // Intersection Observer to track which section is currently in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            debouncedSetSelected(entry.target.id); // Use the debounced method to update state
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    // Observe the sections (Make sure the sections are rendered before adding observers)
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    // Clean up the observer on unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [debouncedSetSelected]);

  return (
    <Div className="landing-page h-full" variant="light">
      {/* Navigation Drawer */}
      <NavDrawer onSelected={scrollToSection} updatedSelected={selected} />

      {/* Main Content Area */}
      <Flex variant="light" className="h-full !p-0">
        {/* This dummy block can be used for visual testing behind the NavDrawer */}
        <Div
          variant="light"
          className="h-full !p-0 w-0 md:w-72 ml-0 md:-ml-4"/>

        {/* Main Content - Adjusts depending on screen size */}
        <Div
          variant="light"
          className="h-full flex-1 !p-0 overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hidden">
          {/* Content area with scrollable sections */}
          <Div className="h-full flex flex-col !p-0">
            {content?.navs ? content.navs.map(({ id }: SectionProps) => getSection({ id })) : undefined}
          </Div>
        </Div>
      </Flex>

      {/* Settings Drawer */}
      <SettingDrawer />
    </Div>
  );
};

export default LandingPage;
