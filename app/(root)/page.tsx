import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedInUser = {
    firstName: "Sandeep",
    lastName: "Kumar",
    email: "contact@email.com"
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type={"greeting"} title="Welcome" user={loggedInUser.firstName || "Guest"} subtext={"Access or manage your account and transactions efficently."} />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}  />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedInUser} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 138.50}]} />
    </section>
  )
}

export default Home