"use client"

import type React from "react"
import { X,  } from "lucide-react"
import Form from "@/components/Forms/Form"
import FormInput from "@/components/Forms/FormInput"

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
    onSwitchToSignup: () => void
}

export function LoginModal({ isOpen, onClose, onSwitchToSignup }: LoginModalProps) {
    if (!isOpen) return null


    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-card rounded-xl p-6">
                {/* Header */}
                <div className="flex-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
                    <button onClick={onClose}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Login Form */}
                <Form submitHandler={(data) => console.log(data)}>
                    <div>
                        <FormInput
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 bg-input border-border"
                        />
                    </div>

                    <div>
                        <FormInput
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        // disabled={isLoading}
                    >
                       Login
                    </button>
                </Form>


                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-border"></div>
                    <span className="px-3 text-muted-foreground text-sm">or</span>
                    <div className="flex-1 border-t border-border"></div>
                </div>

                {/* Social Login */}
                <div className="space-y-3">
                    <button className="w-full bg-transparent">
                        Continue with Google
                    </button>
                    <button className="w-full bg-transparent">
                        Continue with Apple
                    </button>
                </div>

                {/* Switch to Signup */}
                <p className="text-center text-muted-foreground text-sm mt-6">
                    Don&apos;t have an account?
                    <button type="button" onClick={onSwitchToSignup} className="text-primary hover:text-primary/80 font-medium">
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    )
}
