import React, { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ElrondAddressLinkPropsType {
  explorerAddress: string;
  address: string;
  precision?: number;
}

export const ElrondAddressLink: FC<ElrondAddressLinkPropsType> = ({ explorerAddress, address, precision = 6 }) => {
  return (
    <a
      className="text-decoration-none flex flex-row items-center !text-blue-500 hover:!text-blue-500/80"
      href={`${explorerAddress}/accounts/${address}`}
      target="_blank">
      {precision > 0 ? address.slice(0, precision) + " ... " + address.slice(-precision) : address}
      <FaExternalLinkAlt className="ml-2" />
    </a>
  );
};
