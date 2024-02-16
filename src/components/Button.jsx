import React from 'react'

const Button = (props) => {
    return (
        <>
            <button className={`${props.name} text-black text-[18px] font-bold ff-recharge p-[14px_32px] duration-[0.5s] hover:scale-[1.03] bg-[#02CDCF] rounded-[12px]`}>{props.btn}</button>
        </>
    )
}

export default Button