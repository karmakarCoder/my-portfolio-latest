export const Footer = () => {
  return (
    <footer className="bg-gray-950/30 backdrop-blur-xl p-8 md:px-12">
      <div className="text-xs font-mono opacity-40 capitalize text-center flex items-center justify-center">
        © {new Date().getFullYear()} All rights reserved. Made by Rodro
      </div>
    </footer>
  );
};
