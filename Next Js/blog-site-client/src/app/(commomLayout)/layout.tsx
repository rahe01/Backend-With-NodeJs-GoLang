import { Navbar } from "@/components/layout/navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
