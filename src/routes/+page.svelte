<main class="pt-20 p-8">
    <!-- Home -->
    <!-- <section id="home" class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold text-black mb-4">
            Selamat datang di Portofolio saya
        </h1>
        <p class="text-lg text-center text-textGray max-w-lg">
            Saya adalah seorang web developer
        </p>
    </section> -->
    <section class="relative h-screen">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 bg-hero-pattern"></div>

        <div class="relative z-10 flex flex-col items-center justify-center h-full">
            <p class="font-serif2 text-lg text-gray-600 mb-2">Halo semua, nama saya</p>
            <h1 class="font-serif1 text-6xl md:text-8xl font-extrabold text-orange-500 my-4">Awan Ardy</h1>
            <p class="font-serif2 text-xl md:text-2xl text-gray-700 mt-2">Saya adalah web developer</p>
        </div>
    </section>

    <!-- About -->
    <section id="about" class="mb-20">
        <h2 class="text-3xl font-bold border-b-4 border-primary inline-block mb-4 font-serif1">Tentang Saya</h2>
        <p class="text-lg font-serif2 font-regular">Saya memiliki pengalaman dalam membangun aplikasi modern termasuk frontend</p>
    </section>

    <!-- Portofolio -->
    <section id="portofolio" class="mb-20">
        <h2 class="text-3xl font-bold border-b-4 border-primary inline-block mb-4 font-serif1">Portofolio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-4 shadow-md">
                <img src="/src/" alt="" class="w-full rounded-md mb-4">
                <h3 class="text-xl font-bold mb-2 font-serif1">Project 1</h3>
                <p class="font-serif2">Deskripsi singkat proyek</p>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact">
        <h2 class="text-3xl font-serif1 font-bold border-b-4 border-primary inline-block mb-4">Kontak</h2>
        <form action="#" class="bg-white p-6 shadow-md font-serif2">
            <label for="name" class="block mb-2 font-bold">Nama</label>
            <input type="text" id="name" name="name" class="w-full border border-textGray p-2 mb-4 rounded-md">

            <label for="email" class="block mb-2 font-bold">Email</label>
            <input type="email" id="email" class="w-full border border-textGray p-2 mb-4 rounded-md">

            <button class="bg-primary rounded-md text-white px-6 py-3 font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Kirim</button>
        </form>
    </section>
</main>

<footer class="bg-black font-semibold text-white text-center py-4 mt-20">
    <p>&copy; 2024 Awan Ardy. All Rights Reserved</p>
</footer>