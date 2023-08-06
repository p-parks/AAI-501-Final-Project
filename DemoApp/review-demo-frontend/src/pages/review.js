import React from 'react';
import ReviewForm from '../components/ReviewForm';

function ReviewPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center'
    }}>
      <h1>AI Star Review Demo</h1>
      <ReviewForm />
    </div>
  );
}

export default ReviewPage;
