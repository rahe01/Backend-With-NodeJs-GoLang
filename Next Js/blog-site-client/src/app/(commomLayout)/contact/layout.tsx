export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>This is content layout</h1>
      {children}
    </div>
  );
}
