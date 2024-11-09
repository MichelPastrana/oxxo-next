import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import ProviderCard from "../_components/ProviderCard"
import { Product, Provider } from "@/entities"
import ProductCard from "./_components/ProductCard"
import Link from "next/link"

export default async function ProviderPage({ params }: {
    params: {
        id: string
    }
}) {
    const provider: Provider = await (await fetch(`${API_URL}/providers/${params.id}`, {
        headers: {
            ...authHeaders()
        }
    })).json()
    return (
        <div className="flex flex-grow-0 flex-col pl-10 gap-10 h-[90vh] pt-10">
            <ProviderCard provider={provider} />
            <div className="h-0.5 bg-gray-700 w-[87vw]" />
            <div className="flex flex-wrap gap-10" >
                {provider.products.map((product: Product) => (
                    <Link className="hover:scale-110 transition-all"
                        href={{ pathname: `/dashboard/products/${product.productId}` }}
                        key={product.productId}>
                        <ProductCard key={product.productId} product={product} />
                    </Link>
                ))}
            </div>
        </div>
    )
}