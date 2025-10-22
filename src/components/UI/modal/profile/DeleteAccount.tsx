import React from 'react';
import { Modal, Input, Form } from 'antd';
import { FiAlertTriangle } from 'react-icons/fi';

interface DeleteAccountProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const DeleteAccount: React.FC<DeleteAccountProps> = ({ isOpen, setIsOpen }) => {
    const [form] = Form.useForm();

    const handleSubmit = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            centered
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={500}
            className="custom-black-modal"
        >
            <div className="my-3">
                <h3 className="m-0 text-white text-lg font-medium">Delete Account</h3>
            </div>
            <div className="pb-4 pt-2 space-y-6">
                {/* Warning Icon and Message */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-red-500/10 flex-center">
                        <FiAlertTriangle className="text-red-500" size={50} />
                    </div>
                    <p className="text-[#A1A1A1] text-sm leading-relaxed">
                        Deleting your account is permanent. All your data, including profile, photos,
                        and saved items, will be lost. This action cannot be undone.
                    </p>
                </div>

                {/* Delete Form */}
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    autoComplete="off"
                >
                    <Form.Item
                        name="password" 
                        label={<label className="block text-sm  text-[#9CA3AF]">Enter Your Password</label>}
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password
                            placeholder="Enter your password"
                            className="h-11 bg-[#0f172a]"
                        />
                    </Form.Item>

                    <Form.Item className="mb-0 mt-6">
                        <button
                            type="submit"
                            className="w-full h-11 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
                        >
                            Confirm
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default DeleteAccount;