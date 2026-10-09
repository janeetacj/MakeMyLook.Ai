import {
  ArrowLeft,
  Eye,
  EyeOff,
  Sparkles,
} from 'lucide-react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Auth.css';

function Login() {
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

        <div className="auth-card">

          <div className="auth-card-logo">
            <Sparkles size={20} />
          </div>

          <h1>Welcome Back</h1>

          <p>
            Ready to continue your personal
            beauty journey?
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate('/home');
            }}
          >

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
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            <div className="login-options">

              <label className="remember-option">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-button"
              >
                Forgot password?
              </button>

            </div>

            <button
              type="submit"
              className="auth-primary-button"
            >
              Log In
            </button>

          </form>

          <div className="auth-divider">
            <span />
            <p>or continue with</p>
            <span />
          </div>

          <div className="social-buttons">

            <button aria-label="Continue with Google">
              G
            </button>

            <button aria-label="Continue with Apple">
              
            </button>

          </div>

          <p className="switch-auth">
            Don't have an account?
            <button onClick={() => navigate('/register')}>
              Create Account
            </button>
          </p>

        </div>

      </div>
    </main>
  );
}

export default Login;