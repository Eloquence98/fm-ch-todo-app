import React from 'react'
import Footer from './Footer'

function Stats({ sortedItems, onClearCompleted, onSort, width }) {
  return (
    <div className='stats'>
      {sortedItems.length === 0 ? (
        <p> No items </p>
      ) : (
        <p>{sortedItems.length} items left</p>
      )}

      {width && <Footer onSort={onSort} />}

      <button className='button' onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  )
}

export default Stats
