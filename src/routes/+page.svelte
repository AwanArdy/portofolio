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
    <div class="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center">
        <p class="text-lg text-gray-600">Halo, nama saya</p>
        <h1 class="text-6xl md:text-8xl font-bold text-orange-500 my-4">Awan Ardy</h1>
        <p class="text-xl md:text-2xl text-gray-700">Saya adalah web developer</p>
    </div>

    <!-- About -->
    <section id="about" class="mb-20">
        <h2 class="text-3xl font-bold border-b-4 border-primary inline-block mb-4">Tentang Saya</h2>
        <p class="text-lg">Saya memiliki pengalaman dalam membangun aplikasi modern termasuk frontend</p>
    </section>

    <!-- Portofolio -->
    <section id="portofolio" class="mb-20">
        <h2 class="text-3xl font-bold border-b-4 border-primary inline-block mb-4">Portofolio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-4 shadow-md">
                <img src="/src/" alt="" class="w-full rounded-md mb-4">
                <h3 class="text-xl font-bold mb-2">Project 1</h3>
                <p>Deskripsi singkat proyek</p>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact">
        <h2 class="text-3xl font-bold border-b-4 border-primary inline-block mb-4">Kontak</h2>
        <form action="#" class="bg-white p-6 shadow-md">
            <label for="name" class="block mb-2 font-bold">Nama</label>
            <input type="text" id="name" name="name" class="w-full border border-textGray p-2 mb-4 rounded-md">

            <label for="email" class="block mb-2 font-bold">Email</label>
            <input type="email" id="email" class="w-full border border-textGray p-2 mb-4 rounded-md">

            <button class="bg-primary text-white py-2 px-4 rounded-md hover:bg-orange-600">Kirim</button>
        </form>
    </section>
</main>

<footer class="bg-black text-white text-center py-4 mt-20">
    <p>&copy; 2024 Awan Ardy. All Rights Reserved</p>
</footer>