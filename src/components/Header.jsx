import ThemeToggle from './ThemeToggle';

export default function Header({ isDark, onToggle }) {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        bg-white/70 dark:bg-[#0a0a0a]/70
        backdrop-blur-2xl
        border-b border-black/[0.06] dark:border-white/[0.06]
      "
    >
      <div className="max-w-[1140px] mx-auto px-6 md:px-8 h-14 flex items-center justify-end">
        {/* Toggle */}
        <ThemeToggle isDark={isDark} onToggle={onToggle} />
      </div>
    </header>
  );
}
