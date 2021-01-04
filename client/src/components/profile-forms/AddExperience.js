import React, { Fragment, useState } from 'react'
import { Link, withRouter } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../layout/FormContainer";

import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: "",
        title: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: ""
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
        addExperience(formData, history);
        history.push("/dashboard");
    }

    return (
        <Fragment>
            <FormContainer>
                <h1>Add Experience</h1>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="* Job Title" name="title" 
                    value={title} onChange={e => onChange(e)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="* Company" name="company" value={company} onChange={e => onChange(e)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <h4>From Date</h4>
                        <Form.Control type="date" name="from" value={from} onChange={e => onChange(e)}/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Check 
                        label="Current Job"
                        type="checkbox" 
                        name="current" 
                        checked={current} 
                        value={current} 
                        onChange={e => { 
                        setFormData({ ...formData, current: !current }); 
                        toggleDisabled(!toDateDisabled)
                        }} value="" />
                    </Form.Group>
                    <Form.Group>
                        <h4>To Date</h4>
                        <Form.Control type="date" name="to" value={to} onChange={e => onChange(e)} 
                            disabled={toDateDisabled ? "disabled" : ""}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            name="description"
                            rows={5}
                            placeholder="Program Description"
                            value={description} onChange={e => onChange(e)}
                        ></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                    <Link className="btn btn-light my-3" to="/dashboard">
			      	    Go Back
			        </Link>
                </Form>
            </FormContainer>
            {/* <h1 className="large text-primary">
            Add An Experience
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any developer/programming
                positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => {
                e.preventDefault();
                addExperience(formData, history)
            }}>
                <div className="form-group">
                    <input type="text" placeholder="* Job Title" name="title" 
                    value={title} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Company" name="company" value={company} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)}/>
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={e => onChange(e)}/>
                </div>
                <div className="form-group">
                    <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => { 
                        setFormData({ ...formData, current: !current }); 
                        toggleDisabled(!toDateDisabled)
                        }} /> Current Job</p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to} onChange={e => onChange(e)} 
                        disabled={toDateDisabled ? "disabled" : ""}/>
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Job Description"
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form> */}
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(
    null, 
    { addExperience }
)(withRouter(AddExperience));
