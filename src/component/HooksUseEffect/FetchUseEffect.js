import React, { useState, useEffect }from 'react';

const FetchUseEffect = () => {
  const [state, setState] = useState({
    email: '',
    picture: '',
  })
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(rs => rs.json())
      .then(data => {
        const [user] = data.results;
        setState({
          email: user.email,
          picture: user.picture.medium,
        })
      })
  }, [])
  const { email, picture } = state;
  return (
    <div>
      <img src={picture} />
      <div>{email}</div>
    </div>
  )
}
export default FetchUseEffect;