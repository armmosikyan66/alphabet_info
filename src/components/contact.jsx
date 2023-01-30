import {useState} from 'react'
import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}
export const Contact = (props) => {
    const [{name, email, message}, setState] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setState((prevState) => ({...prevState, [name]: value}))
    }
    const clearState = () => setState({...initialState})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
        emailjs
            .sendForm(
                'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    clearState()
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
    return (
        <div>
            <div id='contact'>
                <div className='container'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='section-title'>
                                <h2>Կապնվեք մեզ հետ</h2>
                                <p>
                                    Մենք սիրում ենք լսել ձեզանից: Եթե ունեք հարցեր կամ մեկնաբանություններ մեր կայքի
                                    վերաբերյալ, կամ բարելավման առաջարկներ, ապա ազատ զգալ ուղարկեք մեզ հարցում:
                                </p>
                            </div>
                            <form name='sentMessage' validate onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='name'
                                                name='name'
                                                className='form-control'
                                                placeholder='Անուն'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='email'
                                                id='email'
                                                name='email'
                                                className='form-control'
                                                placeholder='էլ փոստ'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                  <textarea
                      style={{resize: "vertical"}}
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Նամակ'
                      required
                      onChange={handleChange}
                  ></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div id='success'></div>
                                <button type='submit' className='btn btn-custom btn-lg'>
                                    ՈՒղարկել Նամակ
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <div className='container text-center'>
                    <p>
                        &copy; 2023 Arman Mosikyan React Land Page Template. Design by{' '}
                        <a href='http://www.templatewire.com' rel='nofollow'>
                            TemplateWire
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
