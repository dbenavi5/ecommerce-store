import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("7fe61ae0-2321-49d7-af31-ed18a5629ccd");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard
          data={billboard}
          className="text-[#FFE45E] bg-gradient-to-r from-black/50 to-black/20"
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
