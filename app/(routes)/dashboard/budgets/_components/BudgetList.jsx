'use client'
import React, { useEffect } from 'react'
import CreateBudget from './CreateBudget'
import { db } from '@/utils/dbConfig'
import { SQL, eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'


function BudgetList() {

  const{user}=useUser();

  useEffect(()=>{
   user&&getBudgetList();

  },[user])
    
  // used to get budget list
  const getBudgetList=async()=>{

    const result = await db.select({
      ...getTableColumns(Budgets),
      totalSpend: sql`SUM(CAST(${Expenses.amount} AS numeric))`.mapWith(Number),
      totalItem: sql`COUNT(${Expenses.id})`.mapWith(Number)
    }).from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id);
    
    console.log(result.toString());
  }    
  return (
    <div className='mt-7'>
        <div className='grid grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3'>
        <CreateBudget/>

        </div>
     
    </div>
  )
}

export default BudgetList
