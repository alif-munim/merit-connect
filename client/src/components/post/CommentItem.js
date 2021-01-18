import React, { Fragment } from "react";

import { Row, Col, Image, Card} from "react-bootstrap";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";


const CommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date },
    deleteComment,
    auth
}) => {
    return (
      <>

        <Card className="shadow-sm my-3 rounded p-3">
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
                    {!auth.loading && user === auth.user._id && (
                        <button 
                            onClick={e => deleteComment(postId, _id)} 
                            type="button"
                            className="btn btn-danger">
                                <i className="fas fa-times"></i>
                        </button>
                    )}
                </Col>
                
            </Row>
        </Card>
        {/* <div className="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img
                className="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p className="my-1">
              {text}
            </p>
             <p className="post-date">
                Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>
            {!auth.loading && user === auth.user._id && (
                <button 
                    onClick={e => deleteComment(postId, _id)} 
                    type="button"
                    className="btn btn-danger">
                        <i className="fas fa-times"></i>
                </button>
            )}
          </div>
        </div> */}
        </>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {
    deleteComment
})(CommentItem)
