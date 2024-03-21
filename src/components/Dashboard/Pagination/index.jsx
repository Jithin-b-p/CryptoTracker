/* eslint-disable react/prop-types */
import Pagination from "@mui/material/Pagination";

import styles from "./styles.module.css";

export default function PaginationComponent({ page, onPageChange }) {
  return (
    <div className={styles.pagination_component}>
      <Pagination
        count={10}
        page={page}
        onChange={onPageChange}
        sx={{
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-root": {
            color: "var(--white)",
            border: "1px solid var(--white)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
      />
    </div>
  );
}
