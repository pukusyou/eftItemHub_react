import React from "react";
import { useSortBy, useTable } from "react-table";
import { isMobile } from "react-device-detect"
let columns = [{ Header: "名称", accessor: "name" }, { Header: "ダメージ", accessor: "damage" }, { Header: "貫通", accessor: "penetrate" }, { Header: "アーマーダメージ", accessor: "aDamage" }, { Header: "精度", accessor: "accuracy" }, { Header: "反動", accessor: "reaction" }, { Header: "破砕", accessor: "crushing" }, { Header: "弾速(m/s)", accessor: "velocity" }, { Header: "トレーダー", accessor: "dealer" }, { Header: "備考", accessor: "remarks" }]

export default function App({ data }) {

    if (isMobile) {
        data.forEach(element => {
            delete element["velocity"]
            delete columns[7]
            delete element["accuracy"]
            delete columns[4]
            delete element["remarks"]
            delete columns[9]
            delete element["reaction"]
            delete columns[5]
            delete element["crushing"]
            delete columns[6]
            delete element["dealer"]
            delete columns[8]
        })
    }
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    },
        useSortBy
    );

    return (
        <table {...getTableProps()} className="text-white table table-dark table-striped table-hover m-0">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                <span>
                                    {column.isSorted ?
                                        (column.isSortedDesc ? "▾" : "▴") : ""
                                    }
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                )
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}