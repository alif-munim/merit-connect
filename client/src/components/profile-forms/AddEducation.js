import React, { Fragment, useState } from 'react'

import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from '../layout/FormContainer';

import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addEducation } from "../../actions/profile";


const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: "",
        degree: "",
        fieldofstudy: "",
        from: "",
        to: "",
        current: false,
        description: ""
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
        addEducation(formData, history);
    }

    return (
        <Fragment>
            <FormContainer>
                <h1>Add Education</h1>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="* Degree" name="degree" 
                        value={degree} onChange={e => onChange(e)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="* School" name="school" value={school} onChange={e => onChange(e)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Field of Study" name="fieldofstudy" value={fieldofstudy} onChange={e => onChange(e)}/>
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
                </Form>
            </FormContainer>
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
}

export default connect(
    null, 
    { addEducation }
)(withRouter(AddEducation));
