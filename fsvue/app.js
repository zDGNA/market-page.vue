// var dataProduct = {
//   maximum: 50,
//   products: [
//     {
//       id: "1",
//       name: "Protein Bar",
//       description:
//         "Protein Bar yang kaya akan protein, cocok untuk dikonsumsi sebagai camilan sehat saat Anda dalam perjalanan. Mengandung campuran kacang-kacangan, biji-bijian, dan cokelat hitam untuk memberi Anda energi yang tahan lama. Ideal untuk sebelum atau sesudah olahraga.",
//       price: "2.99",
//       image_title: "protein_bar.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjast5_WDTnf8lPhFwbHbMd7BwP9nkzK0vw&s",
//     },
//     {
//       id: "2",
//       name: "Whey Protein",
//       description:
//         "Whey Protein berkualitas tinggi yang dirancang untuk mempercepat pemulihan otot setelah latihan intens. Mengandung 24g protein per sajian dan kaya akan asam amino esensial untuk mendukung pertumbuhan otot dan pemulihan yang lebih baik.",
//       price: "19.99",
//       image_title: "whey_protein.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYh7pDnztcJuVydLb_W3w_o7lBTJCLJQhUSQ&s",
//     },
//     {
//       id: "3",
//       name: "Almond Butter",
//       description: "Almond Butter alami, bebas dari bahan pengawet dan gula tambahan. Mengandung lemak sehat dan vitamin E, cocok untuk olesan pada roti atau tambahan pada smoothies untuk asupan nutrisi harian Anda.",
//       price: "8.99",
//       image_title: "almond_butter.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HFiW6epXvXV1m5sy5Xw8qz3DkT-_fTsE6Q&s",
//     },
//     {
//       id: "4",
//       name: "Energy Drink",
//       description: "Minuman energi yang menyegarkan dengan tambahan vitamin B kompleks untuk meningkatkan stamina dan konsentrasi. Diformulasikan untuk memberikan dorongan energi cepat tanpa menimbulkan efek crash di akhir.",
//       price: "1.99",
//       image_title: "energy_drink.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkt6Z7MkUnZ4QvmZg9stP5BnRJyENPamcpOdwvpidFqcXYCgkEv3bQmhayWsx32IasW-c&usqp=CAU",
//     },
//     {
//       id: "5",
//       name: "Greek Yogurt",
//       description:
//         "Greek Yogurt rendah lemak yang diperkaya dengan kultur hidup untuk mendukung kesehatan pencernaan. Teksturnya yang lembut dan rasa yang sedikit asam membuatnya cocok sebagai camilan sehat ataupun pelengkap menu sarapan Anda.",
//       price: "12.49",
//       image_title: "greek_yogurt.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReIxSTKfDecP9_GnlXjvZK4nM8G0w60Zp34A&s",
//     },
//     {
//       id: "6",
//       name: "Granola Mix",
//       description: "Campuran granola yang renyah, terdiri dari biji-bijian, kacang, dan buah kering. Cocok dinikmati dengan susu atau yogurt sebagai sarapan sehat yang memberikan energi yang bertahan lama sepanjang hari.",
//       price: "4.99",
//       image_title: "granola_mix.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhKTlWYvtHc5Pg7FZU7fSOVf39MLaHANU1g&s",
//     },
//     {
//       id: "7",
//       name: "Chia Seeds",
//       description: "Biji chia organik yang kaya akan serat, omega-3, dan protein nabati. Cocok untuk ditambahkan ke dalam smoothies, oatmeal, atau puding untuk meningkatkan kandungan nutrisi harian Anda.",
//       price: "5.99",
//       image_title: "chia_seeds.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCx-AojQEoJmk1WqrHcViPrS7VrKDo0EoGBUrgtsZhxIeYdrtQDGXnLoRukM_2RfUZFZk&usqp=CAU",
//     },
//     {
//       id: "8",
//       name: "Protein Shake",
//       description: "Minuman protein siap saji yang praktis dan mengandung 20g protein. Ideal sebagai pengganti makan atau pasca-latihan untuk membantu memenuhi kebutuhan protein harian Anda dan mempercepat pemulihan otot.",
//       price: "18.99",
//       image_title: "protein_shake.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6e0TQ4HUSjNDaYRgLq2F46ww18DoWjWzykA&s",
//     },
//     {
//       id: "9",
//       name: "Coconut Water",
//       description: "Air kelapa murni yang kaya akan elektrolit alami, membantu menjaga hidrasi tubuh secara optimal. Cocok diminum setelah aktivitas fisik untuk menggantikan cairan tubuh yang hilang.",
//       price: "22.49",
//       image_title: "coconut_water.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Zlcl03LZAqDS37T5D4C-V68bWgrHglwRZQ&s",
//     },
//     {
//       id: "10",
//       name: "Trail Mix",
//       description: "Campuran kacang-kacangan, buah kering, dan biji-bijian yang sehat dan bergizi. Trail mix ini memberikan asupan energi yang sempurna, baik sebagai camilan sehat di tengah aktivitas maupun saat bepergian.",
//       price: "6.99",
//       image_title: "trail_mix.jpg",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljxNYez-QhsXcK27ll5sAvMRT-CSbop-ZBQ&s",
//     },
//   ],
// };

var app = new Vue({
  el: "#app",
  data: {
    maximum: 200,
    products: null,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
});
