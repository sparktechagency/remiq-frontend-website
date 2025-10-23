import { Modal, Form, Input } from 'antd';
import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface ChangePasswordProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ isOpen, setIsOpen }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        console.log('Form values:', values);
        // Handle password change logic here
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
            <div className="py-4"> 
                        <div className="mb-6">
                    <h3 className="m-0 text-white text-lg font-medium">Change Password</h3>
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    autoComplete="off"
                >
                    <Form.Item
                        name="currentPassword"
                        label={<label className="block text-sm  text-[#9CA3AF]">Current Password</label>}
                        rules={[
                            { required: true, message: 'Please enter your current password' }
                        ]}
                    >
                        <Input.Password 
                            placeholder="Enter current password"
                            className="h-11 bg-[#0f172a]"
                            iconRender={visible => (visible ? <FiEye /> : <FiEyeOff />)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="newPassword"
                        label={<label className="block text-sm  text-[#9CA3AF]">New Password</label>}
                        rules={[
                            { required: true, message: 'Please enter new password' },
                            { min: 8, message: 'Password must be at least 8 characters' }
                        ]}
                    >
                        <Input.Password 
                            placeholder="Enter new password"
                            className="h-11 bg-[#0f172a]"
                            iconRender={visible => (visible ? <FiEye /> : <FiEyeOff />)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        label={<label className="block text-sm  text-[#9CA3AF]">Confirm Password</label>}
                        dependencies={['newPassword']}
                        rules={[
                            { required: true, message: 'Please confirm your password' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Passwords do not match'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password 
                            placeholder="Confirm new password"
                            className="h-11 bg-[#0f172a]"
                            iconRender={visible => (visible ? <FiEye /> : <FiEyeOff />)}
                        />
                    </Form.Item>

                    <Form.Item className="mb-0 mt-6 flex-center w-full">
                          <button type="submit" className=" bg-gradient-to-r from-[#3D5AFE] to-[#7085FE] h-[45px]  px-8 rounded-md text-white w-full">
                            Save Changes
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default ChangePassword;