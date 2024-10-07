document.addEventListener("DOMContentLoaded", function() {
    // Simulasi data yang diambil dari database
    let dataBarang = [
        { id: 1, nama: "Laptop Lenovo", jumlah: 10, lokasi: "Gudang 1", tanggal: "01-10-2024" },
        { id: 2, nama: "Printer HP", jumlah: 5, lokasi: "Gudang 2", tanggal: "02-10-2024" },
        { id: 3, nama: "Monitor Dell", jumlah: 15, lokasi: "Gudang 3", tanggal: "03-10-2024" }
    ];

    let tableBody = document.getElementById("data-barang");
    tableBody.innerHTML = ""; // Kosongkan tabel

    // Loop untuk menambahkan data barang ke tabel
    dataBarang.forEach((item, index) => {
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.jumlah}</td>
                <td>${item.lokasi}</td>
                <td>${item.tanggal}</td>
                <td><button class="btn btn-warning btn-sm">Edit</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    // Mengupdate bagian informasi dashboard
    document.getElementById("total-barang").textContent = dataBarang.length;
    document.getElementById("barang-masuk").textContent = 120; // Nilai contoh
    document.getElementById("barang-keluar").textContent = 50; // Nilai contoh
    document.getElementById("stok-habis").textContent = 10; // Nilai contoh
});
