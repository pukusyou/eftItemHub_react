import Button from 'react-bootstrap/Button';
import React from 'react';

const ButtonComp = ({ str, link }) => {
    return (
        <>
            <Button variant="outline-primary" className='text-white bottom-0 end-0 mt-2 me-2 w-25 m-2 bg-primary' href={process.env.REACT_APP_HOMEPAGE + link}>{str}</Button>
        </>
    )
}
export default ButtonComp