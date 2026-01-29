import React from 'react';

const TopUpdateBar = ({ title, content, date }) => {
    return (
        <div className='relative overflow-hidden bg-bg-card border border-border rounded-md p-6 mb-4 transition-all duration-[250ms] hover:border-border-hover hover:translate-x-1'>
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[linear-gradient(135deg,#f59e0b_0%,#d97706_50%,#b45309_100%)]" />
            <div className="font-heading text-[0.85rem] text-accent-primary font-semibold tracking-[0.1em]">{date}</div>
            <div className="font-heading text-[1.1rem] text-text-primary font-semibold my-1">{title}</div>
            <div className="text-[0.9rem] text-text-secondary">{content}</div>
        </div>
    )
}

export default TopUpdateBar;