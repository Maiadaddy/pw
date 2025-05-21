import { PrivyProvider } from '@privy-io/react-auth';
import React from 'react';

// Privy configuration
const PRIVY_APP_ID = 'cmayaiqk700zqjy0mzhvv92n0';

export default function PrivyAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['wallet', 'email', 'google', 'twitter', 'discord', 'apple'],
        appearance: {
          theme: 'dark',
          accentColor: '#ffd230', // Primary color from your theme
          logo: '/phoenix-logo.svg',
          showWalletLoginFirst: false,
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets'
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}