import React from 'react';

const ButtonComp = ({ str, link }) => {
    return (
        <a
            href={(process.env.REACT_APP_HOMEPAGE || '') + link}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[linear-gradient(135deg,#f59e0b_0%,#d97706_50%,#b45309_100%)] px-10 py-3 font-['Rajdhani'] text-sm font-semibold uppercase tracking-[0.1em] text-black shadow-[0_4px_15px_rgba(245,158,11,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,158,11,0.4)]"
        >
            {str}
        </a>
    )
}

export default ButtonComp;