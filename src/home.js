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
    'justify-between',
    'p-7',
    'md:px-20',
    'md:py-5'
);

homePage.innerHTML = `
<!-- HEADER -->
<nav class='h-16 sm:h-20 flex justify-between items-center'>
    <img src='../src/img/logo-ipsum.svg' class='h-16 sm:h-20'>
    <ul class='sm:flex gap-8 justify-between font-Poppins font-light text-2xl hidden'>
        <li><button>Home</button></li>
        <li><button>Menu</button></li>
        <li><button>Contact</button></li>
    </ul>
    <button class='sm:hidden'><img src='../src/img/menu-icon.svg' class='h-7'></button>
    <button class='sm:flex text-lg font-bold border-2 border-deep-red px-4 hidden'>VIEW ORDER</button>
</nav>

<!-- MAIN -->
<div class='flex flex-col md:flex-row justify-between'>
    <div class='flex flex-col gap-2 relative'>
        <p class='text-sm font-semibold -rotate-6 text-deep-red mb-1 absolute -top-5'>NEW!</p>
        <h1 class='text-4xl font-bold font-Poppins leading-10'>PERFORMANCE<br>PROTEIN</h1>
        <p class='text-md font-Poppins font-normal'>Try our new enhanced beef jerky to help build muscle on-the-go</p>
        <button class='hidden'></button>
    </div>
    <img src='../src/img/beef-jerky.png' class='md:max-w-[50%] h-auto my-6'>
    <button class='sm:hidden text-lg font-bold text-white bg-deep-red w-[max-content] px-8 py-2 font-Poppins tracking-wide shadow-md self-center'>READ MORE</button>
</div>

<!-- FOOTER -->
<div class='flex justify-between items-center'>
    <div class='flex gap-2'><img src='../src/img/facebook-icon.svg'><span>FACEBOOK</span></div>
    <div class='flex gap-2'><img src='../src/img/instagram-icon.svg'><span>INSTAGRAM</span></div>
    <div class='h-[5%] hidden md:flex basis-1/2 lg:basis-1/4 bg-deep-red'></div>
    <p class='hidden lg:flex font-Poppins font-normal'>We're on Skip The Dishes!</p>
</div>`;

content.appendChild(homePage);
