import React, { Fragment, useState } from "react";

import { Form, Button } from "react-bootstrap";
import FormContainer from "../layout/FormContainer";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {

    const [text, setText] = useState("");

    return (
      <>


        <Form className="my-3" onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("")}}>
        <Form.Group>
            {/* <Form.Label>Post</Form.Label> */}
            <Form.Control as="textarea" rows={5} 
            placeholder="Create a post"
            name="post"
            value={text}
            onChange={e => setText(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
}


// Connect state from redux
export default connect(null, {
    addPost
})(PostForm)
