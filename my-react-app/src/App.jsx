
import { useState } from 'react'
import './App.css'

function App() {
  console.log('re-Rendering');
  // counter app
  const [count, setCount] = useState(0);



  // node taking app create feature 

  const [nodeTitle, setNodeTitle] = useState('');
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNode, setEditableNode] = useState(null);


  const changeUserDataHandler = (e) => {
    setNodeTitle(e.target.value);
  }
  const submitHandle = (e) => {
    e.preventDefault();
    if (nodeTitle.trim() === "") {
      alert('empty');
    }

    editMode ? updatedHandler() : createHandler();
  }
  // create handler
  const createHandler = () => {
    const newNote = {
      id: Date.now() + '',
      title: nodeTitle
    }
    setNotes([newNote, ...notes]);
    setNodeTitle("");
  }


  // removeHandler
  const removeHandler = (noteId) => {
    const removeItem = notes.filter(item => item.id !== noteId);
    setNotes(removeItem);
  }
  // edit handler
  const editHandle = (item) => {
    setEditMode(true);
    setEditableNode(item);
    setNodeTitle(item.title);

  }
  // updated Handler
  const updatedHandler = () => {
    const updatedNote = notes.map((item) => {
      if (item.id === editableNode.id) {
        return { ...item, title: nodeTitle }
      }
      return item;
    })
    setNotes(updatedNote);

    setEditMode(false);
    setEditableNode(null);
    setNodeTitle('');
    
  }


  return (
    <>
      <section>
        <div className="counter_app">
          <h2>Hello World</h2>

          <h3>count:{count}</h3>
          <button onClick={() => setCount(prev => prev + 1)} >increment</button> <button onClick={() => setCount(prev => prev - 1)}>decrement</button>
        </div>


        {/* create feature app */}
        <h1>create feature app</h1>
        <form onSubmit={submitHandle}>
          <div><input onChange={changeUserDataHandler} type="text" placeholder='add user' value={nodeTitle} /> <button>{editMode ? 'updated' : 'add User'}</button></div>
        </form>

        <div className="output_form">
          <h2>All Nodes</h2>
          {notes.map((item) => (
            <div className="item" key={item.id}>
              <h2>{item.title}</h2>
              <div className="user_fun">
                <button onClick={() => editHandle(item)}>edit</button>
                <button onClick={() => removeHandler(item.id)}>delete</button>
              </div>
            </div>
          ))}

        </div>
      </section>



    </>
  )
}

export default App
