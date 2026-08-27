export type Product = {
  description: string;
  image: string;
  imageAlt: string;
  number: string;
  origin: string;
  promise: string;
  strength: string;
  suitable: string;
  tag: string;
  title: string;
};

export const products = [
  {
    number: "01",
    tag: "THAN NỘI ĐỊA",
    title: "Than cục Quảng Ninh",
    promise: "Giữ nhiệt bền cho dây chuyền cần đốt ổn định.",
    description:
      "Cỡ cục chắc, nhiệt lượng cao và ngọn lửa ổn định. Phù hợp hệ lò cần chu kỳ cháy dài và kiểm soát nhiên liệu rõ ràng.",
    origin: "Quảng Ninh",
    strength: "Cháy bền, ít khói",
    suitable: "Lò hơi • Lò nung",
    image: "/images/products/L5hJB.webp",
    imageAlt: "Than cục Quảng Ninh tại kho",
  },
  {
    number: "02",
    tag: "THAN CÁM",
    title: "Than cám Quảng Ninh",
    promise: "Dễ phối trộn, cấp liệu đều cho lò hơi công nghiệp.",
    description:
      "Kích thước hạt nhỏ hỗ trợ cấp liệu liên tục và phối trộn linh hoạt. Lựa chọn thực dụng cho nhà máy cần duy trì nhịp đốt ổn định.",
    origin: "Quảng Ninh",
    strength: "Cấp liệu đều, dễ phối",
    suitable: "Lò tầng sôi • Xi măng",
    image: "/images/products/sSIUF.webp",
    imageAlt: "Than cám Quảng Ninh",
  },
  {
    number: "03",
    tag: "THAN NHẬP KHẨU",
    title: "Than đá Indonesia",
    promise: "Bắt lửa nhanh, giữ nhịp vận hành liên tục.",
    description:
      "Độ bốc cao hỗ trợ mồi lửa và ổn định quá trình cháy. Phù hợp phối trộn hoặc vận hành lò hơi có tải thay đổi.",
    origin: "Indonesia",
    strength: "Dễ bắt lửa, linh hoạt",
    suitable: "Lò hơi công nghiệp",
    image: "/images/products/tcP1f.webp",
    imageAlt: "Than đá nhập khẩu từ Indonesia",
  },
  {
    number: "04",
    tag: "DÒNG CAO CẤP",
    title: "Than đá Úc",
    promise: "Ưu tiên hiệu suất nhiệt và độ ổn định giữa các lô.",
    description:
      "Lựa chọn cho dây chuyền đặt trọng tâm vào nhiệt lượng, độ tro được kiểm soát và hiệu suất sử dụng nhiên liệu lâu dài.",
    origin: "Úc",
    strength: "Nhiệt lượng cao, ổn định",
    suitable: "Sản xuất quy mô lớn",
    image: "/images/products/v2bSl.webp",
    imageAlt: "Than đá nhập khẩu từ Úc",
  },
  {
    number: "05",
    tag: "THAN NHẬP KHẨU",
    title: "Than đá Nam Phi",
    promise: "Cân bằng hiệu suất đốt với chi phí nhiên liệu.",
    description:
      "Đặc tính cháy ổn định và phù hợp phối trộn giúp nhà máy tối ưu ngân sách mà vẫn duy trì yêu cầu vận hành.",
    origin: "Nam Phi",
    strength: "Hiệu suất / chi phí tốt",
    suitable: "Lò hơi • Xi măng",
    image: "/images/products/v3EutY.webp",
    imageAlt: "Than đá nhập khẩu từ Nam Phi",
  },
] satisfies readonly Product[];
