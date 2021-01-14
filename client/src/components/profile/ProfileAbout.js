import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import { Card, Row, Col, Nav, Button, ListGroup } from "react-bootstrap";

const ProfileAbout = ({ profile: {
    bio,
    skills,
    user: { name }
}}) => {

    const [aboutContent, setAboutContent] = useState("bio");
    
    return (
        <>
        <div 
        // className="profile-about bg-light p-2"
        >
            
            { bio && (
                <Card className="shadow my-3 rounded">
                    
                    <Card.Body>
                    <Card.Title>
                        <h2 className="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
                    </Card.Title>
                        <p>{bio}</p>
                    </Card.Body>
                
                </Card>
            )}

            
            <Card className="shadow my-3 rounded">
                    <Card.Body>
                        <Card.Title>
                        <h2 className="text-primary">Skill Set</h2>
                        </Card.Title>
                        <ListGroup horizontal={'md'}>
                            {
                                skills.map((skill, index) => (
                                    <ListGroup.Item key={index} className="p-1 mr-3 borderless">
                                        <i className="fas fa-check"></i> {skill}
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                        
                    </Card.Body>
            </Card>
            
            
        </div>
        </>
    )
    
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileAbout
