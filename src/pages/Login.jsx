import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { VscLock } from "react-icons/vsc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import axios from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  H1,
  Form,
  Input,
  InputGroup,
  ErrorDiv,
  Label,
  Button,
  SignIn,
  PersistCheck,
} from "./styled-components";

const LOGIN_URL = "/api/login";

const Register = ({ setSuccess }) => {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, email]);

  const showPassToggle = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, roles, accessToken });
      setEmail("");
      setPwd("");

      setSuccess("Login successfully");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response || err.response?.status === 500) {
        toast.error("No Server Response");
      } else if (err.response?.status === 404) {
        toast.error("User not exist");
      } else if (err.response?.status === 401) {
        toast.error("Unauthorized");
      } else {
        toast.error("Invalid email or password");
        console.log(err);
      }
      errRef.current.focus();
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <Container>
      <ToastContainer />
      <ErrorDiv
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        <BiErrorCircle size="2.5em" color="#ff6961" />
        <div>
          <h3>Error: </h3>
          <p>{errMsg}</p>
        </div>
      </ErrorDiv>
      <H1>Login</H1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email"> Email:</Label>
        <InputGroup>
          <Input
            type="email"
            id="email"
            ref={userRef}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            value={email}
            required
          />
          <MdOutlineEmail size="1.3em" color="#c6c6c6" />
        </InputGroup>

        <Label htmlFor="password">Password:</Label>
        <InputGroup>
          <Input
            type={showPass ? "text" : "password"}
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            autoComplete="on"
          />
          <VscLock size="1.3em" color="#c6c6c6" />
          <div className="show" onClick={showPassToggle}>
            {showPass ? <BsEye size="1.3em" /> : <BsEyeSlash size="1.3em" />}
          </div>
        </InputGroup>

        <Button disabled={false}>Sign Up</Button>
        <PersistCheck>
          <input
            type="checkbox"
            id="persist"
            onChange={togglePersist}
            checked={persist}
          />
          <label htmlFor="persist">Trust This Device</label>
        </PersistCheck>
      </Form>
      <SignIn>
        Need an Account?
        <span className="line">
          <Link to="/register">Register</Link>
        </span>
      </SignIn>
    </Container>
  );
};

export default Register;
