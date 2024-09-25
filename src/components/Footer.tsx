export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-500 py-1">
      <div className="container mx-auto text-center text-white">
        &copy; {new Date().getFullYear()} Powered by{' '}
        <a href="https://orahsoft.rs" target="_blank">
          OrahSoft
        </a>
        {'. '}
        All rights reserved.
      </div>
    </footer>
  );
};
