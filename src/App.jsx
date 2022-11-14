import { useEffect, useState } from 'react'
import './index.css'
import List from './components/List'
import Form from './components/Form'

function App() {
  const [ listItem, setListItem ] = useState(
    {
      title: '',
      category: '',
      complete: false
    }
  )
  const [ allItems, setAllItems ] = useState([])

  useEffect(() => {
    if(localStorage.getItem('localItems')){
      const storedItems = JSON.parse(localStorage.getItem('localItems'))
      setAllItems(storedItems)
    }
  }, [], handleComplete)


  function handleChange(e) {
        const { name, value, type, checked } = e.target
        setListItem(prevFormData => {
          return {
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value,
            complete: false          }
      })
  }


  function handleSubmit(e) {
    e.preventDefault()
    if (listItem.title) {
      setAllItems([...allItems, listItem])
      localStorage.setItem('localItems', JSON.stringify([...allItems, listItem]))
      setListItem({
          title: '',
          category: '',
          complete: false
      })
    }
  }

  function handleDelete(item){
    console.log(item)
    const itemsAfterDelete = allItems.filter((allItem) => 
      allItem.title !== item.title
    )
    setAllItems(itemsAfterDelete)
    localStorage.setItem('localItems', JSON.stringify(itemsAfterDelete))
  }

  function handleComplete(item) {
    let updatedItems = allItems.map(mappedItem => {
      if (mappedItem.title === item.title) {
          mappedItem.complete = !mappedItem.complete;
      }
      return mappedItem
    });
    setAllItems(updatedItems)
    localStorage.setItem('localItems', JSON.stringify(updatedItems))
  }

  function clearList(list) {
    console.log('clearing list', list)
    //new allItems must include everything except list
    let updatedItems = allItems.filter(item => !list.includes(item))
    setAllItems(updatedItems)
    localStorage.setItem('localItems', JSON.stringify(updatedItems))
  }
  

  return (
    <div className="App">
      <h1>it's on my list</h1>

      <Form 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        listItem={listItem}
        setListItem={setListItem}
        clearList={clearList}
      />

      <section className='list-container'>
        <List 
          title='TV'
          list={allItems.filter((item) => item.category == 'tv')}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          clearList={clearList}
        />
        <List 
          title='Films'
          list={allItems.filter((item) => item.category == 'film')}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          clearList={clearList}
        /> 
        <List 
          title='Books'
          list={allItems.filter((item) => item.category == 'book')}   
          handleDelete={handleDelete}   
          handleComplete={handleComplete} 
          clearList={clearList} 
        />
        <List 
          title='Podcasts'
          list={allItems.filter((item) => item.category == 'podcast')}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          clearList={clearList}
        />
        <List 
          title='Music'
          list={allItems.filter((item) => item.category == 'music')}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          clearList={clearList}
        />
      </section>
    </div>
  )
}

export default App
