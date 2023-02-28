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
    'gap-12',
    'px-8',
    'py-8',
    'md:px-20',
    'md:py-5',
    'relative'
);

homePage.innerHTML = `<nav class='h-16 sm:h-20 flex justify-between items-center'>
    <img src='../src/img/logo-ipsum.svg' class='h-16 sm:h-20'>
    <ul class='sm:flex gap-8 outline justify-between font-Heebo font-light text-2xl hidden'>
        <li><button>Home</button></li>
        <li><button>Menu</button></li>
        <li><button>Contact</button></li>
    </ul>
    <button><img src='../src/img/menu-icon.svg' class='h-7'></button>
    <button class='sm:flex text-lg font-bold border-2 border-normal-orange px-4 hidden'>MY CART</button>
</nav>
<div class='flex flex-col md:flex-row md:justify-between'>
    <div class='flex flex-col gap-2'>
        <h1 class='text-4xl font-bold font-Poppins leading-10'>PERFORMANCE\nPROTEIN</h1>
        <p class='text-md font-Poppins font-normal'>Try our new, enhanced beef jerky for building muscle on-the-go</p>
        <button class='hidden'></button>
    </div>
    <img src='../src/img/beef-jerky.png' class='scale-105 lg:scale-150 h-auto mt-10 mb-10'>
    <button class='sm:hidden text-lg font-bold text-white bg-deep-red w-[max-content] px-8 py-2 font-Poppins tracking-wide shadow-md self-center'>LEARN MORE</button>
</div>
<div class='absolute bottom-8 flex items-center'>
    <ul class='flex font-Poppins text-md'>
        <li class='flex gap-2'><img src='../src/img/facebook-icon.svg'>FACEBOOK</li>
        <li class='flex gap-2'><img src='../src/img/instagram-icon.svg'>INSTAGRAM</li>
    </ul>
    <p class='hidden'>Find us on Skip The Dishes!</p>
</div>`;

content.appendChild(homePage);
