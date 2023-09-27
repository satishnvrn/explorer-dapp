import React, { useState } from "react";
import { useGetLoginInfo } from "@multiversx/sdk-dapp/hooks";
import { ModalBody, ModalHeader } from "react-bootstrap";
import { FaCalendarCheck, FaChartBar, FaChessKnight, FaFlagCheckered, FaHandshake, FaMoneyBillAlt, FaShopify, FaShoppingCart, FaTrophy } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Loader } from "components";
import { IFrameModal } from "./iFrameModal";
import { TwModal } from "./Modal/TwModal";

const customStyles = {
  overlay: {
    backgroundColor: "var(--light-20) !important",
    backdropFilter: "blur(10px)",
  },
  // dark: {
  //   backgroundColor: "var(--background)",
  // },
  // content: {
  //   width: "80%",
  //   top: "50%",
  //   left: "50%",
  //   right: "auto",
  //   bottom: "auto",
  //   marginRight: "-50%",
  //   transform: "translate(-50%, -50%)",
  //   maxHeight: "80vh",
  //   backgroundColor: "var(--light)",
  //   color: "var(--dark)",
  // },
};

export const Locki3DModal = ({
  isModalOpened,
  closeModal,
  owned,
  isFetchingDataMarshal,
  data,
}: {
  isModalOpened: boolean;
  closeModal: () => void;
  owned: boolean;
  isFetchingDataMarshal: boolean;
  data: any;
}) => {
  const { loginMethod } = useGetLoginInfo();
  const [content, setContent] = useState<React.ReactElement>(<></>);
  // const [title, setTitle] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleIFrameModal = (link: string) => {
    setContent(<IFrameModal link={link} />);
    setIsModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setContent(<></>);
  // };

  return (
    <Modal
      isOpen={isModalOpened}
      onRequestClose={closeModal}
      className="absolute overflow-y-scroll scrollbar !w-[80%] !top-[50%] !left-[50%] !right-auto !bottom-auto !-mr-[50%] !-translate-x-[50%] !-translate-y-[50%] !max-h-[79vh] !bg-background !shadow-md  !shadow-foreground rounded-2xl"
      style={customStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}>
      <div className="sticky-top flex flex-row justify-between backdrop-blur bg-background/60">
        <ModalHeader className="border-0">
          <h2 className="text-center p-3 text-card-foreground">Locki 3D </h2>
        </ModalHeader>
        <div className="flex items-center h-[6rem]">
          <div className="flex justify-center cursor-pointer text-[2rem] text-card-foreground" onClick={closeModal}>
            <IoClose />
          </div>
        </div>
      </div>
      <ModalBody>
        {!owned ? (
          <div className="flex flex-col items-center justify-center">
            <h4 className="mt-3 font-title">You do not own this Data NFT</h4>
            <h4 className="mt-3 font-title">You do not own this Data NFT</h4>
            <h6>(Buy the Data NFT from the marketplace to unlock the data)</h6>
          </div>
        ) : isFetchingDataMarshal || !data ? (
          <div
            className="flex flex-col items-center justify-center"
            style={{
              minWidth: "24rem",
              maxWidth: "100%",
              minHeight: "40rem",
              maxHeight: "80vh",
            }}>
            <div>
              <Loader noText />
              <p className="text-center font-weight-bold">
                {["ledger", "walletconnectv2", "extra"].includes(loginMethod) ? "Please sign the message using xPortal or Ledger" : "Loading..."}
              </p>
            </div>
          </div>
        ) : (
          <div className="trailblazer-view text-black">
             {/* <VerticalTimeline>
               data?.map((_dataItem: any, _index: any) => {
                return (
                  <VerticalTimelineElement key={_index} icon={getIconForCategory(_dataItem)}>
                    {getTileForCategory(_dataItem)}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline> */}
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};