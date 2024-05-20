import React from 'react'

function BudgetItem({budget}) {
  return (
    <div className='p-5 border rounded-lg   '>
        <div className='flex gap-2 items-cente justify-between'>
        <div className='flex gap-2 items-cente '>
            <h2 className='text-2xl p-6 bg-slate-100 rounded-full'>{budget?.icon}</h2>
            <div>
                <h2>
                    {budget.name}
                </h2>
                <h2>{budget.totalItem} Item</h2>
            </div>
        </div>
        <h2 className='font-bold text-primary text-lg'> {budget.amount} INR</h2>
        </div>
        <div className='mt-5'>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-xs text-slate-400'>INR {budget.totalSpend?budget.totalSpend:0}</h2>
                <h2 className='text-xs text-slate-400'>Total INR {budget.amount-budget.totalSpend}</h2>
            </div>
            <div className='w-full bg-slate-300 rounded-xl h-2'>
                <div className='w-[40%] bg-primary rounded-xl h-2'></div>

            </div>
        </div>
    </div>
  )
}

export default BudgetItem
