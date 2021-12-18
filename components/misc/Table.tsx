import React from "react";
import { useTable, useSortBy } from "react-table";
import {
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
} from "@chakra-ui/react";
import { map } from "ramda";
import { ChevronDown, ChevronUp } from "react-feather";

type props = {
  size?: "sm" | "md" | "lg";
  columns: any;
  data: any;
};

const Table = (props: props) => {
  const { size = "sm", columns, data } = props;
  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

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
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <Flex alignItems="center">
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronUp size={16} />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </Flex>
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
