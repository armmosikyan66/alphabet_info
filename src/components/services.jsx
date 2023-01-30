export const Services = (props) => {
    return (
        <div id='services' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>ավելի շատ փաստեր</h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-4'>
                                <div className={"fa"}><p>Փաստ {(i + 1)}</p></div>
                                <div className='service-desc'>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}
