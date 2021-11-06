import React from "react"

interface AlertProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  message: string
  color: string
}

const Tost: React.FC<AlertProps> = ({ Icon, message, color }) => {
  return (
    <div>
      <div>
        <div className="mb-5">
          <div
            className={`
      flex
      w-full
      max-w-sm
      mx-auto
      overflow-hidden
      bg-${color}-400
      rounded-lg
      bg-opacity-10
      shadow-md
    `}
          >
            <div
              className={`flex items-center justify-center w-12 bg-${color}-500`}
            >
              {Icon && <Icon className="h-5 mb-1 hover:animate-bounce" />}
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className={`font-semibold text-${color}-500`}></span>
                <p className={`text-sm text-${color}-400  `}>{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tost
