import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // 1. KHUÔN MẪU CÀI ĐẶT TRANG CHỦ (BANNER)
    {
      name: 'homeSettings',
      title: 'Cài đặt Trang chủ',
      type: 'document',
      fields: [
        { 
          name: 'heroTitle', 
          title: 'Tiêu đề Banner', 
          type: 'string',
          description: 'Ví dụ: Nâng tầm Công nghệ Mã vạch'
        },
        { 
          name: 'heroSubtitle', 
          title: 'Mô tả ngắn gọn', 
          type: 'text',
          description: 'Dòng chữ nhỏ dưới tiêu đề'
        },
        { 
          name: 'heroImage', 
          title: 'Ảnh Banner Hero', 
          type: 'image', 
          options: { hotspot: true } 
        },
      ],
    },
    // 2. GIỮ NGUYÊN KHUÔN SẢN PHẨM
    {
      name: 'product',
      title: 'Sản Phẩm',
      type: 'document',
      fields: [
        { name: 'name', title: 'Tên sản phẩm', type: 'string' },
        { name: 'slug', title: 'Đường dẫn', type: 'slug', options: { source: 'name' } },
        { name: 'price', title: 'Giá', type: 'string' },
        { name: 'tag', title: 'Nhãn', type: 'string' },
        { name: 'image', title: 'Ảnh', type: 'image', options: { hotspot: true } },
        { name: 'shortDescription', title: 'Mô tả ngắn', type: 'text' },
        { name: 'details', title: 'Chi tiết', type: 'array', of: [{ type: 'block' }] },
      ],
    },
    // 3. GIỮ NGUYÊN KHUÔN TIN TỨC
    {
      name: 'post',
      title: 'Bài Viết (Tin Tức)',
      type: 'document',
      fields: [
        { name: 'title', title: 'Tiêu đề', type: 'string' },
        { name: 'excerpt', title: 'Mô tả ngắn', type: 'text' },
        { name: 'mainImage', title: 'Ảnh', type: 'image', options: { hotspot: true } },
        { name: 'publishedAt', title: 'Ngày đăng', type: 'date' },
        { name: 'body', title: 'Nội dung', type: 'array', of: [{ type: 'block' }] },
      ],
    },
  ],
}