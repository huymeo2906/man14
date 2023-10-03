import { useState, useCallback } from "react";
import More from "../components/More";
import PortalPopup from "../components/PortalPopup";
import styles from "./GroupProjectWork.module.css";

const GroupProjectWork = () => {
  const [isMoreOpen, setMoreOpen] = useState(false);
  const [isMore1Open, setMore1Open] = useState(false);
  const [isMore2Open, setMore2Open] = useState(false);

  const openMore = useCallback(() => {
    setMoreOpen(true);
  }, []);

  const closeMore = useCallback(() => {
    setMoreOpen(false);
  }, []);

  const onFrameContainer9Click = useCallback(() => {
    // Please sync "My Tasks / Timeline / Group by Status " to the project
  }, []);

  const openMore1 = useCallback(() => {
    setMore1Open(true);
  }, []);

  const closeMore1 = useCallback(() => {
    setMore1Open(false);
  }, []);

  const onFrameContainer14Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Department" to the project
  }, []);

  const openMore2 = useCallback(() => {
    setMore2Open(true);
  }, []);

  const closeMore2 = useCallback(() => {
    setMore2Open(false);
  }, []);

  return (
    <>
      <div className={styles.groupProjectWork}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.uuserCheckParent}>
              <img
                className={styles.uuserCheckIcon}
                alt=""
                src="/uusercheck.svg"
              />
              <div className={styles.ngiXL}>Người xử lý</div>
            </div>
            <img
              className={styles.ucheckIcon}
              alt=""
              src="/ucheck.svg"
              onClick={openMore}
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ucheckParent}>
              <img className={styles.uuserCheckIcon} alt="" src="/ucheck.svg" />
              <div className={styles.hmNay}>Hôm nay</div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.ngyMai}>Ngày mai</div>
            <div className={styles.frameChild} />
            <div className={styles.ngyTipTheo}>7 ngày tiếp theo</div>
          </div>
        </div>
        <div className={styles.frameDiv} onClick={onFrameContainer9Click}>
          <div className={styles.frameGroup}>
            <div className={styles.uuserCheckParent}>
              <img
                className={styles.uuserCheckIcon}
                alt=""
                src="/utagalt.svg"
              />
              <div className={styles.ngiXL}>Trạng thái</div>
            </div>
            <img
              className={styles.ucheckIcon}
              alt=""
              src="/ucheck.svg"
              onClick={openMore1}
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ucheckParent}>
              <img className={styles.uuserCheckIcon} alt="" src="/ucheck.svg" />
              <div className={styles.hmNay}>Hôm nay</div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.ngyMai}>Ngày mai</div>
            <div className={styles.frameChild} />
            <div className={styles.ngyTipTheo}>7 ngày tiếp theo</div>
          </div>
        </div>
        <div className={styles.frameDiv} onClick={onFrameContainer14Click}>
          <div className={styles.frameGroup}>
            <div className={styles.uuserCheckParent}>
              <img className={styles.uuserCheckIcon} alt="" src="/uapps.svg" />
              <div className={styles.ngiXL}>Phòng ban</div>
            </div>
            <img
              className={styles.ucheckIcon}
              alt=""
              src="/ucheck.svg"
              onClick={openMore2}
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ucheckParent}>
              <img className={styles.uuserCheckIcon} alt="" src="/ucheck.svg" />
              <div className={styles.hmNay}>Hôm nay</div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.ngyMai}>Ngày mai</div>
            <div className={styles.frameChild} />
            <div className={styles.ngyTipTheo}>7 ngày tiếp theo</div>
          </div>
        </div>
      </div>
      {isMoreOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMore}
        >
          <More onClose={closeMore} />
        </PortalPopup>
      )}
      {isMore1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMore1}
        >
          <More onClose={closeMore1} />
        </PortalPopup>
      )}
      {isMore2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMore2}
        >
          <More onClose={closeMore2} />
        </PortalPopup>
      )}
    </>
  );
};

export default GroupProjectWork;
