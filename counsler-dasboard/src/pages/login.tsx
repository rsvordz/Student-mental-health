import React from "react";

const Login = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full flex-col grow">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-6 py-3 md:px-10">
          <div className="flex items-center gap-4 text-[#0e141b]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">
              CounselCo
            </h2>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 justify-center py-5 px-6 md:px-40">
          <div className="layout-content-container flex flex-col w-full max-w-md py-5">
            <h2 className="text-[#0e141b] tracking-light text-2xl md:text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
              Welcome Back
            </h2>

            {/* Email Input */}
            <div className="flex flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">
                  Email
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input flex w-full resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            {/* Password Input */}
            <div className="flex flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">
                  Password
                </p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-input flex w-full resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            {/* Forgot Password */}
            <p className="text-[#4e7397] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer">
              Forgot your password?
            </p>

            {/* Sign In Button */}
            <div className="flex px-4 py-3">
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-[#1980e6] text-slate-50 text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Sign in</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
