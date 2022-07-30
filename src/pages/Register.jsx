import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiErrorCircle, BiUser } from "react-icons/bi";
import { FaInfoCircle, FaCheck, FaTimes } from "react-icons/fa";
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
  InfoDiv,
  Label,
  Button,
  SignIn,
} from "./styled-components";

const NAME_REGEX = /^[A-z\s..]{3,50}$/;
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/api/register";

const Register = ({ setSuccess }) => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [showPass, setShowPass] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [name, pwd, email]);

  const showPassToggle = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = NAME_REGEX.test(name);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name, email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      //clear state and controlled inputs
      //need value attrib on inputs for this
      setName("");
      setPwd("");
      setEmail("");
      navigate("/login");
      setSuccess("User registered successfully");
    } catch (err) {
      if (!err?.response) {
        toast.error("No Server Response");
      } else if (err.response?.status === 409) {
        toast.error("Username Taken");
      } else {
        toast.error("Registration Failed");
        console.log(err);
      }
      errRef.current.focus();
    }
  };

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
      <H1>Register</H1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          {" "}
          Name:
          <FaCheck className={validName ? "valid" : "hide"} />
          <FaTimes className={validName || !name ? "hide" : "invalid"} />
        </Label>
        <InputGroup>
          <Input
            type="text"
            id="name"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <BiUser size="1.2em" color="#c6c6c6" />
        </InputGroup>
        <InfoDiv
          id="uidnote"
          className={
            userFocus && name && !validName ? "instructions" : "offscreen"
          }
        >
          <FaInfoCircle size="2.5em" />
          <p>
            Name should have at least 3 letters.
            <br />
            Only letters and period is allowed
          </p>
        </InfoDiv>

        <Label htmlFor="email">
          {" "}
          Email:
          <FaCheck className={validEmail ? "valid" : "hide"} />
          <FaTimes className={validEmail || !email ? "hide" : "invalid"} />
        </Label>
        <InputGroup>
          <Input
            type="email"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            value={email}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <MdOutlineEmail size="1.3em" color="#c6c6c6" />
        </InputGroup>
        <InfoDiv
          id="uidnote"
          className={
            emailFocus && email && !validEmail ? "instructions" : "offscreen"
          }
        >
          <FaInfoCircle size="3em" />
          <p>
            Input a valid email
            <br />
            Must have a @ symbol and will end with domain name
          </p>
        </InfoDiv>

        <Label htmlFor="password">
          Password:
          <FaCheck className={validPwd ? "valid" : "hide"} />
          <FaTimes className={validPwd || !pwd ? "hide" : "invalid"} />
        </Label>
        <InputGroup>
          <Input
            type={showPass ? "text" : "password"}
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <VscLock size="1.3em" color="#c6c6c6" />
          <div className="show" onClick={showPassToggle}>
            {showPass ? <BsEye size="1.3em" /> : <BsEyeSlash size="1.3em" />}
          </div>
        </InputGroup>
        <InfoDiv
          id="pwdnote"
          className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
        >
          <FaInfoCircle size="5em" />
          <p>
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
        </InfoDiv>

        <Button
          disabled={!validName || !validPwd || !validEmail ? true : false}
        >
          Sign Up
        </Button>
      </Form>
      <SignIn>
        Already registered?
        <span className="line">
          <Link to="/login">Login</Link>
        </span>
      </SignIn>
    </Container>
  );
};

export default Register;
