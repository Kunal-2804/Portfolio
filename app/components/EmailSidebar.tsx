import Link from "next/link";

export default function EmailSidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 left-10 flex-col items-center gap-6 z-40">
      <Link
        href="mailto:contact@kunalgawande.com"
        className="text-gray-400 hover:text-accent font-sans text-sm tracking-widest transition-colors duration-300 transform hover:-translate-y-1"
        style={{ writingMode: "vertical-rl" }}
      >
        CONTACT THE DEV
      </Link>
      <div className="w-[1px] h-24 bg-gray-600"></div>
    </div>
  );
}
