import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: '칵테일, 러브, 좀비',
      slug: 'book',
      category: 'books',
      image: '/images/lim.jpg',
      price: 7500,
      brand: '안전가옥',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: '쉽게 배우는 알고리즘',
      slug: 'book1',
      category: 'books',
      image: '/images/noh.jpg',
      price: 26190,
      brand: '한빛 아카데미',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: '그리고 아무도 없었다',
      slug: 'book2',
      category: 'books',
      image: '/images/han.jpg',
      price: 10800,
      brand: '해문',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: '셜록홈즈 X-파일',
      slug: 'book3',
      category: 'books',
      image: '/images/yang.jpg',
      price: 9000,
      brand: '매월당',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
  ],
};

export default data;
