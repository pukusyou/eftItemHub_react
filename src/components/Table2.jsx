import React, { useState } from "react";
import { useSortBy, useTable } from "react-table";
import { isMobile } from "react-device-detect";

let columns = [
    { Header: "画像", accessor: "iconLink" },
    { Header: "名称", accessor: "name" },
    { Header: "ダメージ", accessor: "damage" },
    { Header: "貫通", accessor: "penetrate" },
    { Header: "アーマーダメージ", accessor: "aDamage" },
    { Header: "精度", accessor: "accuracy" },
    { Header: "反動", accessor: "reaction" },
    { Header: "破砕", accessor: "crushing" },
    { Header: "弾速(m/s)", accessor: "velocity" }
];

export default function App({ data }) {
    const [hoveredRow, setHoveredRow] = useState(null);

    if (isMobile) {
        data.forEach(element => {
            delete element["velocity"];
            delete columns[7];
            delete element["accuracy"];
            delete columns[4];
            delete element["remarks"];
            delete columns[9];
            delete element["reaction"];
            delete columns[5];
            delete element["crushing"];
            delete columns[6];
            delete element["dealer"];
            delete columns[8];
        });
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
    }, useSortBy);

    return (
        <div className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] shadow-md">
            <div className="overflow-x-auto">
                <table
                    {...getTableProps()}
                    className="w-full border-collapse text-left text-sm text-slate-100"
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className={`cursor-pointer whitespace-nowrap border-b-2 border-accent-primary bg-black/30 px-4 py-4 font-heading text-xs font-bold uppercase tracking-wider text-accent-primary transition-colors hover:bg-black/40 sm:text-sm ${column.id === 'name' ? 'min-w-[200px] text-left' : 'min-w-[80px] text-center'
                                            }`}
                                    >
                                        {column.render("Header")}
                                        <span className="ml-2 inline-block w-4">
                                            {column.isSorted
                                                ? (column.isSortedDesc ? "▾" : "▴")
                                                : ""
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
                                <tr
                                    {...row.getRowProps()}
                                    className={`border-b border-white/5 transition-colors duration-200 hover:bg-accent-primary/5 ${i % 2 === 0 ? 'bg-black/10' : 'bg-transparent'
                                        }`}
                                >
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                className={`px-4 py-3 align-middle text-sm text-slate-400 ${cell.column.id === 'name' || cell.column.id === 'iconLink' ? 'text-left' : 'text-center'
                                                    }`}
                                            >
                                                {cell.column.id === 'iconLink'
                                                    ? <img
                                                        src={cell.value}
                                                        alt="icon"
                                                        className="h-auto w-8 rounded md:w-12"
                                                        loading="lazy"
                                                    />
                                                    : cell.column.id === 'name'
                                                        ? <span className="font-semibold text-slate-100">{cell.render("Cell")}</span>
                                                        : cell.render("Cell")
                                                }
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}