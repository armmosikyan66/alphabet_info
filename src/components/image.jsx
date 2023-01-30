export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={"#!"}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <div style={{width: "100%", height: "389px", backgroundImage: `url("${smallImage}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}> </div>
        </a>{' '}
      </div>
    </div>
  )
}