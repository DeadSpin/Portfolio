import axios from "axios"

export const login = (props) => {
  axios.post('http://localhost:3000/user/login', props)
  .then(result =>  {
  })
  .catch(error => {
    console.log(error)
  })
}