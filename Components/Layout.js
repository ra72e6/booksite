import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - NextShop' : 'NextShop'}</title>
        <meta name="description" content="Nextjs Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-slate-200">
            <Link href="/" className="text-lg font-bold">
              Booksite
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                카트
              </Link>
              <Link href="/login" className="p-2">
                로그인
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
          <p>양노임한 팀프로젝트</p>
        </footer>
      </div>
    </>
  );
}
