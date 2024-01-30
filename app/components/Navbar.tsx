// app/components/Header.tsx
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '10px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}>
          <Logo />
        </div>
        <nav style={{ display: 'flex', gap: '20px', flex: 1, color: 'white' }}>
          <Link href="/link1">Link 1</Link>
          <Link href="/link2">Link 2</Link>
          <Link href="/link3">Link 3</Link>
          <Link href="/link4">Link 4</Link>
        </nav>
      </div>
    </header>
  );
}
