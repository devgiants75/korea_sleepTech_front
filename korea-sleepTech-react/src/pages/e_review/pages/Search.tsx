import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  return (
    <div>
      <h3>검색 결과</h3>
      <p>검색어: {keyword}</p>
    </div>
  )
}

export default Search