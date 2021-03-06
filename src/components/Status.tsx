import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

export default function Status({ status, message }: Props) {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minHeight="200px"
      borderRadius="8px"
      padding="16px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {status}
      </AlertTitle>
      <AlertDescription maxWidth="sm" marginTop="16px">
        {message}
      </AlertDescription>
    </Alert>
  );
}

type Props = {
  status: string;
  message: string;
};
