// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/vercel.svg';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  return (
    <nav className="p-4 justify-around flex border-b-2 items-center">
      <div className='flex md:hidden'>
      
      <Sheet>
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent side={'left'}>
  <ul className="flex flex-col gap-y-5 text-black text-[16px]">
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
    {/* <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader> */}
  </SheetContent>
</Sheet>

      </div>
        <div className="">
          <Link href="/" >
          <Image  src={Logo} width={100} height={100} alt='logo' className='h-14 w-14 hidden md:flex'/>
          </Link>
        </div>
      <div>
        <ul className="hidden md:flex gap-x-5 text-black text-[16px]">
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
