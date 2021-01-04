import axios from "axios";

import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../layout/FormContainer";


import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [uploading, setUploading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <FormContainer>
        <h1>Create Your Profile</h1>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="status">
            <Form.Label>Professional Status</Form.Label>
            <Form.Control name="status" as="select" value={status} onChange={(e) => onChange(e)}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows={5} 
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}/>
          </Form.Group>

          <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={company}
                  onChange={(e) => onChange(e)}
              ></Form.Control>
          </Form.Group>

          <Form.Group controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="website"
                  name="website"
                  value={website}
                  onChange={(e) => onChange(e)}
              ></Form.Control>
          </Form.Group>

          <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="location"
                  name="location"
                  value={location}
                  onChange={(e) => onChange(e)}
              ></Form.Control>
          </Form.Group>

          <Form.Group controlId="skills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="skills"
                  name="skills"
                  value={skills}
                  onChange={(e) => onChange(e)}
              ></Form.Control>
          </Form.Group>

          <Button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light my-3"
          >Add Social Links</Button>

          {displaySocialInputs && (
          <Fragment>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                <i className="fab fa-twitter fa-2x"></i>
              </Form.Label>
              <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
              </Col>
              
            </Form.Group>

            <Form.Group as={Row}>
            <Form.Label column sm="2">
              <i className="fab fa-facebook fa-2x"></i>
              </Form.Label>
              <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
              </Col>
              
            </Form.Group>

            <Form.Group as={Row}>
            <Form.Label column sm="2">
              <i className="fab fa-youtube fa-2x"></i>
              </Form.Label>
              <Col sm="10">
              <Form.Control
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
              </Col>
              
            </Form.Group>

            <Form.Group as={Row}>
            <Form.Label column sm="2">
              <i className="fab fa-linkedin fa-2x"></i>
              </Form.Label>
              <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
              </Col>
              
            </Form.Group>

            <Form.Group as={Row}>
            <Form.Label column sm="2">
              <i className="fab fa-instagram fa-2x"></i>
              </Form.Label>
              <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
              </Col>
              
            </Form.Group>
          </Fragment>
        )}
        <Button variant="primary" type="submit">
              Submit
            </Button>

            <Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
        </Form>
      </FormContainer>
      
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
