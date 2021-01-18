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
        <Card className="shadow my-3 rounded">
            <Card.Body>
              <Card.Text>
                <p className="my-1">{text}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="my-auto">                   
              <Row >
                <Col md={1}>
                  <Link to={`/profile/${user}`}>
                    <Image src={avatar} className="rounded-circle post-image"/>
                  </Link>
                </Col>
                <Col md={11} className="my-auto">
                  <Row>
                    <Link to={`/profile/${user}`}>
                      <h4 className="mb-0">{name}</h4>
                    </Link>
                  </Row>
                  <Row>
                    <Moment format="YYYY/MM/DD">{date}</Moment>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
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
