import Modal from 'react-modal';
import type { LogoutModalProps } from '../../types/props';

export default function LogoutModal({
    isOpen,
    setIsOpen,
    handleSubmit,
}: LogoutModalProps) {
    return (
        <Modal isOpen={isOpen} contentLabel="Delete ToDo">
            <div>
                <h1>Are you sure you want to logout?</h1>

                <button
                    className="bg-red-600 text-white"
                    onClick={handleSubmit}
                >
                    Logout
                </button>
            </div>
            <button onClick={() => setIsOpen(false)}>
                Cancel
                {/* svg cross */}
            </button>
        </Modal>
    );
}
