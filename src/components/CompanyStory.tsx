import styles from "./CompanyStory.module.css";

export default function CompanyStory() {
  return (
    <section id="hanh-trinh" className={styles.section} aria-labelledby="company-story-title">
      <div className={styles.container}>
        <div className={styles.card}>
          <figure className={styles.portrait} data-motion="left">
            <span className={styles.portraitTag}>CON NGƯỜI ĐẰNG SAU TDDTECH</span>
            <div className={styles.halo} aria-hidden="true" />
            <img
              src="/media/ximitech/company-profile/v1/myavatar.png"
              alt="Thiều Đức Dũng — Tech Team & Founder TDDTech"
              width="1120"
              height="1392"
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.caption} data-motion="up">
              <strong>Thiều Đức Dũng</strong>
              <span>Tech Team & Founder TDDTech</span>
            </figcaption>
          </figure>
          <article className={styles.story} data-motion="up">
            <p className={styles.eyebrow} data-motion="up">Hình thành & phát triển</p>
            <h2 id="company-story-title" data-motion="heading">Từ một ý tưởng nhỏ,<br />xây giá trị dài lâu.</h2>
            <p className={styles.lead} data-motion="up">
              TDDTech bắt đầu từ mong muốn làm ra những website mà người chủ có thể tự hào giới thiệu, người dùng dễ dàng sử dụng và doanh nghiệp có thể tiếp tục phát triển.
            </p>
            <div className={styles.prose}>
              <p data-motion="up">
                Với Thiều Đức Dũng, khởi đầu của một sản phẩm không nằm ở những dòng mã. Nó nằm trong cuộc trò chuyện với người đang xây dựng công việc của mình: họ muốn kể câu chuyện gì, khách hàng đang cần điều gì và website cần giải quyết vấn đề nào. Từ sự quan tâm ấy, ý tưởng về TDDTech dần thành hình — một nơi kết nối thiết kế, công nghệ và nhu cầu thực tế.
              </p>
              <p data-motion="up">
                Trên hành trình xây dựng TDDTech, đam mê làm giao diện được đặt cạnh trách nhiệm làm sản phẩm. Một bố cục đẹp cần đi cùng nội dung rõ ràng. Một tính năng mới cần dễ dùng và dễ quản lý. Mỗi quyết định, từ cách đặt một nút liên hệ đến cấu trúc của cả hệ thống, đều quay về câu hỏi: điều này giúp ích gì cho người sử dụng?
              </p>
              <p data-motion="up">
                TDDTech chọn phát triển bằng cách làm kỹ từng việc: hiểu yêu cầu trước khi bắt tay thiết kế, trao đổi rõ trong quá trình triển khai và chuẩn bị cho cả giai đoạn vận hành sau bàn giao. Những điều học được từ mỗi bài toán là nền tảng để tiếp tục hoàn thiện cách làm, từ website giới thiệu thương hiệu đến cửa hàng trực tuyến và ứng dụng phục vụ công việc.
              </p>
              <p data-motion="up">
                Chặng đường phía trước vẫn còn nhiều ý tưởng để thực hiện. Điều TDDTech muốn giữ lại là tinh thần của ngày bắt đầu: lắng nghe cẩn thận, làm việc có trách nhiệm và xây sản phẩm có giá trị sử dụng lâu dài. Để khi doanh nghiệp bước sang một giai đoạn mới, website cũng có thể bước tiếp cùng họ.
              </p>
            </div>
            <blockquote className={styles.quote} data-motion="up">
              “Tôi muốn mỗi website bàn giao đều là một nền tảng để khách hàng tiếp tục xây dựng công việc của mình.”
              <cite>Định hướng của TDDTech</cite>
            </blockquote>
          </article>
        </div>
      </div>
    </section>
  );
}
