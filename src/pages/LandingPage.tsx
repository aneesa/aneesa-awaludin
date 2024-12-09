// src/pages/LandingPage.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { content } from '../content/nav';
import Div from '../components/atoms/Div';
import Flex from '../components/atoms/Flex';
import Text from '../components/atoms/Text';
import NavDrawer from '../components/organisms/NavDrawer';
import SettingDrawer from '../components/organisms/SettingDrawer';
import Home from '../components/templates/Home';

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
    case 'home':
      section = <Home />;
      break;
    default:
      section = <Text>Section {id}</Text>
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
          className="h-full !p-0 w-0 md:w-72 ml-0 md:-ml-4">
          *
        </Div>

        {/* Main Content - Adjusts depending on screen size */}
        <Div
          variant="light"
          className="h-full flex-1 !p-0 overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hidden">
          {/* Content area with scrollable sections */}
          <Div className="h-full flex flex-col !p-0">
            {content?.navs ? content.navs.map(({ id }: SectionProps) => getSection({ id })) : undefined}
            <Div className="flex-shrink-0 min-h-[calc(100vh-2rem)] snap-start bg-blue-200 !p-0">
              Section 2 - Very long page

              {/* Generate a long list of content */}
              {Array.from({ length: 50 }, (_, index) => (
                <p key={index}>This is a long paragraph #{index + 1}. Repeat this text for testing purposes.</p>
              ))}
            </Div>
            <Div className="flex-shrink-0 min-h-[calc(100vh-2rem)] snap-start bg-blue-300 !p-0">
              Section 3
            </Div>
            <Div className="flex-shrink-0 min-h-[calc(100vh-2rem)] snap-start bg-blue-400 !p-0">
              Section 4
            </Div>
          </Div>
        </Div>
      </Flex>

      {/* Settings Drawer */}
      <SettingDrawer />
    </Div>
  );
};

export default LandingPage;
