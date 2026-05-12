import { notFound } from "next/navigation";
import productData from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = productData[slug];

  if (!product) return notFound();

  return <ProductDetailClient product={product} />;
}
