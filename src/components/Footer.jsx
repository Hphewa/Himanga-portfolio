export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f8f5ef]/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm">
        <p className="text-slate-700">
          © {new Date().getFullYear()} Himanga. All rights reserved.
        </p>
        <p className="text-slate-500">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}
