import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { Button } from 'primereact/button'
import React, { useEffect, useState } from 'react'
import { DetailOrderType } from '../../../types/detailorder'
import { update } from '../../../api/order';
import { remove } from '../../../api/bookedDate';
import { getOnefac, listfac } from '../../../api/facilities';

type Props = {}

const DtailOrderHistory = (props: Props) => {
    const [user, setUser] = useState({})
    const [orders, setorder] = useState<DetailOrderType>()
    const [facilities, setfacilities] = useState<any>()
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem('user') as string)
        console.log(getUser)
        setUser(getUser)
        const get = async () => {
            const { data } = await axios.get(`http://localhost:4000/api/order/${id}`)
            setorder(data)
            console.log(orders?.room[0]._id)
        }

        get()

    }, [id])
    useEffect(() => {
        const abc = async () => {
            await getOnefac(orders?.room[0]._id).then((res: any) => {
                setfacilities(res)
            })
            console.log(facilities)
        }
        abc()
    }, [orders?.room[0]._id])
    const statuss = (value: number) => {
        if (value == 0) {
            return <span className='float-right rounded-full py-[5px] px-[15px] bg-sky-500 text-center text-white font-medium'>Chờ Xác Nhận</span>
        } else if (value == 1) {
            return <span className='float-right bg-orange-600 rounded-full py-[5px] px-[10px] bg-sky-500 text-center text-white font-medium'>Đã Xác Nhận</span>
        } else if (value == 2) {
            return <span className='float-right bg-green-600 rounded-full py-[5px] px-[10px] bg-sky-500 text-center text-white font-medium'>Đang Ở</span>
        } else if (value == 3) {
            return <span className='float-right bg-orange-600 rounded-full py-[5px] px-[10px] bg-sky-500 text-center text-white font-medium'>Đã Trả Phòng</span>
        }
        else {
            return <span className='ml-[15px] bg-red-600 rounded-full py-[5px] px-[10px] bg-sky-500 text-center text-white font-medium'>Hủy Phòng</span>
        }
    }
    const onsubmit = () => {
        const newdata: any = {
            statusorder: 4,
            _id: id,
            name: orders?.order.name,
            email: orders?.order.email,
            phone: orders?.order.phone,
            total: orders?.order.total,
            checkins: orders?.order.ckeckins,
            checkouts: orders?.order.ckeckins,
            room: orders?.room[0]._id,
            user: orders?.order.user
        }
        console.log(newdata)
        update(newdata).then((res: any) => {
            console.log(res?.status)
            console.log(res?.statusorder)
            if (res?.statusorder == 4 || res?.statusorder == 3) {
                remove(res?.status).then(() => {
                    router.push('/profile/order')
                })
            } else {
                router.push('/profile/order')
            }

        })
    }
    console.log(orders?.room[0].image)
    return (
        <div>
            <div className="account_body container mx-auto justify-center my-[40px] flex flex-row px-[96px] ">
                <div className="account_sidebar flex flex-col w-[370px] h-fit border  border-gray-20 rounded-3xl p-[24px] pb-[70px] mr-[32px]">
                    <div className="account_info px-[16px] py-[24px]">
                        <div className='contents'><img width={50} className="rounded-full mx-auto h-[100px] w-[100px] object-cover border-current" src={user?.avatar || "https://go2joy.vn/images/icons/user-placeholder.svg"} alt="" /></div>
                        <div className='text-center font-medium text-2xl'>{user?.phone}</div>
                    </div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='/profile' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                        <span className='pl-[10px] font-normal text-lg'>Hồ sơ của tôi</span></a></div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='/profile/order' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg><span className='pl-[10px] font-normal text-lg'>Đặt phòng của tôi</span></a></div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg><span className='pl-[10px] font-normal text-lg'>Danh sách yêu thích</span></a></div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg><span className='pl-[10px] font-normal text-lg'>Tem của tôi</span></a></div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg><span className='pl-[10px] font-normal text-lg'>Coupon của tôi </span></a></div>
                    <hr className='my-[16px]' />
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                        <span className='pl-[10px] font-normal text-lg'>Đăng Xuất</span></a></div>

                </div>
                <div className="profile_account relative w-[768px]">
                    <div className="flex flex-row justify-between mb-[32px]">
                        <h2 className='text-[40px] font-bold'>Phòng Đặt của tôi</h2>
                    </div>

                    <div>
                        <div className='flex'>
                            <div className='mr-[50px] w-[600px]'>
                                <h1 className='text-[20px] font-medium mb-[20px]'> {orders?.room[0].name}</h1>
                                {/* {product?.image?.map((item: any, index: any) => (
                                    <div key={index} className={`${index == 0 ? "hidden" : ""} hover:opacity-70 duration-150 border`}>
                                        <img
                                            src={`${item}`}
                                            srcSet={`${item}`}
                                            alt={item}
                                            loading="lazy"
                                        />
                                    </div>
                                ))} */}
                                <div className='grid grid-cols-2 gap-2'>
                                    {orders?.room[0].image?.map((item: any) => (
                                        <img width={250} src={item} alt="" />
                                    ))}
                                </div>
                                {/* <p className='pt-[20px] pb-[10px] text-[17px] font-medium'>Giá: {order?.room[0].price} VND</p> */}
                                <p className='text-[17px] pt-[10px] font-medium'>Chi tiết phòng: {orders?.room[0].description}</p>
                                <p className='text-[20px] font-medium mb-[20px] mt-[20px]'>Tiền ích : </p>
                                <div className='flex'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        {facilities?.map((item: any) => (
                                            <div className='flex'>
                                                <img width={20} src={`${item?.image}`} alt="" />
                                                <p className='ml-[5px]'>{item.name}</p>
                                            </div>

                                        ))}
                                    </div>
                                </div>

                            </div>
                            <div className='py-[30px] w-[500px] h-[100%] px-[40px] border-solid border-2 border-indigo-600 rounded-xl'>
                                <h1 className='text-center text-[20px] font-bold mb-[25px]'>Thông tin </h1>
                                <p className='text-[17px] font-medium'>Check In <span className='float-right'>{orders?.order.checkins?.slice(0, 10)}</span></p>
                                <p className='py-[10px] text-[17px] font-medium'>Check out <span className='float-right'>{orders?.order.checkouts?.slice(0, 10)}</span></p>
                                <p className='font-medium text-[20px] text-orange-600'>Tổng tiền <span className='float-right'> {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(orders?.order.total)}</span> </p>
                                <p className='py-[30px] text-[17px] font-medium'>Trạng thái {statuss(orders?.order.statusorder)}</p>
                                <div className='flex mt-[30px]'>
                                    <div >
                                        <Button
                                            label="Đặt lại"
                                            className="p-button-outlined p-button-info"
                                            onClick={() => { router.push(`/booking_detail/${orders?.room[0].slug}`) }}
                                        />
                                    </div>
                                    <div className='mx-[20px]'>
                                        {orders?.order.statusorder < 2 ? <Button
                                            label="Hủy Phòng"
                                            className="p-button-outlined p-button-danger"
                                            onClick={() => { onsubmit() }}
                                        /> : ''}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DtailOrderHistory