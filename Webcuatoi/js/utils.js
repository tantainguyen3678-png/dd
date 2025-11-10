// js/utils.js
// Các hàm tiện ích dùng chung cho toàn bộ dự án
// ES6 module – import/export

/**
 * Định dạng tiền tệ VNĐ
 * @param {number} value - Giá tiền (số)
 * @returns {string} - "150.000 ₫"
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(value);
};

/**
 * Lấy phần tử DOM bằng ID
 * @param {string} id
 * @returns {HTMLElement}
 */
export const byId = (id) => document.getElementById(id);

/**
 * Load và enrich dữ liệu sản phẩm
 * - Thêm priceFmt
 * - Đảm bảo images là mảng
 * @param {Array} products
 * @returns {Array} enriched products
 */
export const loadProducts = (products) => {
  return products.map(p => ({
    ...p,
    priceFmt: formatCurrency(p.price),
    images: Array.isArray(p.images) ? p.images : [p.image].filter(Boolean)
  }));
};

/**
 * Lọc + sắp xếp sản phẩm
 * @param {Array} products - Danh sách đã load
 * @param {string} query - Từ khóa tìm kiếm
 * @param {string} sortKey - 'popular' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'
 * @returns {Array} filtered + sorted
 */
export const getFilteredSorted = (products, query = '', sortKey = 'popular') => {
  let filtered = products;

  // Tìm kiếm
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Sắp xếp
  const sorted = [...filtered];
  switch (sortKey) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'popular':
    default:
      // Giữ nguyên thứ tự ban đầu hoặc có thể thêm logic lượt xem
      break;
  }

  return sorted;
};

/**
 * Debounce – tránh gọi hàm quá nhanh (dùng cho search)
 * @param {Function} func
 * @param {number} delay
 * @returns {Function}
 */
export const debounce = (func, delay = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

/**
 * Tạo ID ngẫu nhiên (dùng cho đơn hàng)
 * @returns {string} - VD: OD9K2M
 */
export const generateOrderId = () => {
  return 'OD' + Date.now().toString(36).toUpperCase();
};

/**
 * Kiểm tra số lượng hợp lệ
 * @param {number} qty
 * @param {number} maxStock
 * @returns {number}
 */
export const validateQty = (qty, maxStock) => {
  const num = parseInt(qty, 10);
  if (isNaN(num) || num < 1) return 1;
  if (num > maxStock) return maxStock;
  return num;
};