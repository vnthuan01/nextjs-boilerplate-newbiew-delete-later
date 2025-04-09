interface ProductDetailsProps {
  productId: string;
}

export default function ProductDetailsPage({ productId }: ProductDetailsProps) {
  return (
    <>
      <h1>Tôi đã điều hướng trang này thành công</h1>
      <h1>Detail of product {productId}</h1>
    </>
  );
}
