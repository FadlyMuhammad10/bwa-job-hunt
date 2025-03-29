"use client";
import { SessionProvider } from "next-auth/react";
import { FunctionComponent } from "react";

interface NextAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FunctionComponent<NextAuthProviderProps> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
