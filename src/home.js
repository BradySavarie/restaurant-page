const content = document.getElementById('content');
content.classList.add('h-screen', 'w-screen', 'p-7');
const homePage = document.createElement('div');
homePage.classList.add(
    'h-full',
    'border-4',
    'border-dark-gray',
    'rounded-xl',
    'flex',
    'flex-col',
    'gap-10',
    'px-6',
    'py-6',
    'md:px-20',
    'md:py-5'
);

homePage.innerHTML = `<nav class='outline h-16 sm:h-20 flex justify-between items-center'>
    <img src='../src/img/logo-ipsum.svg' class='h-16 sm:h-20'>
    <ul class='sm:flex gap-8 outline justify-between font-Heebo font-light text-2xl hidden'>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
    </ul>
    <button class='sm:flex text-lg font-bold border-2 border-normal-orange px-4 hidden'>MY CART</button>
</nav>
<div class='flex flex-col md:flex-row md:justify-between'>
    <div class='flex flex-col gap-2'>
        <h1 class='text-4xl font-bold'>PERFORMANCE\nPROTEIN</h1>
        <p class='text-xl'>Our new, enhanced beef-jerky for building muscle on-the-go</p>
        <button class='hidden'></button>
    </div>
    <img src='../src/img/beef-jerky.png' class='w-80 lg:scale-150 h-auto'>
</div>
<div>
    <ul>
        <li>Facebook</li>
        <li>Instagram</li>
    </ul>
    <p>Find us on Skip The Dishes!</p>
</div>`;

content.appendChild(homePage);
