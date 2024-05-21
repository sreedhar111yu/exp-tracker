import React from 'react';

function BudgetItem({ budget }) {
  const totalSpend = budget.totalSpend || 0;
  const remainingAmount = budget.amount - totalSpend;
  const spendPercentage = (totalSpend / budget.amount) * 100;

  return (
    <div className='p-5 border rounded-lg hover:shadow-md cursor-pointer'>
      <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <h2 className='text-2xl p-6 bg-slate-100 rounded-full'>{budget?.icon}</h2>
          <div>
            <h2 className='font-bold'>{budget.name}</h2>
            <h2 className='text-sm text-gray-400'>{budget.totalItem} Item{budget.totalItem !== 1 && 's'}</h2>
          </div>
        </div>
        <h2 className='font-bold text-primary text-lg'>{budget.amount} INR</h2>
      </div>
      <div className='mt-5'>
        <div className='flex items-center justify-between mb-3'>
          <h2 className='text-xs text-slate-400'>INR {totalSpend}</h2>
          <h2 className='text-xs text-slate-400'>Total INR {remainingAmount}</h2>
        </div>
        <div className='w-full bg-slate-300 rounded-xl h-2'>
          <div
            className='bg-primary rounded-xl h-2'
            style={{ width: `${spendPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BudgetItem;
