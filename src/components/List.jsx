import React from 'react'

const List = ({ title, list, handleDelete, handleComplete, clearList }) => {
    



  return (
    <section className='list-section'>
      <h2 className='list-title'>{title}</h2>

      <div className='list'>
      {list.length > 0 ? list.map(item => (
        <div className={'list-item' + (item.complete ? ' is-complete' : '')} key={item.title}>
          <p className='item-title' onClick={() => {handleComplete(item)}}>{item.title}</p>
          <div className='list-buttons'>
          <button className='delete-btn' onClick={() => {handleDelete(item)}}><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
        )) : (
          <p style = {{color: "#515f42"}}>EMPTY LIST</p>
        )}
      </div>

      <button onClick={() => {clearList(list)}}>CLEAR</button>

    </section>

  )
}

export default List