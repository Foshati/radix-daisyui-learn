import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

function LoginForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Dialog.Root>
        <Dialog.Trigger className="btn btn-primary">
          Open Login Form
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg w-96">
            <Dialog.Title className="text-lg font-bold mb-4">
              Login
            </Dialog.Title>
            <Dialog.Description className="mb-4">
              Please enter your credentials to log in.
            </Dialog.Description>
            <form>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex justify-end">
                <Dialog.Close className="btn btn-secondary mr-2">
                  Cancel
                </Dialog.Close>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default LoginForm;
