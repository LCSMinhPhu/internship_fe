'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './style.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Sử dụng router cho điều hướng

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Mô phỏng gọi API đăng nhập
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email === 'test@example.com' && password === 'password') {
      toast.success('✅ Đăng nhập thành công!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        theme: 'colored',
      });

      // Reset form nếu muốn
      setEmail('');
      setPassword('');

      // Chuyển hướng nếu cần
      // setTimeout(() => router.push('/dashboard'), 3000); // đợi toast xong mới chuyển
    } else {
      toast.error('❌ Thông tin đăng nhập không chính xác.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        theme: 'colored',
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            className={styles.input}
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            className={styles.input}
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? <ClipLoader color="#fff" size={20} /> : 'Đăng nhập'}
        </button>
      </form>

      {/* ToastContainer nên đặt ngoài cùng, chỉ render một lần */}
      <ToastContainer />
    </>
  );
};

export default LoginForm;
