export default function ErrorPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Extracting error and ensuring it's a string.
  const error = Array.isArray(searchParams.error)
    ? searchParams.error.join(', ')
    : searchParams.error;

  return (
    <p>
      Sorry, something went wrong: {error || 'Unknown error'}
    </p>
  );
}
