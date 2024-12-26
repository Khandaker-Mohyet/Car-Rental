import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'https://assignment-11-server-phi-seven.vercel.app',
  withCredentials: true
})

const useAxiosSecure = () => {

  const { singInOut } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    axiosInstance.interceptors.response.use(response => {
      return response
    }, error => {

      if (error.status === 401 || error.status === 403) {
        console.log(error)
        singInOut()
          .then(() => {
            console.log('log out user')
            navigate('/auth/login')
          })
          .catch(error => {
          console.log(error)
        })
      }


      return Promise.reject(error)
    })
  }, [singInOut,navigate])
  
  return axiosInstance
};

export default useAxiosSecure;