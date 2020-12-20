import React from "react";
import ReactGoogleSlides from "react-google-slides";
import { Container } from "react-bootstrap";
 
const SlideShow = () => {
  return (
    <Container className="justify-content-center">
      <ReactGoogleSlides
      width="100%"
      slidesLink="https://docs.google.com/presentation/d/19Z3SfqXQWiOFyrJpshjwTVbmpWtTO5jj1XVCNdAYbdg"
      slideDuration={5}
      showControls
      loop
    />
    </Container>
    
  );
}

export default SlideShow;