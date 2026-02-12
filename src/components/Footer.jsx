export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f8f5ef]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm text-slate-700">
        <p>© {new Date().getFullYear()} Himanga. All rights reserved.</p>
        <p className="text-slate-600">Built with React + Tailwind.</p>
      </div>
    </footer>
  );
}
