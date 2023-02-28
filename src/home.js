const content = document.getElementById('content');
content.classList.add('h-screen', 'w-screen', 'p-7');
const homePage = document.createElement('div');
homePage.classList.add(
    'h-full',
    'w-full',
    'border-4',
    'border-dark-gray',
    'rounded-3xl',
    'flex',
    'flex-col',
    'gap-12',
    'p-7',
    'md:px-20',
    'md:py-5',
    'relative'
);

homePage.innerHTML = `
<!-- HEADER -->
<nav class='h-16 sm:h-20 flex justify-between items-center'>
    <img src='../src/img/logo-ipsum.svg' class='h-16 sm:h-20'>
    <ul class='sm:flex gap-8 outline justify-between font-Poppins font-light text-2xl hidden'>
        <li><button>Home</button></li>
        <li><button>Menu</button></li>
        <li><button>Contact</button></li>
    </ul>
    <button><img src='../src/img/menu-icon.svg' class='h-7 sm:hidden'></button>
    <button class='sm:flex text-lg font-bold border-2 border-deep-red px-4 hidden'>VIEW ORDER</button>
</nav>

<!-- MAIN -->
<div class='flex flex-col md:flex-row justify-between'>
    <div class='flex flex-col gap-2'>
        <h1 class='text-4xl font-bold font-Poppins leading-10'>PERFORMANCE<br>PROTEIN</h1>
        <p class='text-md font-Poppins font-normal'>Try our new enhanced beef jerky to help build muscle on-the-go</p>
        <button class='hidden'></button>
    </div>
    <img src='../src/img/beef-jerky.png' class='md:max-w-[50%] h-auto mt-6 mb-10'>
    <button class='sm:hidden text-lg font-bold text-white bg-deep-red w-[max-content] px-8 py-2 font-Poppins tracking-wide shadow-md self-center'>READ MORE</button>
</div>

<!-- FOOTER -->
<div class='absolute bottom-8 flex items-center'>
    <ul class='flex font-Poppins text-md'>
        <li class='flex gap-2'><img src='../src/img/facebook-icon.svg'>FACEBOOK</li>
        <li class='flex gap-2'><img src='../src/img/instagram-icon.svg'>INSTAGRAM</li>
    </ul>
    <p class='hidden'>Find us on Skip The Dishes!</p>
</div>`;

content.appendChild(homePage);
