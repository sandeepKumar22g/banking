import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/users.actions'
import React from 'react'

const Home = async () => {
  const loggedInUser = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type={"greeting"} title="Welcome" user={loggedInUser?.name || "Guest"} subtext={"Access or manage your account and transactions efficently."} />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}  />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedInUser} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 138.50}]} />
    </section>
  )
}

export default Home