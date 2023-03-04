export default function renderMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList.add('h-screen', 'w-screen', 'p-5', 'overflow-auto');

    const homePage = document.createElement('div');
    homePage.classList.add(
        'min-h-full',
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
        'items-center',
        'shadow-lg',
        'bg-white'
    );

    homePage.innerHTML = `
<!-- HEADER -->
<nav class='h-16 flex w-full justify-between items-center'>
    <img src='../src/img/logo-ipsum.svg' class='h-16 md:h-20'>
    <ul class='sm:flex gap-6 md:gap-10 justify-between font-Poppins font-light text-xl lg:text-2xl hidden'>
        <li><button id='home' class='hover:underline decoration-deep-red underline-offset-4'>Home</button></li>
        <li><button id='menu' class='hover:underline decoration-deep-red underline-offset-4 font-semibold'>Menu</button></li>
        <li><button id='contact' class='hover:underline decoration-deep-red underline-offset-4'>Contact</button></li>
    </ul>
    <button class='sm:hidden'><img src='../src/img/menu-icon.svg' class='h-7'></button>
    <button id='placeOrderBtn' class='sm:flex text-sm font-bold outline outline-2 outline-deep-red px-4 py-1 hidden hover:text-white hover:bg-deep-red'>PLACE ORDER</button>
</nav>

<!-- MAIN -->
<div class='flex w-full'>
    <div class='flex flex-col w-1/2 gap-4 justify-start'>
        <h1 class='text-3xl font-bold self-center'>FOOD</h1>
        <!-- menu item -->
        <div class='grid grid-cols-1 grid-rows-2 px-10'>
            <div class='flex items-center font-Poppins justify-between'>
                <h1 class='font-bold text-lg'>Performance Protein</h1>
                <div class='h-[.1rem] flex basis-1/2 bg-deep-red'></div>
                <p class='font-bold text-lg'>$15</p>
            </div>
            <p class='text-sm'>A high-protein beef jerky snack flavoured with a sweet and smoky BBQ sauce</p>
        </div>
                <div class='grid grid-cols-1 grid-rows-2 px-10'>
            <div class='flex items-center font-Poppins justify-between'>
                <h1 class='font-bold text-lg'>Performance Protein</h1>
                <div class='h-[.1rem] flex basis-1/2 bg-deep-red'></div>
                <p class='font-bold text-lg'>$15</p>
            </div>
            <p class='text-sm'>A high-protein beef jerky snack flavoured with a sweet and smoky BBQ sauce</p>
        </div>
                <div class='grid grid-cols-1 grid-rows-2 px-10'>
            <div class='flex items-center font-Poppins justify-between'>
                <h1 class='font-bold text-lg'>Performance Protein</h1>
                <div class='h-[.1rem] flex basis-1/2 bg-deep-red'></div>
                <p class='font-bold text-lg'>$15</p>
            </div>
            <p class='text-sm'>A high-protein beef jerky snack flavoured with a sweet and smoky BBQ sauce</p>
        </div>
                <div class='grid grid-cols-1 grid-rows-2 px-10'>
            <div class='flex items-center font-Poppins justify-between'>
                <h1 class='font-bold text-lg'>Performance Protein</h1>
                <div class='h-[.1rem] flex basis-1/2 bg-deep-red'></div>
                <p class='font-bold text-lg'>$15</p>
            </div>
            <p class='text-sm'>A high-protein beef jerky snack flavoured with a sweet and smoky BBQ sauce</p>
        </div>
    </div>
    <div class='flex flex-col w-1/2 gap-4 justify-start'>
        <h1 class='text-3xl font-bold self-center'>BEVERAGES</h1>
        <!-- menu item -->
        <div class='grid grid-cols-1 grid-rows-2 px-10'>
            <div class='flex items-center font-Poppins justify-between'>
                <h1 class='font-bold text-lg'>Performance Protein</h1>
                <div class='h-[.1rem] flex basis-1/2 bg-deep-red'></div>
                <p class='font-bold text-lg'>$15</p>
            </div>
            <p class='text-sm'>A high-protein beef jerky snack flavoured with a sweet and smoky BBQ sauce</p>
        </div>
                <div class='grid grid-cols-1 grid-rows-2 px-10'>
            <div class='flex items-center font-Poppins justify-between'>
                <h1 class='font-bold text-lg'>Performance Protein</h1>
                <div class='h-[.1rem] flex basis-1/2 bg-deep-red'></div>
                <p class='font-bold text-lg'>$15</p>
            </div>
            <p class='text-sm'>A high-protein beef jerky snack flavoured with a sweet and smoky BBQ sauce</p>
        </div>
                <div class='grid grid-cols-1 grid-rows-2 px-10'>
            <div class='flex items-center font-Poppins justify-between'>
                <h1 class='font-bold text-lg'>Performance Protein</h1>
                <div class='h-[.1rem] flex basis-1/2 bg-deep-red'></div>
                <p class='font-bold text-lg'>$15</p>
            </div>
            <p class='text-sm'>A high-protein beef jerky snack flavoured with a sweet and smoky BBQ sauce</p>
        </div>
                <div class='grid grid-cols-1 grid-rows-2 px-10'>
            <div class='flex items-center font-Poppins justify-between'>
                <h1 class='font-bold text-lg'>Performance Protein</h1>
                <div class='h-[.1rem] flex basis-1/2 bg-deep-red'></div>
                <p class='font-bold text-lg'>$15</p>
            </div>
            <p class='text-sm'>A high-protein beef jerky snack flavoured with a sweet and smoky BBQ sauce</p>
        </div>
    </div>
</div>

<!-- FOOTER -->
<div class='flex w-full justify-around sm:justify-between items-center'>
    <div class='flex gap-2'><img src='../src/img/facebook-icon.svg'><span>FACEBOOK</span></div>
    <div class='flex gap-2'><img src='../src/img/instagram-icon.svg'><span>INSTAGRAM</span></div>
    <div class='h-[.1rem] hidden sm:flex basis-1/2 lg:basis-1/4 bg-deep-red'></div>
    <p class='hidden lg:flex font-Poppins font-normal'>FIND US ON SKIP THE DISHES!</p>
</div>`;

    content.appendChild(homePage);
}
