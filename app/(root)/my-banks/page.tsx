import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/users.actions';
import React from 'react'

const MyBanks = async () => {
    const loggedInUser = await getLoggedInUser();
    const accounts = await getAccounts({userId: loggedInUser?.$id!})

    return (
        <section className='flex'>
            <div className='my-banks'>
                <HeaderBox title='My Bank Accounts' subtext='Effortlessly manage your banking activities.' />
                <div className='space-y-4'>
                    <h2 className='header-2'>Your Cards</h2>
                    <div className='flex flex-wrap gap-6'>
                        {accounts && accounts.data.map((a:Account)=>(
                            <BankCard account={a} userName={loggedInUser?.firstName} key={accounts.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyBanks