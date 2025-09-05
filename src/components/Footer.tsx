export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white p-4">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} Elo Sapiens. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
