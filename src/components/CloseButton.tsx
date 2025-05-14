import { RxCross2 } from 'react-icons/rx';

export default function CloseButton({
    setIsOpen,
}: {
    setIsOpen: (isOpen: boolean) => void;
}) {
    return (
        <button
            title="Close"
            className="absolute w-max h-max top-4 right-4 bg-[#fff0]"
            onClick={() => setIsOpen(false)}
        >
            <RxCross2 fill="#000" size={24} />
        </button>
    );
}
