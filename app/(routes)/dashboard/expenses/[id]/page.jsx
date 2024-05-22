'use client'
import { db } from '@/utils/dbConfig'
import { Budgets, Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq, getTableColumns, sql } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

function ExpensesScreen({ params }) {
  const { user } = useUser();
  const [budgetInfo, setBudgetInfo] = useState(null);

  useEffect(() => {
    if (user) {
      getBudgetInfo();
    }
  }, [user]);

  const getBudgetInfo = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`SUM(CAST(${Expenses.amount} AS numeric))`.as('totalSpend'),
        totalItem: sql`COUNT(${Expenses.id})`.as('totalItem'),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user.primaryEmailAddress?.emailAddress))
      .where(eq(Budgets.id, params.id))
      .groupBy(Budgets.id);

    // Process result to map the totalSpend and totalItem to Number
    const processedResult = result.map(row => ({
      ...row,
      totalSpend: Number(row.totalSpend),
      totalItem: Number(row.totalItem),
    }));

    setBudgetInfo(processedResult);
    console.log(result);
  };

  return (
    <div className='p-10'>

    </div>
  );
}

export default ExpensesScreen;
