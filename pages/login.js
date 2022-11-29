import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LoginScreen() {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">로그인 </h1>
        <div className="mb-4">
          <label htmlFor="email">이메일</label>

          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password">패스워드</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 3, message: 'password is more than 3 chars' },
            })}
            className="w-full"
            id="password"
            autoFocus
          />

          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button">로그인</button>
        </div>

        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href="register">가입</Link>
        </div>
      </form>
    </Layout>
  );
}
