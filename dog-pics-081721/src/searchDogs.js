import React from 'react';

export default function SearchDogs() {
  return (
    <>
      <form className='form'>
        <label className='label' htmlFor='query'>
          🐶
        </label>
        <input
          type='text'
          name='query'
          className='input'
          placeholder={`Try "corgie" or "beagle"`}
        />
        <button type='submit' className='button'>
          Search
        </button>
      </form>
    </>
  );
}
