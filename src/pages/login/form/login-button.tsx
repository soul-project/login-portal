import { Center, Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

export default function LoginButton({ isLoggingIn, disabled }: Props) {
  return (
    <LoginButtonUI disabled={disabled} isLoggingIn={isLoggingIn} type="submit">
      <Center height="100%">
        {isLoggingIn ? (
          <Spinner size="md" color="white" thickness="3px" />
        ) : (
          'Login'
        )}
      </Center>
    </LoginButtonUI>
  );
}

type Props = {
  isLoggingIn: boolean;
  disabled: boolean;
};

const LoginButtonUI = styled.button<{
  isLoggingIn: boolean;
  disabled: boolean;
}>`
  width: 100%;
  height: 50px;
  display: block;
  min-height: 50px;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  background-position: top center;
  cursor: ${(props) =>
    props.disabled || props.isLoggingIn ? 'default' : 'pointer'};
  transition: 0.3s ease-in-out;
  transition-property: background, color;

  position: relative;
  color: #fff;
  border-radius: 10px;
  background-image: linear-gradient(
    90deg,
    #f72585 0%,
    #3a0ca3 35%,
    #4cc9f0 100%
  );
  background-size: 400%;
  background-position: 0% 0%;

  &::before {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 26px;
    background-image: linear-gradient(
      90deg,
      #f72585 0%,
      #3a0ca3 35%,
      #4cc9f0 100%
    );
    background-size: 500%;
    background-position: 0% 0%;
    filter: blur(10px);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.2s;
  }

  ${(props) =>
    !props.disabled &&
    `&:hover {
      animation: gradientRotate 2s infinite;
      &::before {
        opacity: 1;
        animation: gradientRotate 2s infinite;
      }
    }`}

  &:active {
    color: #c3c4d5;
  }

  &:focus {
    &::before {
      opacity: 1;
    }
  }
`;