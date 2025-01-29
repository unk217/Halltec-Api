import {
    useReactTable,
     getCoreRowModel,
      flexRender,
      getPaginationRowModel,
      getSortedRowModel,
      getFilteredRowModel,
    } from '@tanstack/react-table';
import React, { useMemo, useState } from 'react'
import {useNavigate} from "react-router-dom";
import {  Button } from "./UI";

//import Navigation from './Navigation';


function Dynatable({columns, data}) {



    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const navigate = useNavigate();

   const table = useReactTable({data, columns,
     getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state:{
    sorting,
    globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    });
 /*
    const handleRowClick = (row)=> {
     const itemid = row.original.id;
     navigate(`/inv-update/${itemid}`);

   }*/
    return (
    
        <><div className='flex justify-center py-1'>
            <input type="text" value={filtering} onChange={e => setFiltering(e.target.value)} placeholder="Search..."
             className="bg-neutral-900 p-2 rounded-lg  mb-1 hover:bg-zinc-700 text-xl text-white" />
            
        </div><div className='flex justify-center'>


                <table className='shadow-2x1 font-sans table-auto w-[80%]'>
                    <thead className='text-white'>
                        {table.getHeaderGroups().map(getHeaderGroup => (
                            <tr key={getHeaderGroup.id}>
                                {getHeaderGroup.headers.map((header) => (
                                    <th key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className='py-3 bg-cyan-900 '>
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef.header, header.getContext()
                                                )}
                                                {{ asc: '⬆️', desc: '⬇️' }[header.column.getIsSorted() ?? null]}
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        )
                        )}
                    </thead>
                    <tbody className='text-emerald-100 text-center'>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className='bg-slate-700 hover:bg-sky-950 hover:cursor-pointer '>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='py-3 px-3' onClick={()=>handleRowClick(row)}>

                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
               
            </div>
            <div className='flex justify-center gap-1'>
                    <Button onClick={() => table.setPageIndex(0)}>
                        first page
                    </Button>
                    < Button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
                        Previous page
                    </ Button>
                    < Button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
                        next page
                    </Button>
                    <Button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                        last page
                    </Button>
                </div>
            </>
  )
}

export default Dynatable
