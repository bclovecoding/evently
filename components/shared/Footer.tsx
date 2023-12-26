import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center items-center flex-between flex-col">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width="128"
            height="38"
          />
        </Link>
        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}
