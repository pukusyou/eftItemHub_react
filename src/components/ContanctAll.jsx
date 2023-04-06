//react-bootstrapやreact-selectを使用して、送信ボタン付きのお問い合わせフォームを作成する
// Compare this snippet from src\components\ContactForm.jsx:
import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import BackButton from './BackButton';


const ContactForm = () => {
    return (
        <>
            <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                <BackButton link={"/"} />
            </div>
            <div className='min-vh-100'>
                <Contact />
            </div>
            <Footer />
        </>
    )
}
export default ContactForm;
