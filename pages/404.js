import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>404</h1>
      <h2>You must be lost.</h2>
      <p>
        Honestly, we get it. 2020, amiright? Let's get you back though, we've
        got stuff to learn!
      </p>
      <Link href="/">
        <a>Take me home</a>
      </Link>
    </>
  );
}
