import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toastr extends React.Component {
    successToastr = () => {
        toast('🦄 Wow so easy!');
        console.log('123')
    }
}
export default Toastr;