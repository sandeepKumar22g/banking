import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/users.actions'
import React from 'react'

const Home = async ({searchParams: {id, page}}: SearchParamProps) => {
  const loggedInUser = await getLoggedInUser();
  const accounts = await getAccounts({userId: loggedInUser?.$id!})

  if(!accounts) return;

  const accountsData = accounts?.data
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({appwriteItemId})


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type={"greeting"} title="Welcome" user={loggedInUser?.firstName || "Guest"} subtext={"Access or manage your account and transactions efficently."} />
          <TotalBalanceBox accounts={accountsData} totalBanks={accounts?.totalBanks} totalCurrentBalance={accounts?.totalCurrentBalance}  />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedInUser!} transactions={accounts?.transactions} banks={accountsData?.slice(0, 2)} />
    </section>
  )
}

export default Home