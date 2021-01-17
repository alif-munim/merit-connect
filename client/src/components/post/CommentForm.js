import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {

    const [text, setText] = useState("");

    return (
        <>
        <Form className="my-3" onSubmit={e => {
                e.preventDefault();
                addComment(postId, { text });
                setText("");
            }}>
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

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, { 
    addComment
})(CommentForm);
