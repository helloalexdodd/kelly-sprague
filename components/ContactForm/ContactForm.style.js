import styled from 'styled-components';

export const InnerContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  position: relative;
`;

export const Button = styled.button`
  align-self: flex-end;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 80%;

  input[type='text'],
  textarea {
    font-family: 'Palatino Linotype';
    color: #000;
    width: 100%;
    padding: 10px 0;
    z-index: 100;
    position: relative;
    :focus {
      outline: none;
    }
  }

  textarea {
    height: 200px;
    resize: none;
  }

  .effect {
    border: 0;
    padding: 4px 0;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
    background-color: transparent;
  }

  .effect ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    transition: 0.4s;
  }

  .effect:focus ~ .focus-border,
  .has-content.effect ~ .focus-border {
    width: 100%;
    transition: 0.4s;
  }

  .effect ~ label {
    position: absolute;
    top: 9px;
    left: 0;
    width: 100%;
    margin-top: 10px;
    color: #000;
    transition: 0.3s;
    letter-spacing: 0.5px;
    font-family: 'Palatino Linotype';
  }

  .effect:focus ~ label,
  .has-content.effect ~ label {
    top: -16px;
    font-size: 12px;
    color: #000;
    transition: 0.3s;
  }

  textarea.effect:focus ~ label,
  textarea.has-content.effect ~ label {
    top: -20px;
  }
`;
