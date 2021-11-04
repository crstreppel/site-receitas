import Link from 'next/Link';
export default function Header(props) {
    return (
        
        <header className="header">

        <div>
          <Link href="/">
          <a>
         <p>TreinaCook</p>
         </a>
         </Link>
      </div>
      </header>
        
    )
}