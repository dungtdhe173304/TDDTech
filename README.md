# TDDTech

Website React 19.3 + Next.js 16.4, sử dụng giao diện đã chuyển từ bản HTTrack cục bộ. Website chạy từ mã và tài nguyên trong dự án.

## Chạy website

```powershell
cd D:\TDDTECH\TDDTech\TDDTech
npm.cmd install
npm.cmd run dev
```

Mở http://localhost:3000. Nếu đang có phiên development cũ, dừng bằng Ctrl+C rồi chạy lại để nhận cấu hình mới. Dùng `npm.cmd` để tránh PowerShell chặn `npm.ps1`.

```powershell
npm.cmd run build
npm.cmd run start
```

Development dùng `.next`; production dùng `.next-production` để tránh làm lẫn cache.

## Cấu hình tự chủ

Thông tin tập trung tại `src/config/site.js`. Mặc định Zalo/hotline dùng `0393312336`, email dùng `thieuducdung254@gmail.com`, Facebook dùng `https://www.facebook.com/dungchuche25`. Có thể ghi đè bằng các biến tương ứng trong `.env.local` theo `.env.example` rồi build lại. Các kênh chưa được cung cấp vẫn dẫn về `/lien-he` nội bộ.

Canonical và schema dùng host đang truy cập. Sitemap và robots dùng Host của yêu cầu hoặc `NEXT_PUBLIC_SITE_URL` nếu đã cấu hình. Thông tin pháp nhân/ngân hàng chưa được cung cấp hiển thị Chưa cập nhật.

Logo, icon và ảnh chia sẻ thuộc nhận diện TDDTech. Ảnh, video và font được phục vụ từ `public`; CSP chỉ cho phép tải tài nguyên và kết nối từ chính website. Các ảnh mẫu dự án vẫn là nội dung tham khảo đã sao chép cục bộ và có thể chứa logo/chữ nằm sẵn trong ảnh. Liên kết đến website dự án và tài liệu tham khảo là nội dung tham khảo, không phải phụ thuộc để dựng giao diện.

## Cấu trúc

- `src/app`: khung Next.js, CSS/font, metadata, sitemap/robots và nội dung khi tắt JavaScript.
- `src/config/site.js`: nhận diện và thông tin liên hệ của website.
- `src/components/OriginalWebsite.tsx`: tích hợp ứng dụng React vào Next.js.
- `src/original`: các thành phần, dữ liệu và hiệu ứng đã chuyển, định dạng lại và bỏ liên kết/liên hệ bên gốc.
- `src/content`: nội dung HTML phục vụ metadata và dự phòng.
- `public`: tài nguyên cục bộ; `public/brand` chứa nhận diện mới.
- `tests`: kiểm tra desktop/mobile, điều hướng, liên hệ và SEO.
- `verification`: báo cáo cục bộ; không đưa vào Git.

Bản HTTrack chỉ có JavaScript đã biên dịch, không có JSX/TSX ban đầu. Next.js trực tiếp biên dịch và chia các module React đã chuyển. Điều hướng trong giao diện dùng React Router; Next.js tiếp nhận URL truy cập trực tiếp. Giao diện tương tác chạy trong trình duyệt; metadata và nội dung dự phòng phục vụ từ server. Các liên kết `.html` cũ chuyển hướng về URL sạch.

## Kiểm tra

Máy cần có Google Chrome.

```powershell
npm.cmd run typecheck
npm.cmd run test:e2e
```

E2E tự khởi chạy production tại cổng 3100 và chặn yêu cầu ra ngoài. Nó kiểm tra các trang dùng tài nguyên cục bộ, không còn URL/thông tin liên hệ của bên gốc, canonical thuộc host hiện tại, nút liên hệ mở trang nội bộ và sitemap/robots đúng host.

Kết quả bản tự chủ nằm trong `verification/INDEPENDENT.md`. Ảnh đối chiếu bản gốc trong `verification` thuộc lượt chuyển giao diện trước khi đổi nhận diện; không phải chứng nhận giống mọi pixel sau khi đổi thương hiệu.

## Nhập lại giao diện tham chiếu

Các lệnh sau ghi lại các module và CSS; lưu thay đổi thủ công trước khi chạy. Bản tham chiếu `../ximitech.vn` được giữ nguyên.

```powershell
node scripts/import-original.mjs
node scripts/cache-media.mjs
node scripts/download-assets.mjs
node scripts/make-independent.mjs
npx.cmd prettier --write src/original src/app/globals.css src/app/loader.css src/app/fonts.css
npm.cmd run build
```

Tải tài nguyên cần Internet. Lệnh nhập tự chạy `make-independent.mjs` để tránh khôi phục liên kết và thông tin liên hệ bên gốc. Cấu hình trong `src/config/site.js` và nhận diện trong `public/brand` được giữ riêng.

## Logo 3D tùy chọn

Website mặc định dùng ảnh PNG trong `public/brand`, không yêu cầu mô hình 3D. Nếu có mô hình GLB 2.0 riêng, đặt file trong `public/models` và cấu hình `NEXT_PUBLIC_LOGO_MODEL_URL=/models/tddtech-logo-3d.glb` rồi khởi động lại development hoặc build lại. Bộ tải kiểm tra HTTP, loại nội dung và header GLB trước khi đưa vào Three.js để tránh đọc nhầm trang HTML thành mô hình.

Dòng bản quyền dùng component JSX tại `src/components/Copyright.tsx`. Kiểm tra bộ tải bằng `npm.cmd run test:unit`; kiểm tra trình duyệt bằng `npm.cmd run test:e2e`.
