export const Testimonials = (props) => {
    return (
        <div id='testimonials'>
            <div className='container'>
                <div className='section-title text-center'>
                    <h2>Հայոց այբուբենի տառերի թվային արժեքը</h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, index) => {
                            return <div key={`${d.name}-${index}`} className='col-md-3'>
                                <div className='testimonial'>
                                    <div className='testimonial-content'>
                                        <div className="testimonial-value">{d.text}</div>
                                        <div className='testimonial-meta'>{d.value}</div>
                                    </div>
                                </div>
                            </div>
                        })
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}
