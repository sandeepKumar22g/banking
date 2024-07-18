import { logoutAccount } from '@/lib/actions/users.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = "desktop" }: FooterProps) => {
    const router = useRouter()
    const handleLogout = async () =>{
       const logout = await logoutAccount()
       if(logout) router.push("/sign-in")
    }
    return (
        <footer className='footer'>
            <div className={type === "mobile" ? "footer_name-mobile"  : 'footer_name'}>
                <p className='text-xl text-gray-700 font-bold'>{user?.firstName[0]}</p>
            </div>
            <div className={type === "mobile" ? "footer_email-mobile"  : 'footer_email'}>
                <h1 className='text-14 truncate font-semibold text-gray-700'>{user?.firstName}</h1>
                <p className='text-14 truncate font-normal text-gray-600'>{user?.email}</p>
            </div>
            <div className='footer_image' onClick={handleLogout}>
                <Image src="/icons/logout.svg" alt='logout' fill />
            </div>
        </footer>
    )
}

export default Footer