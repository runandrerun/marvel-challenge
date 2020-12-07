import React from 'react';
import {HeaderContainer} from '../../containers';
import {Profile} from '../../components';
import {AboutSection} from './About.styles';

export default function About() {
  return (
    <AboutSection id="about">
      <HeaderContainer />
      <Profile>
        <Profile.Header>
          About me
        </Profile.Header>
        <Profile.Body>
          Hi, I'm André! 👋
        </Profile.Body>
        <Profile.Body>
          I'm a former Senior Network Engineer (6+ years of experience) turned Software Engineer (2+ years of experience).
        </Profile.Body>
        <Profile.Body>
          I decided to pivot and change careers when I felt that I wasn't satisfied – I quit, traveled, and returned to attend a coding bootcamp. I never looked back, and I've never been happier. In fact, my only regret is that I didn't make this career change sooner.
        </Profile.Body>
        <Profile.Body>
          I'm currently now looking for new opportunities in which I can continue to learn and grow into a better developer. Ideally, I'd love to be in the pet tech or health space.
        </Profile.Body>
        <Profile.Body>
          I built this simple application to showcase the following:
        </Profile.Body>
        <Profile.List>
          <Profile.ListItem>React</Profile.ListItem>
          <Profile.ListItem>Styled components</Profile.ListItem>
          <Profile.ListItem>React Router DOM</Profile.ListItem>
          <Profile.ListItem>Hooks</Profile.ListItem>
          <Profile.ListItem>Context</Profile.ListItem>
          <Profile.ListItem>API Fetching</Profile.ListItem>
        </Profile.List>
      </Profile>
    </AboutSection>
  );
};
