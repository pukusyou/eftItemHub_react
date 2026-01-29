import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ link }) => {
    const navigation = useNavigate();

    const handleBackClick = () => {
        navigation(link);
    };

    return (
        <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-transparent px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-secondary transition-all duration-200 hover:border-white/20 hover:bg-white/5 hover:text-slate-100"
        >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </button>
    )
}

export default BackButton;