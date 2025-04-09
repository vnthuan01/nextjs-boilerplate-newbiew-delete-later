import ProductDetails from "src/pages/products/productDetails";
import NotFound from "./notFound";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  if (parseInt(productId) > 100) return <NotFound />;
  return <ProductDetails productId={productId} />;
}
