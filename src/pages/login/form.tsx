import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
  HStack,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import JoinPlatform from './join-platform';

import { BASE_URL } from '../../constants';

export default function Form({
  setErrors,
  setIsSuccess,
  platformId,
  callback,
  disabled,
}: Props) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [joinPlatform, setJoinPlatform] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      setErrors([]);
      setIsLoggingIn(true);

      axios
        .post(
          `${BASE_URL}/v1/auth/code?platformId=${platformId}&callback=${callback}`,
          values,
        )
        .then(({ data }) => {
          if (data.code) {
            if (typeof window !== 'undefined') {
              window.open(`${callback}?code=${data.code}`, '_blank');
              setIsSuccess(true);
            }
          }
        })
        .catch(({ response: { data } }) => {
          if (data.error === 'USER_NOT_FOUND') {
            navigate(`/register${search}`);
          } else if (data.error === 'PLATFORM_USER_NOT_FOUND') {
            setJoinPlatform(true);
          } else if (data.error === 'VALIDATION_ERROR') {
            setErrors(['PlatformId and callback is not present.']);
          } else {
            // TODO: Add option to resend email verification if email is not verified
            setErrors([data.message]);
          }
        })
        .finally(() => setIsLoggingIn(false));
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    validateOnChange: false,
  });

  if (joinPlatform) {
    return (
      <JoinPlatform
        email={formik.values.email}
        password={formik.values.password}
        platformId={platformId}
        callback={callback}
        setErrors={setErrors}
      />
    );
  }

  return (
    <form onSubmit={(e) => formik.handleSubmit(e as any)}>
      <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          disabled={disabled}
        />
        {!formik.errors.email && (
          <FormHelperText>We'll never share your email.</FormHelperText>
        )}
        {formik.errors.email && (
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl
        isInvalid={!!formik.errors.password && formik.touched.password}
        marginTop={8}
      >
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          disabled={disabled}
        />
        {formik.errors.password && (
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        )}
      </FormControl>
      <HStack mt={8}>
        <Button
          colorScheme="teal"
          type="submit"
          isLoading={isLoggingIn}
          disabled={disabled}
        >
          Login
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => navigate(`/register${search}`)}
          disabled={isLoggingIn || disabled}
        >
          Register
        </Button>
      </HStack>
    </form>
  );
}

type Props = {
  setErrors: (error: string[]) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  platformId: number;
  callback: string;
  disabled: boolean;
};