import React, { useState } from 'react'
import Modal from 'react-modal'
// import './ModalNpm.css';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'))

function AboutModal() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>About This App</button>
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
        <button style={{ width: '7em' }} onClick={closeModal}>
          Close
        </button>
        <p>
          This example app is a todos app that uses redux to store the state of
          the todos and the state of the filters. It has two reducers or slices.
          the todosSlice and the filtersSlice. These are combined to produce the
          rootReducer in reducer.js. A redux.store is created in store.js.
          Filtering for the view on todos is done in TodoList.js.
        </p>
        <p>
          This is a create-react-app that uses redux, react-redux and the
          redux-devtools-extension for browser devtools debugging.
        </p>
        <p>
          This project is based on the code for the redux tutorial example
          starting at:
          https://redux.js.org/tutorials/fundamentals/part-1-overview
        </p>
      </Modal>
    </div>
  )
}

export default AboutModal
