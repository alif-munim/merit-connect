import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { Card, Button, Row, Col, Image } from "react-bootstrap";

import PropTypes from "prop-types";

const ProfileItem = ({ profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
} }) => {
    return (
        <>
        <Card className="shadow-sm my-3 rounded">
            <Row>
                <Col md={3} className="my-auto">
                    <Image src={avatar} className="rounded-circle p-3"/>
                </Col>
                <Col md={6} className="my-auto">
                    <Card.Body>
                        <Card.Title>
                            <h4>{name}</h4>
                        </Card.Title>
                        <Card.Text>
                            <p>
                                {status} {company && <span> at {company}</span>} <br/>
                                {location && <span>{location}</span>}
                            </p>
                        </Card.Text>
                        <LinkContainer to={`profile/${_id}`}>
                                <Button variant="primary">View Profile</Button>
                            </LinkContainer>
                    </Card.Body>
                </Col>
                <Col md={3} className="my-auto">
                <ul>
                {skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className="text-primary">
                        <i className="fas fa-check"></i> {skill}
                    </li>
                ))}
                </ul>
                </Col>
            </Row>
        </Card>
        </>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
