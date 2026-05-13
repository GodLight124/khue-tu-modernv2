import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react'; // Công cụ để đọc nội dung văn bản dài

export const revalidate = 0;

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]{
    name, price, tag, "imageUrl": image.asset->url, shortDescription, details
  }`, { slug: params.slug });

  if (!product) return <div className="text-center py-20">Không tìm thấy sản phẩm!</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ảnh bên trái */}
          <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-100">
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
          </div>

          {/* Thông tin bên phải */}
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{product.tag}</span>
            <h1 className="text-4xl font-extrabold mt-4">{product.name}</h1>
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
          <div className="prose prose-blue max-w-none text-slate-700 leading-relaxed">
            {/* Đây là nơi hiển thị toàn bộ bài viết bạn gõ trong Sanity */}
            <PortableText value={product.details} />
          </div>
        </div>
      </div>
    </div>
  );
}