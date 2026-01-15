

export const dynamic =  'force-dynamic';


export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

 

  return (
    <div>
      <h1>This is about page content</h1>
    </div>
  );
}
