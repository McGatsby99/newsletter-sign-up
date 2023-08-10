import { useRef } from 'react'
import iconList from '../assets/images/icon-list.svg'

const Subscribe = ({ setSubmitted, handleChangeEmail, email }) => {

  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };

  const inputRef = useRef(false)

  return (
    <div className='subscribe-container'>
      <div className="info">
        <h1>Stay updated!</h1>
        <p>
          Join 60,000+ product managers receiving monthly updates on
        </p>

        {/* list container */}

        <div className="list-container">
          <div className="list">
            <img src={iconList} alt="list icon" width={20} />
            <p> Product discovery and building what matters </p>
          </div>
          <div className="list">
            <img src={iconList} alt="list icon" width={20} />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="list">
            <img src={iconList} alt="list icon" width={20} />
            <p>And much more!</p>
          </div>
        </div>
      </div>
      <div className="form">
        <form>
        <label htmlFor='email'><p><strong>Email Address:</strong></p></label>
        <input id='email' name='email' type="email" placeholder='email@company.com' onChange={handleChangeEmail} value={email} ref={inputRef} required/>
        <button onClick={() => setSubmitted(true)} disabled={!(inputRef.current.value && inputRef.current.validity.valid)}>Subscribe to monthly newsletter</button>
        {/* <p className='warning'>{(inputRef.current.value && !inputRef.current.validity.valueMissing) && !(inputRef.current.value && inputRef.current.validity.valid) && 'Please fill in valid email to subscribe'}</p> */}
        </form>
      </div>

    </div>
  )
}

export default Subscribe

