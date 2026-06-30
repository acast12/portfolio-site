export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1a1a1a] text-center">
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} Alejandro Castillo
      </p>
    </footer>
  );
}
