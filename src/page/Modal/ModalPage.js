import Anchor from "components/popover/Anchor";
import Popover1 from "components/popover/Popover1";
import Popover2 from "components/popover/Popover2";
import BasicModal from "components/portalModal/basicmodal/BasicModal";
import { useState } from "react";

const ModalPage = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  return (
    <div>
      <div>
        <button popovertarget="my-popover1" class="trigger-btn">
          팝오버1 열기 - dim 없음. dim 클릭 안됨
        </button>
        <button popovertarget="my-popover"> 팝오버2 열기 - dim 클릭 됨 </button>
        {/* dim 없음. dim 클릭 안됨 */}
        <Popover1>팝오버1</Popover1>
        <Popover2>팝오버2</Popover2>
        <hr />
        popover=auto 팝오버: 팝오버가 열리면 다른 팝오버를 강제 종료합니다.
        가볍게 닫을 수 있습니다. popover=manual 팝오버: 다른 요소 유형을 강제로
        닫지 마세요. 빛을 닫지 않습니다. 전환 또는 닫기 작업을 사용하여 광고
        소재를 닫습니다.
        <hr />
        {/* https://frontendmasters.com/blog/drawing-a-line-to-connect-elements-with-css-anchor-positioning/ */}
        <hr />
        <Anchor/>
        <button
          onClick={() => setModal1(true)}
          className="border border-red-100"
        >
          테스트 모달1
        </button>
      </div>
      <div>
        {/* 기본 모달 사용법 */}
        {modal1 && <BasicModal setOnModal={() => setModal1()} isDim />}
      </div>
    </div>
  );
};

export default ModalPage;
