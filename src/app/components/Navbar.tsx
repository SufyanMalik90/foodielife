// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/vercel.svg';
import '@fortawesome/fontawesome-free/css/all.css'; 

const Navbar = () => {
  return (
    <nav className="p-4 justify-around flex border-b-2 items-center">
        <div className="">
          <Link href="/" >
          <Image  src={Logo} width={100} height={100} alt='logo' className='h-14 w-14'/>
          </Link>
        </div>
      <div>
        <ul className="flex gap-x-5 text-black text-[16px]">
          <li>
            <Link href='/'>
            Home
            </Link>
            </li>
          <li>
          <Link href='/recipes'>
            Recipes</Link>
            </li>
          <li>
          <Link href='/blog'>Blog</Link></li>
          <li>
          <Link href='/contact'>Contact</Link></li>
          <li><Link href='/about'>About us</Link></li>
        </ul>
      </div>
      <div className='flex gap-6'>
      <SocialIcon href="#" icon="facebook" />
      <SocialIcon href="#" icon="instagram" />
      <SocialIcon href="#" icon="x" />
      </div>
    </nav>
  );
};


const SocialIcon = ({ href, icon }:any) => {
  return (
    
    <a href={href} className=" hover:text-gray-300">
      {/* Add your social media icons or use a library like react-icons */}
      {icon === 'facebook' && <i className="fab fa-facebook"></i>}
      {icon === 'instagram' && <i className="fab fa-instagram"></i>}
      {icon === 'x' && <i className="fab fa-twitter"></i>}
    </a>
  );
};

export default Navbar;
