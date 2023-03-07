import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Link href='/daniel/'>Link a Daniel</Link>
      <div>
        <span>Company</span>
        <span>Communities</span>
        <span>Useful links</span>
      </div>
      <div>
        <span>IG</span>
        <span>TW</span>
        <span>FB</span>
      </div>
    </footer>
  );
};

export { Footer };
