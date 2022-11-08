import React from 'react'

const List = ({ title, list, handleDelete, handleComplete }) => {
    



  return (
    <section className='list-section'>
      <h2 className='list-title'>{title}</h2>

      <div className='list'>
      {list.length > 0 ? list.map(item => (
        <div className={'list-item' + (item.complete ? ' is-complete' : '')} key={item.title}>
          <p className='item-title'>{item.title}</p>
          <div className='list-buttons'>
          <button className='complete-btn' onClick={() => {handleComplete(item)}}><i className="fa-solid fa-check"></i></button>
          <button className='delete-btn' onClick={() => {handleDelete(item)}}><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
        )) : (
          <p>zero tasks</p>
        )}
      </div>

    </section>

  )
}

export default List