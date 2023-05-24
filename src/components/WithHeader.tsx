import type { FC, ReactNode } from "react";

import Link from "next/link";
import Image from "next/image";

import { Header, Title } from "@liene-putnina/react-components-for-you";

export interface WithHeaderProps {
  children: ReactNode;
  headerTitle?: string;
}

export const WithHeader: FC<WithHeaderProps> = ({
  children,
  headerTitle,
}: WithHeaderProps) => {
  return (
    <>
      <Header
        customLogo={
          <Link href="/">
            <Image
              priority
              src="/images/logo-icon.png"
              height={40}
              width={40}
              alt="logo"
            />
          </Link>
        }
      >
        <Title style={{ fontSize: "40px", lineHeight: "40px", margin: "0" }}>
          {headerTitle}
        </Title>
      </Header>
      <main id="main">{children}</main>
    </>
  );
};
