import toast from 'react-hot-toast';
import classNames from 'classnames';

const alertClasses = classNames(
  'mb-2 flex items-center gap-3 px-8 font-gordita-bold py-3 rounded text-xs uppercase text-[#fff]'
);

export const successAlert = (message: string) => {
  toast.custom((toast) => (
    <div
      className={`${alertClasses} bg-brandGreen-300  ${
        toast.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <span>{message}</span>
    </div>
  ));
};

export const dangerAlert = (message: string) => {
  toast.custom((toast) => (
    <div
      className={`${alertClasses} bg-[#c92a2a] ${
        toast.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <span>{message}</span>
    </div>
  ));
};
