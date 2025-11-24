type Props = { title?: string };

export default function Header({ title = "Mini Nursery" }: Props) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container py-3">
        <h2 className="mb-0">{title}</h2>
      </div>
    </header>
  );
}
