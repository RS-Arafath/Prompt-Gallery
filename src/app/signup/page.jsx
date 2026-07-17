'use client';
import { Check } from '@gravity-ui/icons';
import toast from 'react-hot-toast';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const SignUpPage = () => {
     const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const router = useRouter();

  const onSubmit = async (e) => {
 
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
 setIsLoading(true);
    try {
      const { data: userData, error } = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw new Error(error.message || 'Sign Up Failed!');
      }

      toast.success('Sign Up Successfully!');

      formRef.current?.reset();
      setTimeout(() => {
        router.push('/signin');
      }, 1000);
      console.log({ data, error });
    } catch (error) {
      toast.error(error.message || 'Sign Up Failed!');
    } finally {
      setIsLoading(false);
    }
     
  };
  /* google signin */
    const googleSignIn = async () => {
    await authClient.signIn.social({
        provider: 'google',
      });
    };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-sm md:max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Sign Up
          </h1>
          <p className="mt-1 text-sm md:text-base text-gray-500">
            Create your account to get started
          </p>
        </div>

        <Form ref={formRef} className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            type="text"
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm md:text-base font-medium text-gray-700">
              Name
            </Label>
            <Input
              placeholder="Enter Your Name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
            <FieldError className="text-xs text-red-600" />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            }}
          >
            <Label className="text-sm md:text-base font-medium text-gray-700">
              Email
            </Label>
            <Input
              placeholder="example@gmail.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
            <FieldError className="text-xs text-red-600" />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters';
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter';
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number';
              }
              return null;
            }}
          >
            <Label className="text-sm md:text-base font-medium text-gray-700">
              Password
            </Label>
            <Input
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
            <Description className="text-xs text-gray-500">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs text-red-600" />
          </TextField>
          <div className="mt-2 flex  gap-2 sm:flex-row">
            <Button
              type="reset"
              variant="secondary"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Reset
            </Button>
            <Button
              type="submit"
              isDisabled={isLoading}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing Up...
                </>
              ) : (
                <>
                  <Check className="h-4 w-4" />
                  Submit
                </>
              )}
            </Button>
          </div>

          <div className="my-6 w-full text-center sm:my-8">
            <Link
              href="/signin"
              className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:border-blue-400 hover:bg-gray-100 sm:text-base"
            >
              I already have an account
            </Link>
          </div>
          <div className="flex items-center w-full">
            <div className="grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">Or</span>
            <div className="grow border-t border-gray-300"></div>
          </div>
          <div>
            <Button
              onClick={googleSignIn}
              className="w-full "
              variant="tertiary"
            >
              <Icon icon="devicon:google" />
              Sign in with Google
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
