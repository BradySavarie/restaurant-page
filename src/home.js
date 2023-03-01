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
    'px-7',
    'py-5',
    'md:px-9',
    'md:py-8',
    'gap-3',
    'items-center'
);

homePage.innerHTML = `
<!-- HEADER -->
<nav class='h-16 flex w-full justify-between items-center'>
    <img src='../src/img/logo-ipsum.svg' class='h-16 md:h-20'>
    <ul class='sm:flex gap-6 md:gap-10 justify-between font-Poppins font-light text-xl lg:text-2xl hidden'>
        <li><button class='hover:underline decoration-deep-red underline-offset-4'>Home</button></li>
        <li><button class='hover:underline decoration-deep-red underline-offset-4'>Menu</button></li>
        <li><button class='hover:underline decoration-deep-red underline-offset-4'>Contact</button></li>
    </ul>
    <button class='sm:hidden'><img src='../src/img/menu-icon.svg' class='h-7'></button>
    <button class='sm:flex text-sm font-bold outline outline-2 outline-deep-red px-4 py-1 hidden hover:text-white hover:bg-deep-red'>VIEW ORDER</button>
</nav>

<!-- MAIN -->
<div class='flex flex-col md:flex-row justify-between items-center max-w-[20rem] md:max-w-full lg:max-w-full md:px-10'>
    <div class='flex flex-col gap-2 relative'>
        <p class='text-sm md:text-md lg:text-lg font-semibold -rotate-6 text-deep-red mb-1 absolute -top-5'>NEW!</p>
        <h1 class='text-4xl md:text5xl lg:text-6xl font-bold font-Poppins leading-10'>PERFORMANCE<br>PROTEIN</h1>
        <p class='text-md md:text-lg lg:text-xl font-Poppins font-normal'>Try our new and enhanced beef jerky to build muscle on-the-go</p>
        <button class='hidden md:flex text-lg font-bold text-white bg-deep-red w-[max-content] px-8 py-2 font-Poppins tracking-wide shadow-md mt-4 hover:outline hover:outline-2 hover:outline-deep-red hover:bg-white hover:text-dark-gray'>READ MORE</button>
    </div>
    <img src='../src/img/beef-jerky.png' class='md:max-w-[50%] max-w-[90%] lg:max-w-[40%] h-auto my-6'>
    <button class='md:hidden text-lg font-bold text-white bg-deep-red w-[max-content] px-8 py-2 font-Poppins tracking-wide shadow-md self-center'>READ MORE</button>
</div>

<!-- FOOTER -->
<div class='flex w-full justify-around sm:justify-between items-center'>
    <div class='flex gap-2'><img src='../src/img/facebook-icon.svg'><span>FACEBOOK</span></div>
    <div class='flex gap-2'><img src='../src/img/instagram-icon.svg'><span>INSTAGRAM</span></div>
    <div class='h-[5%] hidden sm:flex basis-1/2 lg:basis-1/4 bg-deep-red'></div>
    <p class='hidden lg:flex font-Poppins font-normal'>FIND US ON SKIP THE DISHES!</p>
</div>`;

content.appendChild(homePage);
