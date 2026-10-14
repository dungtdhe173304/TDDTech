export async function loadLogoModel(url) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Không tải được mô hình logo (${response.status}).`);
  if (response.headers.get("content-type")?.includes("text/html")) {
    throw new Error(
      "Đường dẫn mô hình logo trả về HTML; cần một tệp GLB hợp lệ.",
    );
  }
  const data = await response.arrayBuffer();
  const header = new DataView(data);
  if (
    data.byteLength < 20 ||
    header.getUint32(0, true) !== 0x46546c67 ||
    header.getUint32(4, true) !== 2 ||
    header.getUint32(8, true) !== data.byteLength
  ) {
    throw new Error("Tệp mô hình logo không phải GLB 2.0 hợp lệ.");
  }
  return data;
}
