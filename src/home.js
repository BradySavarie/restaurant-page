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
    'px-20'
);

homePage.innerHTML = `<nav class='outline outline-black h-[15%] flex justify-center items-center'>
    <img src='../src/img/logo-ipsum.svg' class='lg:h-full'>
    <ul class='flex gap-6 outline justify-between font-Heebo font-light text-xl'>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
    </ul>
    <button></button>
</nav>
<div>
    <div>
        <h1></h1>
        <p></p>
        <button></button>
    </div>
    <!-- Insert hero image here -->
</div>
<div>
    <ul>
        <li>Facebook</li>
        <li>Instagram</li>
    </ul>
    <p>Find us on Skip The Dishes!</p>
</div>`;

content.appendChild(homePage);
