import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react'; 

export const revalidate = 0;

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]{
    name, price, tag, "imageUrl": image.asset->url, shortDescription, details
  }`, { slug: params.slug });

  if (!product) return <div className="text-center py-20 font-bold text-2xl">Không tìm thấy sản phẩm!</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ảnh bên trái */}
          <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-8">
            <img src={product.imageUrl || "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=400"} alt={product.name} className="w-full h-auto object-contain" />
          </div>

          {/* Thông tin bên phải */}
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-3 py-1 rounded-full">{product.tag}</span>
            <h1 className="text-4xl font-extrabold mt-6">{product.name}</h1>
            <p className="text-3xl font-black text-blue-600 mt-6">{product.price}</p>
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
               <p className="text-slate-600 italic">"{product.shortDescription}"</p>
            </div>
            <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all">
              Đặt hàng ngay: 09xx.xxx.xxx
            </button>
          </div>
        </div>

        {/* Nội dung chi tiết dài bên dưới */}
        <div className="mt-20 border-t pt-12">
          <h2 className="text-2xl font-bold mb-8">Thông số kỹ thuật & Chi tiết</h2>
          <div className="prose prose-blue max-w-none text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-3xl">
            {product.details ? (
              <PortableText value={product.details} />
            ) : (
              <p>Đang cập nhật chi tiết sản phẩm...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}