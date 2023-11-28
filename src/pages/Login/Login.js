import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const {logIn, user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    logIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      form.reset();
      navigate(from, { replace: true });
    })
    .catch(error => console.error(error));
}

    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login Here!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Type your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Type your password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='p-4'>Please Goto Register--<Link to='/register'>Register!</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;