export default function Container({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="max-w-350 w-full px-4">{children}</div>;
}
