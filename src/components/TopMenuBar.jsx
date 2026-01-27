import React from 'react';

const TopMenuBar = () => {

    return (
        <div className="border-b border-[var(--color-border)] bg-[rgba(10,10,15,0.95)]">
            <div className="mx-auto flex max-w-6xl justify-center px-4 py-4">
                <nav className="flex flex-wrap items-center justify-center gap-4 text-xl font-semibold text-[var(--color-text-secondary)]">
                    <a href="/privacy/" className="nav-link">Task</a>
                    <a href="/contact/" className="nav-link">Hideout</a>
                    <a href="/privacy/" className="nav-link">Ammo</a>
                </nav>
            </div>
        </div>
    )
}
export default TopMenuBar