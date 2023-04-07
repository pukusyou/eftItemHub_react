//上記のコードにReact Hook Formを使用して、入力必須お問い合わせフォームを作成する
// Compare this snippet from src\components\ContactForm.jsx:
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { init, sendForm } from '@emailjs/browser';
import { useForm } from "react-hook-form";
const options = [
    { value: 'ご意見・ご感想', label: 'ご意見・ご感想' },
    { value: 'バグ・エラー', label: 'バグ・エラー' },
    { value: '情報の誤り', label: '情報の誤り' },
    { value: 'その他', label: 'その他' },
];
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
init(PUBLIC_KEY)


const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedValue, setSelectedValue] = useState(options[0]);
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const handleChange = (selectedOption) => {
        setSelectedValue(selectedOption);
    };
    //email-jsを使用して、お問い合わせフォームの内容をメールで送信するmessage
    const sendEmail = (data) => {
        setIsSending(true);
        sendForm(SERVICE_ID, TEMPLATE_ID, "#form")

            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                setIsError(false);
                setIsSending(false);
            }, (error) => {
                console.log(error.text);
                setIsError(true);
                setIsSent(false);
                setIsSending(false);
            });
    };


    return (
        <>
            <div className='min-vh-100'>
                <h1 className='text-white'>お問い合わせ</h1>
                <Form className='text-white' id='form' onSubmit={handleSubmit(sendEmail)}>
                    <Form.Group className="mb-3" controlId="formBasicType">
                        <Form.Label className='fs-5'>種別</Form.Label>
                        <Select
                            defaultValue={selectedValue}
                            className='w-100 pb-1 text-dark'
                            options={options}
                            onChange={handleChange}
                            name='type'
                            isSearchable={false}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-5'>メールアドレス</Form.Label>
                        <Form.Control type="email" placeholder="メールアドレスを入力してください" {...register("email", { required: true })} />
                        {errors.email && <span className='text-danger'>メールアドレスを入力してください</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label className='fs-5'>お問い合わせ内容</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="お問い合わせ内容を入力してください" {...register("message", { required: true })} />
                        {errors.message && <span className='text-danger'>お問い合わせ内容を入力してください</span>}
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isSending}>
                        {isSending ? '送信中...' : <><FontAwesomeIcon icon={faPaperPlane} /> 送信</>}
                    </Button>
                </Form>
                {isSent && <p className='text-success'>送信が完了しました。お問い合わせありがとうございます。</p>}
                {isError && <p className='text-danger'>送信に失敗しました。入力ミスがないかご確認ください</p>}
            </div>
        </>
    );
};
export default Contact;
