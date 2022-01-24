import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastr = () => {
    const successToastr = () => {
        toast('🦄 Wow so easy!');
        console.log('123')
    }

    return (
        <div>
            <ToastContainer />
            <a className="next" onClick={successToastr}> Click to Show Notification </a>
        </div>
    );
}
export default Toastr;