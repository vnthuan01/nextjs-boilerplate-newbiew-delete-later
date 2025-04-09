export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length >= 2) {
    return (
      <h1>
        Page for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Page of the feature {slug[0]}</h1>;
  } else {
    return <h1>Docs of this page</h1>;
  }
}
