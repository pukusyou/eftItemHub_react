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
        <div style={{
            background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
            marginBottom: '2rem'
        }}>
            <div style={{ overflowX: 'auto' }}>
                <table
                    {...getTableProps()}
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        color: '#f8fafc'
                    }}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        style={{
                                            padding: isMobile ? '0.75rem 0.5rem' : '1rem 1.25rem',
                                            textAlign: 'left',
                                            fontFamily: "'Rajdhani', sans-serif",
                                            fontWeight: 700,
                                            fontSize: isMobile ? '0.75rem' : '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            color: 'var(--color-accent-primary, #f59e0b)',
                                            background: 'rgba(0, 0, 0, 0.3)',
                                            borderBottom: '2px solid var(--color-accent-primary, #f59e0b)',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s ease',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {column.render("Header")}
                                        <span style={{ marginLeft: '0.5rem' }}>
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
                            const isHovered = hoveredRow === i;

                            return (
                                <tr
                                    {...row.getRowProps()}
                                    onMouseEnter={() => setHoveredRow(i)}
                                    onMouseLeave={() => setHoveredRow(null)}
                                    style={{
                                        background: isHovered
                                            ? 'rgba(245, 158, 11, 0.05)'
                                            : i % 2 === 0
                                                ? 'rgba(0, 0, 0, 0.1)'
                                                : 'transparent',
                                        transition: 'background 0.2s ease'
                                    }}
                                >
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: isMobile ? '0.5rem' : '0.75rem 1.25rem',
                                                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                                                    color: 'var(--color-text-secondary, #94a3b8)',
                                                    verticalAlign: 'middle'
                                                }}
                                            >
                                                {cell.column.id === 'iconLink'
                                                    ? <img
                                                        src={cell.value}
                                                        alt="icon"
                                                        style={{
                                                            maxWidth: isMobile ? '32px' : '48px',
                                                            height: 'auto',
                                                            borderRadius: '4px'
                                                        }}
                                                    />
                                                    : cell.column.id === 'name'
                                                        ? <span style={{
                                                            fontWeight: 600,
                                                            color: '#f8fafc',
                                                            fontSize: isMobile ? '0.75rem' : '0.9rem'
                                                        }}>{cell.render("Cell")}</span>
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