import React from 'react';
import Footer from './Footer';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <div className='min-vh-100'>
                <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                    <BackButton link={"/"} />
                </div>
                <div className='text-center text-white p-5'>
                    <h1 className='display-1'>404</h1>
                    <h2 className='mb-4'>ページが見つかりません</h2>
                    <p className='lead mb-4'>お探しのページは存在しないか、移動または削除された可能性があります。</p>
                    <button className='btn btn-primary btn-lg' onClick={handleGoHome}>
                        トップページに戻る
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
