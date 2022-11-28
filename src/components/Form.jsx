import React from 'react'

const Form = ({ handleSubmit, handleChange, listItem }) => {
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <section className='form-input'>
        <section className='name-input'>
            <input 
            type='text' 
            placeholder='Enter title'
            onChange={handleChange}
            name='title' 
            value={listItem.title}
            />
        </section>
        <section className='category-input'>
          <input
            type='radio'
            id='tv'
            name='category'
            value='tv'
            checked={listItem.category === 'tv'}
            onChange={handleChange}
          />
          <label htmlFor='tv'>TV</label>
          <br />

          <input
            type='radio'
            id='film'
            name='category'
            value='film'
            checked={listItem.category === 'film'}
            onChange={handleChange}
          />
          <label htmlFor='film'>Film</label>
          <br />

          <input
            type='radio'
            id='book'
            name='category'
            value='book'
            checked={listItem.category === 'book'}
            onChange={handleChange}
          />
          <label htmlFor='book'>Book</label>
          <br />

          <input
            type='radio'
            id='podcast'
            name='category'
            value='podcast'
            checked={listItem.category === 'podcast'}
            onChange={handleChange}
          />
          <label htmlFor='podcast'>Podcast</label>
          <br />

          <input
            type='radio'
            id='music'
            name='category'
            value='music'
            checked={listItem.category === 'music'}
            onChange={handleChange}
          />
          <label htmlFor='music'>Music</label>
          <br />
        </section>
        </section>
        <button className='add-to-list'><i className="fa-solid fa-plus"></i></button>
    </form>
    </div>
  )
}

export default Form