import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import ItemList from './ItemList'
import Footer from './Footer'
import Note from './Note'

function Todo({ width }) {
  const initialItems = [
    {
      title: 'Complete Online JavaScript Course',
      completed: true,
    },
    {
      title: 'Jog around the park 3x',
      completed: false,
    },
    {
      title: '10 minutes meditation',
      completed: false,
    },
    {
      title: 'Read for one hour',
      completed: false,
    },
    {
      title: 'Pick up groceries',
      completed: false,
    },
    {
      title: 'Complete Todo app on Frontend Mentor',
      completed: false,
    },
  ]
  const [items, setItems] = useState(initialItems)
  const [sortBy, setSortBy] = useState('all')

  function handleAdd(newItem) {
    setItems((item) => [...item, newItem])
  }

  function handleComplete(title) {
    setItems((items) =>
      items.map((item) =>
        title === item.title ? { ...item, completed: !item.completed } : item
      )
    )
  }

  function handleDelete(title) {
    setItems((items) => items.filter((item) => title !== item.title))
  }

  function handleClearCompleted() {
    setItems((items) => items.filter((item) => !item.completed))
  }

  function handleReOrder(reOrdered) {
    setItems(reOrdered)
  }

  function handleSort(value) {
    setSortBy(value)
  }

  return (
    <div className='to-do'>
      <Header />
      <Form onAdd={handleAdd} />
      <ItemList
        items={items}
        onComplete={handleComplete}
        onDelete={handleDelete}
        onClearCompleted={handleClearCompleted}
        onReorder={handleReOrder}
        width={width}
        onSort={handleSort}
        sortBy={sortBy}
      />
      {width ? null : <Footer onSort={handleSort} sortBy={sortBy} />}
      <Note />
    </div>
  )
}

export default Todo
