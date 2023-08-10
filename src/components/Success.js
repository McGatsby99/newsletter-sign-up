import iconList from '../assets/images/icon-list.svg'

const Success = ({ setSubmitted, email, setEmail }) => {
  const dismissMsg = () =>{
    setEmail('');
    setSubmitted(false);
  }
  return (
    <div className="success-container">
      <div className="success">
        <img src={iconList} alt="list icon" width={40} />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
        <button onClick={() => dismissMsg()}>Dismiss message </button>
      </div>
    </div>
  )
}

export default Success;

// Thanks for subscribing! 

// A confirmation email has been sent to ash@loremcompany.com. 
// Please open it and click the button inside to confirm your subscription.

// Dismiss message 
