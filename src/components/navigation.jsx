export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <svg width={30} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0.5160635 3.096381"><path fill="red" d="M-1.806 0h4.128v1.032h-4.128z"/><path fill="#00f" d="M-1.806 1.032h4.128v1.032h-4.128z"/><path fill="orange" d="M-1.806 2.064h4.128v1.032h-4.128z"/></svg>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                ԱՌԱՆՁՆԱՀԱՏԿՈՒԹՅՈՒՆՆԵՐ
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Այբուբենի մասին
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                փաստեր
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                պատկերներ
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                ԹՎԱՅԻՆ ԱՐԺԵՔԸ
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Կապնվեք մեզ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
