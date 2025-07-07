import React, { FC } from "react";
import styles from "./label-stock.module.css";

interface LabelStockProps {
  stock?: number;
}

const LabelStock: FC<LabelStockProps> = ({ stock }) => {
  return <span className={styles.spanRoot}>{stock} Disponibles</span>;
};

export default LabelStock;
