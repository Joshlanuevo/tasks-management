"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavLinks = () => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <ul className="nav-links list-none m-0 p-0 w-full h-full flex flex-col sm:flex-row justify-center items-center uppercase text-sm sm:text-md font-bold text-black">
            <li className={`p-2 mb-2 sm:mb-0 sm:mr-2 ${isActive("/") ? 'text-[#5865F2]' : ''}`}>
                <Link href="/">all users</Link>
            </li>
            <li className={`p-2 mb-2 sm:mb-0 sm:mr-2 ${isActive(`/tasks`) ? 'text-[#5865F2]' : ''}`}> {/*${auth.userId}*/}
                <Link href="/tasks">my task</Link>
            </li>
            <li className={`p-2 mb-2 sm:mb-0 sm:mr-2 ${isActive("/auth") ? 'text-[#5865F2]' : ''}`}>
                <Link href="/auth">sign in</Link>
            </li>
        </ul>
    )
}

export default NavLinks;