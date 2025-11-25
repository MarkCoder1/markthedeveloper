export default function ThemeScript() {
  const script = `
  try {
    const stored = localStorage.getItem('theme');
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = stored ? stored === 'dark' : mql.matches;
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';
  } catch (_) {}
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
