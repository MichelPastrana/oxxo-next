import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "../_components/ProductCard";
import { Product, Provider } from "@/entities";
import UpdateProduct from "./_components/UpdateProduct";
import DeleteProduct from "./_components/DeleteProduct";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const response = await fetch(`${API_URL}/products/${params.id}`, {
        headers: {
            ...authHeaders(),
        }
    })
    const product: Product = await response.json()
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders(),
        }
    })
    const providers: Provider[] = await responseProviders.json()
    return (
        <div className="w-full">
            <div className="bg-gray-700">
                <h1 className="w-full font-bold text-center text-2xl py-2 text-white">Nombre del producto: {product.productName}</h1>
                <h2 className="text-xl font bold text-white text-center">Precio: {product.price}</h2>
                <h3 className="text-md font-bold text-white text-center py-2">Cant. de sellos: {product.countSeal}</h3>
            </div>
            <UpdateProduct product={product} providers={providers} />
            <div className="pl-10">
                <DeleteProduct productId={product.productId} />
            </div>
        </div>
    );
}