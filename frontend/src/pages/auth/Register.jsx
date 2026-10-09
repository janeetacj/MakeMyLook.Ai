import {
  ArrowLeft,
  Eye,
  EyeOff,
  Sparkles,
} from 'lucide-react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Auth.css';

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="auth-page">
      <div className="auth-background auth-background-one" />
      <div className="auth-background auth-background-two" />

      <div className="auth-container">

        <button
          className="auth-back-button"
          onClick={() => navigate('/welcome')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="auth-card register-card">

          <div className="auth-card-logo">
            <Sparkles size={20} />
          </div>

          <h1>Create Your Account</h1>

          <p>
            Let's create your personalized
            beauty profile.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate('/home');
            }}
          >

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  required
                  minLength={6}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            <label className="terms-option">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the Terms of Service
                and Privacy Policy.
              </span>

            </label>

            <button
              type="submit"
              className="auth-primary-button"
            >
              Get Started
            </button>

          </form>

          <p className="switch-auth">
            Already have an account?
            <button onClick={() => navigate('/login')}>
              Log In
            </button>
          </p>

        </div>

      </div>
    </main>
  );
}

export default Register;