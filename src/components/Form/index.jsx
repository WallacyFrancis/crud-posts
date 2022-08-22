import React from 'react';

export default function index({children, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>{children}</form>
  )
}
