"use client"
import { Product, Provider } from "@/entities";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import ProductCard from "./ProductCard";

export default function FileteredCards({ products, providers }: { products: Product[], providers: Provider[] }) {
    const [filtered, setFiltered] = useState<string>("");
    const [provider, setProvider] = useState<string>();
    const [show, setShow] = useState(false);
    const [productsList, setProductsList] = useState<Product[]>(products);
    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if (product.productName.toLowerCase().includes(filtered.toLowerCase()) && product.provider.providerId === provider) {
                return true;
            } else return false;
        });
        setProductsList(filteredProducts);
        setShow(true);
    }, [filtered, provider, products])

    return (
        <div className="min-h-[90vh] max-h-[90vh] overflow-y-auto flex flex-col gap-4 border-r-1 pt-10 px-10">
            <Select label="Proveedor" onChange={(e) => {
                setProvider(e.target.value);
            }}>
                {providers.map((provider) => (
                    <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                ))}
            </Select>
            <Input
                label="Nombre del producto"
                onChange={(e) => {
                    setFiltered(e.target.value)
                }} />
            {show && productsList.map((product) => {
                return (
                    <Link
                        key={product.productId}
                        href={{ pathname: `/dashboard/products/${product.productId}` }}>
                        <ProductCard product={product} />
                    </Link>
                );
            })}
        </div>
    )

}