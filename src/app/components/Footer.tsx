
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black text-opacity-60 py-4 text-center">
      <p className="text-sm">
        © {currentYear} FoodieLife. Powered by Sky Tech.
      </p>
    </footer>
  );
};

export default Footer;
