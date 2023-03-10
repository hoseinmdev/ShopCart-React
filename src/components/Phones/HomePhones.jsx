import Product from "components/Product/Product";
import { useProducts } from "context/ProductsProvider";
import HomePageProductsLayout from "layout/HomePageProductsLayout/HomePageProductsLayout";
const HomePhones = () => {
  const { productState } = useProducts();
  const products = productState.allProducts.filter((p) => p.category === "phones");

  return (
    <>
      <HomePageProductsLayout
        title="موبایل ها"
        titleColor="#0f172a"
        titleLineColor="#0f172a"
        bgColor="#ede9fe"
        smallShapeColor="#7dd3fc"
        normalShapeColor="#f472b6"
        bigShapeColor="#bae6fd"
      >
        {products.map((p) => {
          const product = {
            id: p.id,
            type: p.type,
            title: p.title,
            price: p.price,
            imageURL: p.imageURL,
            Specifications: p.Specifications,
            comments: p.comments,
            quantity: p.quantity,
            technicalCheck: p.technicalCheck,
            positivePoints: p.positivePoints,
            negativePoints: p.negativePoints,
          };
          return <Product key={p.id} product={product} />;
        })}
      </HomePageProductsLayout>
    </>
  );
};

export default HomePhones;
