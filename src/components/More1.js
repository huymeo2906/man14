import styles from "./More1.module.css";

const More1 = () => {
  return (
    <div className={styles.more}>
      <div className={styles.more1}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ucalendarAltParent}>
              <img
                className={styles.ucalendarAltIcon}
                alt=""
                src="/ucalendaralt.svg"
              />
              <div className={styles.thiGian}>Thời gian</div>
            </div>
            <img
              className={styles.ucalendarAltIcon}
              alt=""
              src="/uangledown.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ucheckParent}>
              <img
                className={styles.ucalendarAltIcon}
                alt=""
                src="/ucheck.svg"
              />
              <div className={styles.hmNay}>Hôm nay</div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.ngyMai}>Ngày mai</div>
            <div className={styles.frameChild} />
            <div className={styles.ngyTipTheo}>7 ngày tiếp theo</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.ucalendarAltParent}>
                <img
                  className={styles.ucalendarAltIcon}
                  alt=""
                  src="/ufile.svg"
                />
                <div className={styles.thiGian}>Dự án</div>
              </div>
              <img
                className={styles.ucalendarAltIcon}
                alt=""
                src="/uangleup.svg"
              />
            </div>
            <div className={styles.inputParent}>
              <div className={styles.input}>
                <div className={styles.ucalendarAltParent}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/usearch.svg"
                  />
                  <div className={styles.search}>Search</div>
                </div>
                <img
                  className={styles.uangleDownIcon1}
                  alt=""
                  src="/ucheck.svg"
                />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.ucheckParent}>
                  <img
                    className={styles.ucalendarAltIcon}
                    alt=""
                    src="/ucheck1.svg"
                  />
                  <div className={styles.eWork}>E-Work</div>
                </div>
                <div className={styles.frameChild} />
                <div className={styles.ngyMai}>Mobishop</div>
                <div className={styles.frameChild} />
                <div className={styles.ngyTipTheo}>Lixil Ecommerce</div>
                <div className={styles.frameChild} />
                <div className={styles.ngyMai}>Panoee</div>
                <div className={styles.frameChild} />
                <div className={styles.ngyTipTheo}>Travel Booking</div>
              </div>
            </div>
          </div>
          <img
            className={styles.line16Stroke}
            alt=""
            src="/line-16-stroke.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default More1;
