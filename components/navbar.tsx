import Link from "next/link";
import Container from "@/components/ui/container";
import MainNavbar from "@/components/main-navbar";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import getStoreName from "@/actions/get-store-name";

interface NavbarProps {
  params: {
    name?: string;
  };
}

export const revalidate = 0;

const Navbar = async ({params}: NavbarProps) => {
  const categories = await getCategories();
  const storeName = await getStoreName(params);

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl uppercase">{storeName.name}</p>
          </Link>
          <MainNavbar data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
