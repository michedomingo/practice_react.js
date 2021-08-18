import React, { useState } from 'react';

export default function SearchDogs() {
  const [query, setQuery] = useState('');
  console.log(query);

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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit' className='button'>
          Search
        </button>
      </form>
    </>
  );
}
