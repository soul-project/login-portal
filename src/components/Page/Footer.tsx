import { Center, Stack, Link, Text, Box } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Center bgColor="#2C2E33">
      <Box margin="16px 0px" padding="8px 16px" width="100%">
        <Stack direction={['column', 'row']} gap={4} justifyContent="center">
          <Link
            href="https://api.soul-network.com/docs"
            target="_blank"
            whiteSpace="nowrap"
          >
            API Docs
          </Link>
          <Link
            href="https://github.com/soul-project"
            target="_blank"
            whiteSpace="nowrap"
          >
            Soul&apos;s organization Github
          </Link>
          <Link
            href="mailto:lws803@gmail.com"
            target="_blank"
            whiteSpace="nowrap"
          >
            Contact me
          </Link>
        </Stack>
        <Text textAlign={['left', 'center']} mt={[8, 4]} fontWeight="light">
          Copyright © {new Date().getFullYear()} Soul.
        </Text>
      </Box>
    </Center>
  );
}
