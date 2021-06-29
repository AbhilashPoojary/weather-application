import React from "react";

export default function Input({ checkResults, keyword, handleChange }) {
  return (
    <form onSubmit={checkResults}>
      <div className='row'>
        <div className='col-md-8 col-8'>
          <input
            type='text'
            name='query'
            value={keyword.text}
            onChange={(e) => handleChange(e)}
            className='form-control w-80'
            placeholder='Search your city'
          />
        </div>
        <div className='col-md-4 col-4'>
          <button className='btn btn-success'>search</button>
        </div>
      </div>
    </form>
  );
}
