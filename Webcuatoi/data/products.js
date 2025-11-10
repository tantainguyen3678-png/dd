// data/products.js
// 50 sản phẩm đồ dùng học tập – DỄ THAY ẢNH BẰNG TAY
// images: [ảnh lớn, ảnh nhỏ 1, ảnh nhỏ 2, ảnh nhỏ 3]
// Dùng ảnh placeholder cố định – bạn chỉ cần bỏ ảnh vào thư mục images/products/

const IMG = (name) => `images/products/${name}.jpg`; // Dễ thay: chỉ cần bỏ ảnh vào thư mục images/products/

const descriptions = [
  "Sản phẩm chất lượng cao, phù hợp cho học sinh, sinh viên và văn phòng.",
  "Thiết kế ergonomics, bền bỉ, dễ sử dụng trong học tập hàng ngày.",
  "Chất liệu an toàn, không độc hại, hỗ trợ học tập hiệu quả và sáng tạo.",
  "Được yêu thích bởi hàng triệu học sinh trên toàn quốc, giá cả phải chăng.",
  "Màu sắc đa dạng, thiết kế hiện đại, lý tưởng cho việc ghi chép và vẽ vời."
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Bút bi Thiên Long B-01 đen",
    price: 5000,
    stock: 100,
    images: [
      IMG("https://product.hstatic.net/200000280811/product/but-gel-thien-long-gel-b01-muc-den-02_82dd350765284165b0e30cf07bbfd063_617fffe029ab483e9297438d2720432d_master.jpg"),
      IMG("but-bi-thien-long-1"),
      IMG("but-bi-thien-long-2"),
      IMG("but-bi-thien-long-3")
    ],
    description: descriptions[0]
  },
  {
    id: 2,
    name: "Sổ tay Oxford A5 kẻ ngang 80 trang",
    price: 35000,
    stock: 50,
    images: [
      IMG("so-tay-oxford"),
      IMG("so-tay-oxford-1"),
      IMG("so-tay-oxford-2"),
      IMG("so-tay-oxford-3")
    ],
    description: descriptions[1]
  },
  {
    id: 3,
    name: "Cặp sách JanSport SuperBreak cổ điển",
    price: 450000,
    stock: 15,
    images: [
      IMG("cap-jansport"),
      IMG("cap-jansport-1"),
      IMG("cap-jansport-2"),
      IMG("cap-jansport-3")
    ],
    description: descriptions[2]
  },
  {
    id: 4,
    name: "Máy tính Casio FX-570ES Plus",
    price: 350000,
    stock: 25,
    images: [
      IMG("may-tinh-casio"),
      IMG("may-tinh-casio-1"),
      IMG("may-tinh-casio-2"),
      IMG("may-tinh-casio-3")
    ],
    description: descriptions[3]
  },
  {
    id: 5,
    name: "Thước kẻ nhựa 30cm trong suốt",
    price: 8000,
    stock: 120,
    images: [
      IMG("thuoc-ke-30cm"),
      IMG("thuoc-ke-30cm-1"),
      IMG("thuoc-ke-30cm-2"),
      IMG("thuoc-ke-30cm-3")
    ],
    description: descriptions[0]
  },
  {
    id: 6,
    name: "Tẩy cao su Staedtler Mars Plastic",
    price: 15000,
    stock: 80,
    images: [
      IMG("tay-staedtler"),
      IMG("tay-staedtler-1"),
      IMG("tay-staedtler-2"),
      IMG("tay-staedtler-3")
    ],
    description: descriptions[4]
  },
  {
    id: 7,
    name: "Bút highlight Stabilo Boss vàng",
    price: 25000,
    stock: 60,
    images: [
      IMG("but-highlight-stabilo"),
      IMG("but-highlight-stabilo-1"),
      IMG("but-highlight-stabilo-2"),
      IMG("but-highlight-stabilo-3")
    ],
    description: descriptions[1]
  },
  {
    id: 8,
    name: "Bút chì màu Faber-Castell 12 màu",
    price: 85000,
    stock: 40,
    images: [
      IMG("but-chi-mau-faber"),
      IMG("but-chi-mau-faber-1"),
      IMG("but-chi-mau-faber-2"),
      IMG("but-chi-mau-faber-3")
    ],
    description: descriptions[2]
  },
  {
    id: 9,
    name: "Balo học sinh Nike Elemental chống nước",
    price: 650000,
    stock: 12,
    images: [
      IMG("balo-nike"),
      IMG("balo-nike-1"),
      IMG("balo-nike-2"),
      IMG("balo-nike-3")
    ],
    description: descriptions[0]
  },
  {
    id: 10,
    name: "Giấy note Post-it 3x3 vàng",
    price: 20000,
    stock: 90,
    images: [
      IMG("giay-note-postit"),
      IMG("giay-note-postit-1"),
      IMG("giay-note-postit-2"),
      IMG("giay-note-postit-3")
    ],
    description: descriptions[3]
  },
  {
    id: 11,
    name: "Hộp bút silicon 3 ngăn màu hồng",
    price: 45000,
    stock: 55,
    images: [
      IMG("hop-but-silicon"),
      IMG("hop-but-silicon-1"),
      IMG("hop-but-silicon-2"),
      IMG("hop-but-silicon-3")
    ],
    description: descriptions[1]
  },
  {
    id: 12,
    name: "Bút gel Pilot G2 0.5mm đen",
    price: 30000,
    stock: 70,
    images: [
      IMG("but-gel-pilot"),
      IMG("but-gel-pilot-1"),
      IMG("but-gel-pilot-2"),
      IMG("but-gel-pilot-3")
    ],
    description: descriptions[4]
  },
  {
    id: 13,
    name: "Tập vở Deli 200 trang kẻ ngang",
    price: 28000,
    stock: 85,
    images: [
      IMG("tap-vo-deli"),
      IMG("tap-vo-deli-1"),
      IMG("tap-vo-deli-2"),
      IMG("tap-vo-deli-3")
    ],
    description: descriptions[0]
  },
  {
    id: 14,
    name: "Kẹp giấy kim loại 28mm hộp 100 cái",
    price: 12000,
    stock: 100,
    images: [
      IMG("kep-giay"),
      IMG("kep-giay-1"),
      IMG("kep-giay-2"),
      IMG("kep-giay-3")
    ],
    description: descriptions[2]
  },
  {
    id: 15,
    name: "Hồ dán UHU Stick 8.2g",
    price: 18000,
    stock: 75,
    images: [
      IMG("ho-dan-uhu"),
      IMG("ho-dan-uhu-1"),
      IMG("ho-dan-uhu-2"),
      IMG("ho-dan-uhu-3")
    ],
    description: descriptions[1]
  },
  {
    id: 16,
    name: "Dao rọc giấy OLFA nhỏ gọn",
    price: 35000,
    stock: 30,
    images: [
      IMG("dao-roc-giay"),
      IMG("dao-roc-giay-1"),
      IMG("dao-roc-giay-2"),
      IMG("dao-roc-giay-3")
    ],
    description: descriptions[3]
  },
  {
    id: 17,
    name: "Bút mực Parker Jotter xanh dương",
    price: 250000,
    stock: 10,
    images: [
      IMG("but-muc-parker"),
      IMG("but-muc-parker-1"),
      IMG("but-muc-parker-2"),
      IMG("but-muc-parker-3")
    ],
    description: descriptions[4]
  },
  {
    id: 18,
    name: "Sổ tay da Moleskine Classic",
    price: 400000,
    stock: 18,
    images: [
      IMG("so-tay-moleskine"),
      IMG("so-tay-moleskine-1"),
      IMG("so-tay-moleskine-2"),
      IMG("so-tay-moleskine-3")
    ],
    description: descriptions[0]
  },
  {
    id: 19,
    name: "Bút dạ quang Sharpie 5 màu",
    price: 80000,
    stock: 30,
    images: [
      IMG("but-da-quang-sharpie"),
      IMG("but-da-quang-sharpie-1"),
      IMG("but-da-quang-sharpie-2"),
      IMG("but-da-quang-sharpie-3")
    ],
    description: descriptions[2]
  },
  {
    id: 20,
    name: "Bút chì 2B HB hộp 12 cây",
    price: 20000,
    stock: 100,
    images: [
      IMG("but-chi-hb"),
      IMG("but-chi-hb-1"),
      IMG("but-chi-hb-2"),
      IMG("but-chi-hb-3")
    ],
    description: descriptions[1]
  },
  {
    id: 21,
    name: "Cặp đựng tài liệu A4 có khóa",
    price: 60000,
    stock: 40,
    images: [
      IMG("cap-tai-lieu"),
      IMG("cap-tai-lieu-1"),
      IMG("cap-tai-lieu-2"),
      IMG("cap-tai-lieu-3")
    ],
    description: descriptions[3]
  },
  {
    id: 22,
    name: "Máy tính Sharp EL-531",
    price: 180000,
    stock: 22,
    images: [
      IMG("may-tinh-sharp"),
      IMG("may-tinh-sharp-1"),
      IMG("may-tinh-sharp-2"),
      IMG("may-tinh-sharp-3")
    ],
    description: descriptions[0]
  },
  {
    id: 23,
    name: "Giấy in A4 Double A 70gsm",
    price: 50000,
    stock: 50,
    images: [
      IMG("giay-in-a4"),
      IMG("giay-in-a4-1"),
      IMG("giay-in-a4-2"),
      IMG("giay-in-a4-3")
    ],
    description: descriptions[4]
  },
  {
    id: 24,
    name: "Bút lông vẽ Artline đen",
    price: 20000,
    stock: 60,
    images: [
      IMG("but-long-artline"),
      IMG("but-long-artline-1"),
      IMG("but-long-artline-2"),
      IMG("but-long-artline-3")
    ],
    description: descriptions[1]
  },
  {
    id: 25,
    name: "Tẩy nghệ thuật lớn Pentel",
    price: 25000,
    stock: 35,
    images: [
      IMG("tay-pentel"),
      IMG("tay-pentel-1"),
      IMG("tay-pentel-2"),
      IMG("tay-pentel-3")
    ],
    description: descriptions[2]
  },
  {
    id: 26,
    name: "Bộ màu nước Crayola 12 ô",
    price: 120000,
    stock: 28,
    images: [
      IMG("mau-nuoc-crayola"),
      IMG("mau-nuoc-crayola-1"),
      IMG("mau-nuoc-crayola-2"),
      IMG("mau-nuoc-crayola-3")
    ],
    description: descriptions[3]
  },
  {
    id: 27,
    name: "Sáp màu màu sáp 24 cây",
    price: 80000,
    stock: 32,
    images: [
      IMG("sap-mau"),
      IMG("sap-mau-1"),
      IMG("sap-mau-2"),
      IMG("sap-mau-3")
    ],
    description: descriptions[0]
  },
  {
    id: 28,
    name: "Bút chì kỹ thuật 0.5mm",
    price: 50000,
    stock: 25,
    images: [
      IMG("but-chi-ky-thuat"),
      IMG("but-chi-ky-thuat-1"),
      IMG("but-chi-ky-thuat-2"),
      IMG("but-chi-ky-thuat-3")
    ],
    description: descriptions[1]
  },
  {
    id: 29,
    name: "Compas vẽ hình học",
    price: 30000,
    stock: 45,
    images: [
      IMG("compas"),
      IMG("compas-1"),
      IMG("compas-2"),
      IMG("compas-3")
    ],
    description: descriptions[4]
  },
  {
    id: 30,
    name: "Êke 180 độ nhựa",
    price: 15000,
    stock: 70,
    images: [
      IMG("eke"),
      IMG("eke-1"),
      IMG("eke-2"),
      IMG("eke-3")
    ],
    description: descriptions[0]
  },
  {
    id: 31,
    name: "Tập vẽ giấy trắng A4",
    price: 40000,
    stock: 55,
    images: [
      IMG("tap-ve-a4"),
      IMG("tap-ve-a4-1"),
      IMG("tap-ve-a4-2"),
      IMG("tap-ve-a4-3")
    ],
    description: descriptions[2]
  },
  {
    id: 32,
    name: "Bút bi Parker xanh dương",
    price: 45000,
    stock: 38,
    images: [
      IMG("but-bi-parker"),
      IMG("but-bi-parker-1"),
      IMG("but-bi-parker-2"),
      IMG("but-bi-parker-3")
    ],
    description: descriptions[1]
  },
  {
    id: 33,
    name: "Bút máy Montblanc cơ bản",
    price: 2000000,
    stock: 5,
    images: [
      IMG("but-may-montblanc"),
      IMG("but-may-montblanc-1"),
      IMG("but-may-montblanc-2"),
      IMG("but-may-montblanc-3")
    ],
    description: descriptions[3]
  },
  {
    id: 34,
    name: "Bút lông bảng trắng Expo",
    price: 35000,
    stock: 50,
    images: [
      IMG("but-long-bang"),
      IMG("but-long-bang-1"),
      IMG("but-long-bang-2"),
      IMG("but-long-bang-3")
    ],
    description: descriptions[0]
  },
  {
    id: 35,
    name: "Bảng từ Nam châm trắng",
    price: 150000,
    stock: 15,
    images: [
      IMG("bang-tu"),
      IMG("bang-tu-1"),
      IMG("bang-tu-2"),
      IMG("bang-tu-3")
    ],
    description: descriptions[4]
  },
  {
    id: 36,
    name: "Nam châm hình học",
    price: 25000,
    stock: 60,
    images: [
      IMG("nam-cham"),
      IMG("nam-cham-1"),
      IMG("nam-cham-2"),
      IMG("nam-cham-3")
    ],
    description: descriptions[1]
  },
  {
    id: 37,
    name: "Bút xóa bảng trắng",
    price: 30000,
    stock: 40,
    images: [
      IMG("but-xoa-bang"),
      IMG("but-xoa-bang-1"),
      IMG("but-xoa-bang-2"),
      IMG("but-xoa-bang-3")
    ],
    description: descriptions[2]
  },
  {
    id: 38,
    name: "Khăn lau bảng microfiber",
    price: 20000,
    stock: 65,
    images: [
      IMG("khan-lau-bang"),
      IMG("khan-lau-bang-1"),
      IMG("khan-lau-bang-2"),
      IMG("khan-lau-bang-3")
    ],
    description: descriptions[0]
  },
  {
    id: 39,
    name: "Sticker dán trang trí học tập",
    price: 15000,
    stock: 80,
    images: [
      IMG("sticker-hoc-tap"),
      IMG("sticker-hoc-tap-1"),
      IMG("sticker-hoc-tap-2"),
      IMG("sticker-hoc-tap-3")
    ],
    description: descriptions[3]
  },
  {
    id: 40,
    name: "Băng keo Scotch trong suốt",
    price: 20000,
    stock: 75,
    images: [
      IMG("bang-keo-scotch"),
      IMG("bang-keo-scotch-1"),
      IMG("bang-keo-scotch-2"),
      IMG("bang-keo-scotch-3")
    ],
    description: descriptions[1]
  },
  {
    id: 41,
    name: "Dập ghim Rexel mini",
    price: 50000,
    stock: 30,
    images: [
      IMG("dap-ghim"),
      IMG("dap-ghim-1"),
      IMG("dap-ghim-2"),
      IMG("dap-ghim-3")
    ],
    description: descriptions[4]
  },
  {
    id: 42,
    name: "Hộp đựng bút kim loại",
    price: 80000,
    stock: 20,
    images: [
      IMG("hop-but-kim-loai"),
      IMG("hop-but-kim-loai-1"),
      IMG("hop-but-kim-loai-2"),
      IMG("hop-but-kim-loai-3")
    ],
    description: descriptions[0]
  },
  {
    id: 43,
    name: "Bút ký bi cao cấp",
    price: 100000,
    stock: 25,
    images: [
      IMG("but-ky-cao-cap"),
      IMG("but-ky-cao-cap-1"),
      IMG("but-ky-cao-cap-2"),
      IMG("but-ky-cao-cap-3")
    ],
    description: descriptions[2]
  },
  {
    id: 44,
    name: "Sổ tay kẻ ô vuông",
    price: 50000,
    stock: 35,
    images: [
      IMG("so-tay-o-vuong"),
      IMG("so-tay-o-vuong-1"),
      IMG("so-tay-o-vuong-2"),
      IMG("so-tay-o-vuong-3")
    ],
    description: descriptions[1]
  },
  {
    id: 45,
    name: "Bút highlight neon đa màu",
    price: 40000,
    stock: 45,
    images: [
      IMG("but-highlight-neon"),
      IMG("but-highlight-neon-1"),
      IMG("but-highlight-neon-2"),
      IMG("but-highlight-neon-3")
    ],
    description: descriptions[3]
  },
  {
    id: 46,
    name: "Bộ bút chì màu 24 cây",
    price: 200000,
    stock: 18,
    images: [
      IMG("bo-but-chi-mau"),
      IMG("bo-but-chi-mau-1"),
      IMG("bo-but-chi-mau-2"),
      IMG("bo-but-chi-mau-3")
    ],
    description: descriptions[0]
  },
  {
    id: 47,
    name: "Balo học sinh chống gù",
    price: 500000,
    stock: 12,
    images: [
      IMG("balo-chong-gu"),
      IMG("balo-chong-gu-1"),
      IMG("balo-chong-gu-2"),
      IMG("balo-chong-gu-3")
    ],
    description: descriptions[4]
  },
  {
    id: 48,
    name: "Giấy note hình vuông",
    price: 25000,
    stock: 50,
    images: [
      IMG("giay-note-vuong"),
      IMG("giay-note-vuong-1"),
      IMG("giay-note-vuong-2"),
      IMG("giay-note-vuong-3")
    ],
    description: descriptions[1]
  },
  {
    id: 49,
    name: "Hộp bút vải canvas",
    price: 60000,
    stock: 28,
    images: [
      IMG("hop-but-canvas"),
      IMG("hop-but-canvas-1"),
      IMG("hop-but-canvas-2"),
      IMG("hop-but-canvas-3")
    ],
    description: descriptions[2]
  },
  {
    id: 50,
    name: "Bút bi đa năng 4 màu",
    price: 35000,
    stock: 45,
    images: [
      IMG("but-da-nang"),
      IMG("but-da-nang-1"),
      IMG("but-da-nang-2"),
      IMG("but-da-nang-3")
    ],
    description: descriptions[0]
  }
];