import React from 'react';

function Notfound() {
  return (
    <div>
      <h1 className="display-4">
        {' '}
        <span className="text-danger">404</span> Page not found
      </h1>
      <p className="lead">This page does not exists</p>
    </div>
  );
}

export default Notfound;
