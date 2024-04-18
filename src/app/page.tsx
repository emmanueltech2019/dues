import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div><Link href={'/admin'}>admin</Link></div>
      <div><Link href={'/staff'}>staff</Link></div>
      <div><Link href={'/super'}>super</Link></div>
    </main>
  );
}
