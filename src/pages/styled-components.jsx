import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 400px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08),
    0px 1px 2px rgba(88, 102, 106, 0.12);
  border-radius: 10px;
  border-bottom: 4px solid #00b1ff;
`;

export const H1 = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding: 1.5rem 2rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 0.5rem 0.5rem 0.5rem 2.4rem;
  margin-bottom: 5px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  position: relative;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 0;
    margin-left: 10px;
    margin-bottom: 5px;
    pointer-event: none;
  }

  div {
    display: flex;
    align-items: center;
    position: absolute;
    right: 13%;
    margin-top: 5px;
    z-index: 10000;
    cursor: pointer;

    &:hover {
      svg {
        fill: #00b1ff;
      }
    }
  }
`;

export const ErrorDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    font-size: 14px;
    margin: 0;
    line-height: 1.2em;
    font-weight: 700;
    color: #ff6961;
  }

  p {
    font-weight: 500;
    margin: 0;
    line-height: 1.2em;
    font-size: 14px;
  }

  &.errmsg {
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 8px;
    border: 2px solid #ff6961;
  }

  &.offscreen {
    position: absolute;
    left: -9999px;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;

  &.instructions {
    font-size: 0.75rem;
    border-radius: 0.5rem;
    background: #444;
    color: #fff;
    padding: 0.25rem;
    position: relative;
    bottom: -10px;
    padding: 10px;
  }

  &.offscreen {
    position: absolute;
    left: -9999px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  display: flex;
  color: #444;
  align-items: center;
  margin-bottom: 5px;

  svg {
    &.hide {
      display: none;
    }

    &.valid {
      color: limegreen;
      margin-left: 0.25rem;
    }

    &.invalid {
      color: red;
      margin-left: 0.25rem;
    }
  }
`;

export const Button = styled.button(
  ({ disabled }) => `
  font-size: 18px;
  padding: 0.25rem;
  margin: 1rem auto 0.5rem auto;
  padding: 0.5rem;
  background-color: #00b1ff;
  border: none;
  cursor: ${disabled ? "default" : "pointer"};
  transition: 0.3s;
  width: 50%;
  color: ${disabled ? "#dfdfdf" : "#fff"};
  opacity: ${disabled ? 0.4 : 1};

  &:hover {
    border-radius: ${disabled ? 0 : "10px"};
  }
`
);

export const SignIn = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding-bottom: 10px;
  cursor: default;

  span {
    a {
      cursor: pointer;
    }
  }

  span {
    &:hover {
      a {
        color: #00b1ff;
      }
    }
  }
`;

export const Div = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const PersistCheck = styled.div`
  font-size: 0.75rem;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    margin: 0 0.5rem;
  }
`;
