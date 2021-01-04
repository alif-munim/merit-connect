import React from 'react'
import PropTypes from 'prop-types'

import { Card, Row, Col, Image } from "react-bootstrap";

const ProfileTop = ({ profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
}}) => {
    return (
        <>
        <Card className="card-gradient rounded">
            <Row>
                <Col md={4} className="mx-auto mt-5">
                    <Image src={avatar} className="rounded-circle"/>
                </Col>
            </Row>
            
            <Card.Body className="mx-auto text-center">
                <Card.Title className="mx-auto">
                    <h1 className="text-white">{name}</h1>
                </Card.Title>
                <p className="text-white">{status} {company && <span>at {company}</span>} <br/>
                {location && <span>{location}</span>}
                </p>
            </Card.Body>
            
            <Row className="mx-auto mb-5">
                {
                    website && (
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            <i className="social-icon fas fa-globe fa-2x"></i>
                        </a>
                    )
                }

                {
                    social && social.twitter && (
                        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                            <i className="social-icon fab fa-twitter fa-2x"></i>
                        </a>
                    )
                }
                
                {
                    social && social.facebook && (
                        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                            <i className="social-icon fab fa-facebook fa-2x"></i>
                        </a>
                    )
                }
                
                {
                    social && social.linkedin && (
                        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="social-icon fab fa-linkedin fa-2x"></i>
                        </a>
                    )
                }

                {
                    social && social.youtube && (
                        <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                            <i className="social-icon fab fa-youtube fa-2x"></i>
                        </a>
                    )
                }
                
                {
                    social && social.instagram && (
                        <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                            <i className="social-icon fab fa-instagram fa-2x"></i>
                        </a>
                    )
                }
                
                
                
            </Row>
                
                
            
        </Card>
        
        </>
    );
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileTop;
