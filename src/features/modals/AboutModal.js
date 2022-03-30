import React, { useState } from 'react'
import Modal from 'react-modal'

// Make sure to bind modal to your appElement
// (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'))

function AboutModal() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
    const myNav = document.getElementById('nav-section')
    myNav.click()
  }

  return (
    <div>
<<<<<<< HEAD
      <button style={{ borderBottom: '2px solid white' }} onClick={openModal}>
=======
      <button
        id="btn-open-modal"
        style={{ borderBottom: '2px solid white' }}
        onClick={openModal}
      >
>>>>>>> 2a48e2b434b54fac3c041fe216d30eca3f630645
        About This App
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="About This App"
        preventScroll={true}
        // overlayClassName={'modal-npm'}
        shouldCloseOnOverlayClick={
          true
          /* Boolean indicating if the overlay should close the modal */
        }
        style={{
          overlay: {
            overflowY: 'auto',
            backgroundColor: 'gray',
          },
          content: { backgroundColor: 'white' },
        }}
      >
        {/* Don't know how or what the original ref= did */}
        <h2
          style={{ textAlign: 'center' }}
          // ref={(_subtitle) => (subtitle = _subtitle)}
        >
          Todos App, a rudux example.
        </h2>
        <button
          style={{ width: '7em', backgroundColor: '#1976d2', color: 'white' }}
          onClick={closeModal}
        >
          Close
        </button>
        <p>
          This example app is a todos app that uses redux to store the state of
          the todos and the state of the filters. It has two reducers or slices,
          the todosSlice and the filtersSlice. These are combined to produce the
          rootReducer in reducer.js. A redux.store is created in store.js.
          Filtering for the view on todos is done in TodoList.js.
        </p>
        <p>
          This app is a create-react-app that uses redux, react-redux and the
          redux-devtools-extension for browser devtools debugging.
        </p>
        <p>
<<<<<<< HEAD
          This project is based on the this{' '}
          <a href="https://redux.js.org/tutorials/fundamentals/part-1-overview">
            redux tutorial example
=======
          This project is based on the code in this{' '}
          <a href="https://redux.js.org/tutorials/fundamentals/part-1-overview">
            redux tutorial example.
          </a>
        </p>
        <p>
          The code for this (my) version of the app can be accessed{' '}
          <a href="https://github.com/markboatman/redux-fundamentals-todos-wt-react">
            on github.
>>>>>>> 2a48e2b434b54fac3c041fe216d30eca3f630645
          </a>
        </p>
      </Modal>
    </div>
  )
}

export default AboutModal
