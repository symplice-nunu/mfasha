import React from "react";

export default function Login() {
  return (
    <section class="h-screen">
      <div class="container h-full px-6 py-24">
      <h2 class="mb-4 text-3xl ml-48 font-extrabold leading-none tracking-tight text-black-500 md:text-5xl lg:text-6x">Log in</h2>
        <div class="g-6 flex h-full flex-wrap  justify-center lg:justify-between">
          {/* Left column container with background */}

          <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
          <div class="flex justify-center py-16">
          
        </div>
        
            <form className="flex flex-col justify-center gap-4">
              {/* Email input */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-0 bg-[#F3F6FB] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 active:border-2  active:border-blue-300 focus:border-2 focus:border-blue-300"
                  id="exampleFormControlInput3 "
                  placeholder="Email address"
                />
                <label
                  for="exampleFormControlInput3"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black-200 dark:peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  class="peer block min-h-[auto] w-full rounded-xl border-0 bg-[#F3F6FB] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 active:border-blue-300 focus:border-2 focus:border-blue-300"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                />
                <label
                  for="exampleFormControlInput33"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black-200 dark:peer-focus:text-primary"
                >
                  Password
                </label>
              </div>

             

               

              {/* Submit button */}
              <button
                type="submit"
                class=" rounded-3xl bg-[#1D90F5] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign in
              </button>

               
            </form>
          </div>
          {/* Right column container with form */}
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
