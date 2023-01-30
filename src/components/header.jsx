import {useState} from "react";
import Modal from "./modal";

export const Header = (props) => {
  const [modal, setModalOpened] = useState(false);

  const handleModalOpen = (event) => {
    event.preventDefault();
    setModalOpened(true);
  }
  return (
    <>
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                      onClick={handleModalOpen}
                      href='#features'
                      className='btn btn-custom btn-lg page-scroll'
                  >
                    Իմանալ ավելին
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {modal ? <Modal setModalOpened={setModalOpened}/> : null}
    </>
  )
}
