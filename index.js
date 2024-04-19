const Notification = props => {
  const {imgUrl, text, bgcolor} = props
  return (
    <div className={`notification-container ${bgcolor}`}>
      <img className='icon' src={imgUrl} />
      <p className='msg'>{text}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Notification</h1>
    <div className='card-container'>
      <Notification
        imgUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        text='Information Message'
        bgcolor='btn1'
      />
      <Notification
        imgUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        text='Success Message'
        bgcolor='btn2'
      />
      <Notification
        imgUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        text='Warning Message'
        bgcolor='btn3'
      />
      <Notification
        imgUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        text='Error Message'
        bgcolor='btn4'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
