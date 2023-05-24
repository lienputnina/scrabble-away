import { type NextPage } from 'next';
import Head from 'next/head';
import { WithHeader } from '~/components/WithHeader';

import { Text } from '@liene-putnina/react-components-for-you';
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';

const EntryForm: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Game details</title>
      </Head>
      <WithHeader headerTitle="Game details form">
        <main className="flex min-h-screen flex-col items-center justify-center">
          <Text>The Game details form</Text>
          {!user && <SignInButton />}
          {!!user && <SignOutButton />}
        </main>
      </WithHeader>
    </>
  );
};

export default EntryForm;
