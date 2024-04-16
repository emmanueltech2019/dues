import './tables.css'

export default function page() {
  return (
    <div className="p-[30px] text-[#bbc4cc]">
      <div className="page-header mb-[30px]">
        <h1 className="text-2xl mb-[5px]">Payments</h1>
        <div className="breadcrums flex">
          <span>Dashboard</span>
          <div className="ml-2">
            <span className="mr-2">/</span>
            <span className="text-[#6c757d]">Payments</span>
          </div>
        </div>
      </div>

      <div className="page-content">
        <label htmlFor="" className='flex justify-center md:justify-start'>
          show&nbsp;
          <select name="entries" id="entries" className="py-1 px-2 bg-[rgb(22,25,28)]">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          &nbsp;entries
        </label>

        <div className="overflow-auto">
          <div className="table w-full whitespace-nowrap">
            <table>
              <thead>
                <tr>
                  <th className='text-[#bbc4cc]'>Invoice ID</th>
                  <th className='text-[#bbc4cc]'>Client</th>
                  <th className='text-[#bbc4cc]'>Payment Type</th>
                  <th className='text-[#bbc4cc]'>Paid Date</th>
                  <th className='text-[#bbc4cc]'>Paid Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className='table-content'>
                  <td className='text-[#777777]'>#INV-0003</td>
                  <td className='text-[#777777]'>Global Technologies</td>
                  <td className='text-white'>Paypal</td>
                  <td className='text-white'>8 Feb 2019</td>
                  <td className='text-white'>$500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='flex flex-col items-center md:justify-between md:flex-row mt-4'>
          <div className="title">showing 1 to 3 of 3 entries</div>
          <div className='flex gap-[1px]'>
            <button className='px-3 py-2 bg-[#16191c] rounded-l-md'>Previous</button>
            <span className='px-3 py-2 bg-[#16191c]'>1</span>
            <button className='px-3 py-2 bg-[#16191c] rounded-r-md'>Next</button>
          </div>
        </div>
      </div>
    </div>  
  )
}
