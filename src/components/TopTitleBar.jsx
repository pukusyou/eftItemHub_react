import React from 'react';

const TopTitleBar = ({ title }) => {
    return (
        <div className="relative flex items-center justify-center w-full py-2 px-8 my-8 mx-auto bg-gradient-to-r from-transparent via-bg-tertiary to-transparent border-x-[3px] border-accent-primary">
            <div className="flex items-center gap-4">
                {/* Left decorative line */}
                <span className="block w-[60px] h-[2px] bg-gradient-to-r from-transparent to-accent-primary" />

                {/* Diamond icon */}
                <span className="block w-2 h-2 bg-accent-primary rotate-45" />

                {/* Title */}
                <h2 className="font-heading text-[clamp(1.2rem,3vw,1.5rem)] font-bold tracking-[0.1em] uppercase text-text-primary m-0 px-4 py-2 bg-gradient-to-r from-transparent via-[#1a1a25cc] to-transparent whitespace-nowrap">
                    {title}
                </h2>

                {/* Diamond icon */}
                <span className="block w-2 h-2 bg-accent-primary rotate-45" />

                {/* Right decorative line */}
                <span className="block w-[60px] h-[2px] bg-gradient-to-r from-accent-primary to-transparent" />
            </div>
        </div>
    )
}

export default TopTitleBar;