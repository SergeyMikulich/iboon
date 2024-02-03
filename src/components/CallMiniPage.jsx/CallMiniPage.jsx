import React, { useState } from 'react';
import './CallMiniPage.scss'
import Logo from '../../assets/imgs/iboon-banner.png';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input'
import { FormControl, OutlinedInput } from '@mui/material';

export default function CallMiniPage() {
    const [phone, setPhone] = useState('');
    return (
        <div className="call-container">
            <div className="logo-wrapper">
                <img src={Logo} alt="" />
            </div>
            <form noValidate autoComplete="off">
                <div className="text-content">
                    <span>Оставьте ваше имя и номер телефона</span>
                    <span>Наш менеджер свяжется с вами и подробно ответит на все ваши вопросы</span>
                </div>
                <FormControl className="form-control" sx={{ width: '40ch' }}>
                    <OutlinedInput placeholder="Введи ваше имя" />
                    <MuiTelInput defaultCountry="KZ" value={phone} onChange={(phone) => setPhone(phone)} />
                    <button type="submit" className='btn btn-primary-filled'>Заказать звонок</button>
                </FormControl>
            </form>
        </div>
    )
}
