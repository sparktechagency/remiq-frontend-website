"use client"

import type React from "react"

import { useState } from "react"
import { X, Eye, EyeOff } from "lucide-react"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

export function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card rounded-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Join Remiq</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              placeholder="Choose a username"
              className="mt-1 bg-input border-border"
              required
            />
          </div>

          <div>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              className="mt-1 bg-input border-border"
              required
            />
          </div>

          <div>
            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Create a password"
                className="bg-input border-border pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              placeholder="Confirm your password"
              className="mt-1 bg-input border-border"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-muted-foreground text-center mt-4">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>

        {/* Switch to Login */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          Already have an account?{" "}
          <button type="button" onClick={onSwitchToLogin} className="text-primary hover:text-primary/80 font-medium">
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}
