import React, { Fragment } from "react";

import { Card, Row, Col, Button, Image } from "react-bootstrap";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({ 
  auth, 
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date},
  showActions
}) => {
    return (
      <>
        <Card className="shadow my-3 rounded p-3">
            <Row>
                <Col md={2} className="my-auto text-center">
                  <Link to={`/profile/${user}`}>
                    <Image src={avatar} className="rounded-circle p-3 post-image"/>
                    <h4>{name}</h4>
                  </Link>
                </Col>
                <Col md={10} className="my-auto">
                    <p className="my-1">{text}</p>
                    <p className="small">
                    Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
                    </p>
                    {showActions && 
              <Fragment>
                <button onClick={e => addLike(_id)} type="button" className="btn btn-light">
                  <i className="fas fa-thumbs-up"></i>{" "}
                  {likes.length > 0 && (
                      <span>{likes.length}</span>
                  )}
                </button>
                <button onClick={e => removeLike(_id)} type="button" className="btn btn-light">
                  <i className="fas fa-thumbs-down"></i>
                </button>
                <Link to={`/posts/${_id}`} className="btn btn-primary">
                    Discussion {comments.length > 0 && (
                        <span className='comment-count'>{comments.length}</span>
                    )}
                </Link>
                {!auth.loading && user === auth.user._id && (
                    <button onClick={e => deletePost(_id)} type="button" className="btn btn-danger"> 
                        <i className="fas fa-times"></i>
                    </button>
                )}
            
              </Fragment>
            }
                </Col>
                
            </Row>
        </Card>
        
        </>
    )
}

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { 
  addLike, 
  removeLike,
  deletePost
})(PostItem);
