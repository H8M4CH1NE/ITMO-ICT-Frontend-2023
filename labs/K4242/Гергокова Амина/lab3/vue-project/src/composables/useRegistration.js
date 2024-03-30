import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useRegistration() {
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  const registerUser = async () => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
        }),
      });
      const data = await response.json();
      console.log('Пользователь успешно зарегистрирован:', data);      
      router.push('/profile');
    } catch (error) {
      console.error('Ошибка при регистрации пользователя:', error);
    }
  };

  return {
    username,
    email,
    password,
    registerUser,
  };
}