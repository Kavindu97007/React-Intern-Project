import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContentCard({ title, text, image }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
      {image && <Card.Img variant="top" src={image} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Get it Now</Button>
      </Card.Body>
    </Card>
  );
}

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};

ContentCard.defaultProps = {
  image: '',
};

export default ContentCard;
