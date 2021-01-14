import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card, Row, Col } from "react-bootstrap"

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";
import { getProfileById } from "../../actions/profile";

const Profile = ({ 
    getProfileById, 
    profile: { profile, loading },
    auth,
    match
 }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <Fragment>
           { profile === null || loading ? <Spinner/> : 
            <Fragment>
                <Link to="/profiles" className="btn btn-light mb-3">
                    Back to Profiles
                </Link>
                { auth.isAuthenticated && 
                    auth.loading === false && 
                    auth.user._id === profile.user._id &&
                    <Link to="/edit-profile" className="btn btn-dark">
                        Edit Profile
                    </Link>
                }
                <div 
                // class="profile-grid my-1"
                >
                    <ProfileTop profile={profile} />
                    <ProfileAbout profile={profile} />
                    <Row>
                        <Col>
                        
                        { profile.experience.length > 0 ? (
                                <Card className="shadow my-3 rounded">
                                    <Card.Body>
                                        <Card.Title>
                                        <h2 className="text-primary">Experience</h2>
                                        </Card.Title>
                                        {
                                        profile.experience.map((experience) => (
                                            <ProfileExperience key={experience._id} experience={experience} />
                                        ))
                                    }
                                    </Card.Body>
                                    
                                </Card>
                            ) : (<h4>No experience credientials</h4>)
                        }
                        </Col>
                        <Col>
                        
                        { profile.education.length > 0 ? (
                                <Card className="shadow my-3 rounded">
                                    <Card.Body>
                                        <Card.Title>
                                        <h2 className="text-primary">Education</h2>
                                        </Card.Title>
                                    {
                                        profile.education.map((education) => (
                                            <ProfileEducation key={education._id} education={education} />
                                        ))
                                    }
                                    </Card.Body>
                                    
                                </Card>
                            ) : (<h4>No education credientials</h4>)
                        }
                        </Col>
                    </Row>
                    <div 
                        // className="profile-exp bg-white p-2"
                        >
                        
                    </div>
                    <div 
                        // className="profile-edu bg-white p-2"
                        >
                        
                    </div>

                    {/* { profile.githubusername && (
                        <ProfileGithub username={profile.githubusername}/>
                    )} */}
        
                </div>
            </Fragment>
           }
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, 
    { getProfileById }
)(Profile)
