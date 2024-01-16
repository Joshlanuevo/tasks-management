import Link from "next/link";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigations = () => {
  return (
    <div>
        <MainHeader>
            <h1 className="text-white bg-black py-2 px-4 rounded-lg text-sm sm:text-md font-bold uppercase"> {/* #5865F2 */}
                <Link href="/">qwerty</Link>
            </h1>
            <nav className="hidden sm:block">
                <NavLinks />
            </nav>
        </MainHeader>
    </div>
  )
}

export default MainNavigations;