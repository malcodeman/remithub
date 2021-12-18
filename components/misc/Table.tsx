import React from "react";
import { useTable } from "react-table";
import {
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { map } from "ramda";

type props = {
  size?: "sm" | "md" | "lg";
  columns: any;
  data: any;
};

const Table = (props: props) => {
  const { size = "sm", columns, data } = props;
  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } =
    useTable({
      columns,
      data,
    });
  return (
    <ChakraTable size={size} {...getTableProps()}>
      <Thead>
        {map(
          (group) => (
            <Tr
              {...group.getHeaderGroupProps()}
              key={group.getHeaderGroupProps().key}
            >
              {map(
                (column) => (
                  <Th
                    {...column.getHeaderProps()}
                    key={column.getHeaderProps().key}
                  >
                    {column.render("Header")}
                  </Th>
                ),
                group.headers
              )}
            </Tr>
          ),
          headerGroups
        )}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()} key={row.getRowProps().key}>
              {map((cell) => {
                return (
                  <Td {...cell.getCellProps()} key={cell.getCellProps().key}>
                    {cell.render("Cell")}
                  </Td>
                );
              }, row.cells)}
            </Tr>
          );
        }, rows)}
      </Tbody>
    </ChakraTable>
  );
};

export default Table;
