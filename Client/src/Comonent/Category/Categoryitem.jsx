import React from 'react'
import './c.css'
import { LuListFilter } from 'react-icons/lu'
import { FaChevronDown } from 'react-icons/fa'
const Categoryitem = () => {
    return (
        <>
            <div className="block">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-wrap mx-[-15]">

                        <div className="w-[295px] py-[20px] px-[24px] border border-[rgba(0,0,0,0.1)] rounded-[20px] mt-[24px]">
                            <div className="block">
                                <div className="flex justify-between align-middle items-center">
                                    <h2 className="text-[20px] font-semibold font-['Satoshi']">Filters</h2>
                                    <LuListFilter />
                                </div>
                                <div className="items">
                                    <div className="flex justify-between align-middle items-center">
                                        <p>TShirt</p>
                                        <FaChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right">

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Categoryitem