import { XIcon } from "@heroicons/react/outline"
import React from "react"
import { text } from "stream/consumers"

interface AlertProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  message?: string
  color?: string
}

const closeIcon = { XIcon }

const Alert: React.FC<AlertProps> = ({ Icon, message, color }) => {
  return (
    <div>
      <div
        className={`
        text-sm text-left text-${color}-600
        bg-${color}-500 bg-opacity-10
        border border-${color}-400
        h-12
        flex
        items-center
        p-4
        rounded-md
        `}
        role="alert"
      >
        {Icon && <Icon className="h-5 mb-1 mr-1 hover:animate-bounce" />}
        <div className="items-center">{message}</div>
        <div className="items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Alert
