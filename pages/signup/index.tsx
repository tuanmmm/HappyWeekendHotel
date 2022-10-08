import React from 'react'

type Props = {}

const Signin = (props: Props) => {
    return (
        <div>
            <div className='container px-[90px] bg flex justify-between'>
                <div className='maskgroup relative  mt-[50px] w-[620px] h-[668px] shadow-2xl shadow-[#ffd79a] bg-[#fed496] overflow-hidden rounded-[30px] '>
                    <div className="a bg-[#efce90] h-[70%] rounded-bl-[108px]"><h2 className='pt-[300px] font-bold text-[50px] leading-[53px] pl-[15px] text-white'>Happy <p className='pl-[20px]'>Weekend</p></h2></div>
                    <div className="b absolute top-[-50px] right-[-60px] w-[196px] h-[187px] bg-[#fbf1cf] overflow-hidden rounded-tl-[200px] rounded-bl-[200px]">a</div>
                    <div className="c absolute bottom-[-50px] left-[-20px] w-[196px] h-[187px] rounded-tr-[108px] rounded-br-[20px]  bg-[#fbf1cf]  ">b</div>
                </div>
                <div className='form mx-[auto]  w-[50%]'>
                    <h3 className='text-[30px] text-black my-[40px]'>Sign In</h3>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div className='pt-[30px]'>
                                <label htmlFor="password" className='mt-[30px]' >Name</label>
                                <input id="text" name="password" type="password" autoComplete="current-password" required className="relative  block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                            </div>
                            <div className='pt-[30px]'>
                                <label htmlFor="password" className='mt-[30px]' >Email</label>
                                <input id="text" name="password" type="password" autoComplete="current-password" required className="relative  block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                            </div>
                            <div className='pt-[30px]'>
                                <label htmlFor="password" className='mt-[30px]' >Password</label>
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="relative  block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-orange-500 text-[#FFA500] focus:bg-[#FFA500]" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#FFA500]">Remember me</label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-[#BDBDBD] hover:text-indigo-500">No account?  <span className='text-[#28CDBA]'>Sign Up</span></a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#FFA500] py-2 px-4 text-sm font-medium text-white hover:bg-[#fed496] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    {/* Heroicon name: mini/lock-closed */}
                                    <svg className="h-5 w-5  text-white group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signin