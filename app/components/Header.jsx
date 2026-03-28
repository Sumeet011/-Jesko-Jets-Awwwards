export default function Header() {
  return (
    <header className="w-screen xl:h-16 hidden xl:flex justify-between items-center fixed top-0 z-999 px-16 py-12 ">
      <nav>
        <ul className="flex justify-center items-center gap-5">
          <li>About</li>
          <li>Our Fleet</li>
          <li>Advantages</li>
          <li>Global</li>
        </ul>
      </nav>

      <ul className="flex justify-center items-center gap-5">
        <li>+918264988895</li>
        <li>workwithsumeet.dev@gmail.com</li>
      </ul>
    </header>
  );
}
