import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Google = () => {
  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handelGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        console.log(res)
        navigate('/');
      })
      .catch(error => {
      console.log(error)
    })
  }
  return (
    <p className="text-center my-4">
            <button onClick={handelGoogleSignIn} className='btn btn-outline btn-success'>Google login</button>
            </p>
  );
};

export default Google;