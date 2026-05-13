import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // 1. KHUÔN MẪU CHO BÀI VIẾT (TIN TỨC) - Giữ nguyên như cũ
    {
      name: 'post',
      title: 'Bài Viết (Tin Tức)',
      type: 'document',
      fields: [
        { name: 'title', title: 'Tiêu đề bài viết', type: 'string' },
        { name: 'excerpt', title: 'Mô tả ngắn', type: 'text' },
        { name: 'mainImage', title: 'Ảnh đại diện', type: 'image', options: { hotspot: true } },
        { name: 'publishedAt', title: 'Ngày đăng', type: 'date' },
        { name: 'body', title: 'Nội dung chi tiết', type: 'array', of: [{ type: 'block' }] },
      ],
    },

    // 2. KHUÔN MẪU MỚI CHO SẢN PHẨM
    {
      name: 'product',
      title: 'Sản Phẩm',
      type: 'document',
      fields: [
        { 
          name: 'name', 
          title: 'Tên sản phẩm', 
          type: 'string' 
        },
        { 
          name: 'slug', 
          title: 'Đường dẫn (URL)', 
          type: 'slug',
          description: 'Nhấn nút Generate để tự động tạo link thân thiện với SEO (vd: may-in-ma-vach-zebra)',
          options: { source: 'name' } 
        },
        { 
          name: 'price', 
          title: 'Giá bán (VNĐ)', 
          type: 'string',
          description: 'Ví dụ: 18.500.000đ hoặc Liên hệ'
        },
        { 
          name: 'tag', 
          title: 'Nhãn nổi bật', 
          type: 'string',
          description: 'Ví dụ: Mới, Bán chạy, Giảm giá...'
        },
        { 
          name: 'image', 
          title: 'Ảnh sản phẩm', 
          type: 'image', 
          options: { hotspot: true } 
        },
        { 
          name: 'shortDescription', 
          title: 'Mô tả ngắn gọn', 
          type: 'text',
          description: 'Hiển thị ngay dưới tên sản phẩm'
        },
        { 
          name: 'details', 
          title: 'Chi tiết sản phẩm & Thông số kỹ thuật', 
          type: 'array', 
          of: [{ type: 'block' }],
          description: 'Khu vực này bạn có thể viết bài dài, chèn ảnh, in đậm, làm danh sách thoải mái'
        },
      ],
    },
  ],
}