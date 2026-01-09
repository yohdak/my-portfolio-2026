import dawa from './assets/dawa.jpg';
import profilePhoto from './assets/pp.png'; // Add this
import profilePhoto2 from './assets/jesril.png'; // New avatar

// Export profileData from here instead
export const profileData = {
  name: "Pramudya Jesril Pratama",
  role: "Physics Student & Graphic Designer",
  bio: "Technical Artist & Graphic Designer with a background in Computational Physics. I bridge the gap between creative vision and technical execution. Experienced in automating design pipelines using Python (BRIN), creating award-winning visual identities, and developing game mechanics (Godot). An adaptive problem solver who combines mathematical logic with artistic sensibility to build efficient workflows.",
  avatar: profilePhoto,
  avatar2: profilePhoto2,
};

export const projects = [
  // === PROJECT 1: GAME DEV (Gimersia) ===
  {
    id: "1",
    title: "Gimersia 2025: Platformer Game",
    category: "Game Development",
    description: "Technical Artist & UI Implementer for a Top 40 Game Jam entry.", // [cite: 28, 29, 30]
    image: "/images/Gimersia/image.png", // Ganti dengan screenshot gamemu
    gallery: [
      
    ],
    tags: ["Godot", "GDScript", "UI Implementation", "Physics"], // [cite: 30, 31]
    // GANTI JADI PATH LOKAL:
    videoUrl: "/videos/Guided-video.mp4", 
    
    // Opsi: Tambah poster (gambar cover sebelum video diplay) biar gak hitam doang
    videoPoster: "/images/output_por4/slide_1.png", 
  },
  
  {
    id: "pkkmb-fmipa",
    title: "Pkkmb Logo",
    category: "Logo Design",
    description: '', // [cite: 28, 29, 30]
    image: "/images/Pkkmb-logo/BEM_F_PKKMB_Logo_1.jpg", // Ganti dengan screenshot gamemu
    gallery: [
      "/images/Pkkmb-logo/BEM_F_PKKMB_Logo_1.jpg",
      "/images/Pkkmb-logo/BEM_F_PKKMB_logo_2.jpg",
      "/images/Pkkmb-logo/BEM_F_PKKMB_logo_3.jpg",
      "/images/Pkkmb-logo/BEM_F_PKKMB_Logo_4.jpg",
      "/images/Pkkmb-logo/BEM_F_PKKMB_logo_5.jpg"
    ],
    tags: ["Godot", "GDScript", "UI Implementation", "Physics"] // [cite: 30, 31]
  },

  {
    id: 3,
    title: "Bäckerei Füchsel",
    category: "Brand Identity",
    description: "Created a comprehensive visual identity for a bakery brand", // [cite: 11] (Linked to 'Freelance' achievement)
    image: "/images/Backerei/Bäckerei_Füchsel_Ig_backerei_4.png",
    gallery: [
       "/images/Backerei/Bäckerei_Füchsel_Ig_backerei_1.png",
       "/images/Backerei/Bäckerei_Füchsel_Ig_backerei_2.png",
       "/images/Backerei/Bäckerei_Füchsel_Ig_backerei_3.png",
       "/images/Backerei/Bäckerei_Füchsel_Ig_backerei_4.png",
        "/images/Backerei/Bäckerei_Füchsel_Ig_backerei_5.png",
        "/images/Backerei/Bäckerei_Füchsel_Ig_backerei_6.png"
    ],
    tags: ["Logo Design", "Branding", "Winner"] // [cite: 11]
  },

  // === PROJECT 4: ILUSTRASI (Journey to Wellness) ===
  {
    id: 4,
    title: "The Journey to Wellness",
    category: "Illustration & Comic",
    description: "Digital comic and illustration project regarding wellness themes.", //
    image: "/images/The-Journey-to-Wellness/1.png",
    gallery: ["/images/The-Journey-to-Wellness/1.png",
       "/images/The-Journey-to-Wellness/2.png",
       "/images/The-Journey-to-Wellness/3.png",
        "/images/The-Journey-to-Wellness/4.png",
        "/images/The-Journey-to-Wellness/5.png",
        "/images/The-Journey-to-Wellness/6.png",
        "/images/The-Journey-to-Wellness/7.png",
        "/images/The-Journey-to-Wellness/8.png",
        "/images/The-Journey-to-Wellness/9.png",
        "/images/The-Journey-to-Wellness/10.png"
    ],
    tags: ["Illustration", "Storytelling", "Clip Studio Paint"] // [cite: 51]
  },

  // === PROJECT 5: POSTER (Himafis/Event) ===
  {
    id: 5,
    title: "Event Branding",
    category: "Visual Design",
    description: "Managed end-to-end visual direction for major campus events. Created Instagram feeds and publication assets.", // [cite: 41] &
    image: "/images/Pkkmb/pkkmb6.jpg",
    gallery: [
       "/images/Pkkmb/pkkmb1.png",
       "/images/Pkkmb/pkkmb2.png",
       "/images/Pkkmb/pkkmb3.png",
       "/images/Pkkmb/pkkmb4.png",
       "/images/Pkkmb/pkkmb5.png",
       "/images/Pkkmb/pkkmb6.jpg",
       "/images/Pkkmb/pkkmb7.png",

    ],
    tags: ["Event Branding", "Layout", "Social Media"]
  },

  // === PROJECT 6: LOGO (Tony's Pizza) ===
  {
    id: 6,
    title: "Tony’s Pizza",
    category: "Logo Design",
    description: "Visual identity design for a pizza brand, focusing on bold and appetizing aesthetics.", //
    image: "/images/Tonys/Logofolio_Satusatu_Tony's_Pizza_3.png",
    gallery: [
       "/images/Tonys-pizza/slide_1.png",
       "/images/Tonys-pizza/slide_2.png",
       "/images/Tonys-pizza/slide_3.png",
       "/images/Tonys/Logofolio_Satusatu_Tony's_Pizza_3.png"
    ],
    tags: ["Logo Design", "F&B Branding"]
  },
  {
    id: 7,
    title: "dr.Feri",
    category: "Logo Design",
    description: "Logo design for a medical professional.",
    image: "/images/dr-feri/slide_4.png",
    gallery: [
       "/images/dr-feri/slide_1.png",
       "/images/dr-feri/slide_2.png",
       "/images/dr-feri/slide_3.png",
       "/images/dr-feri/slide_4.png"
    ],
    tags: ["Logo Design", "Medical Branding"]
  },
  {
    id: "bay-city",
    title: "Bay City Food",
    category: "Logo Design",
    description: "",
    image: "/images/Bay-city/slide_3.png",
    gallery: [
       "/images/Bay-city/slide_1.png",
       "/images/Bay-city/slide_2.png",
       "/images/Bay-city/slide_3.png",
    ],
    tags: ["Logo Design", "Medical Branding"]
  },
  {
    id: "orbitalism",
    title: "Orbitalism",
    category: "Web Experiment",
    image: "/images/image.png",
    description: "An interactive 3D web experiment exploring the complexities of celestial mechanics. This project visualizes various planetary models—including Heliocentric and Geocentric systems—rendered in real-time using WebGL. It demonstrates the interplay between orbital physics and front-end performance, offering an immersive educational experience.",
    
    // TAMBAH LINK INI (Link Vercel project kedua):
    directLink: "https://orbitalism.vercel.app/", 
  },
  {
    id: "Adroit",
    title: "Adroit Aerial Imaging",
    category: "Logo Design",
    description: "",
    image: "/images/Adroit/slide_1.png",
    gallery: ["/images/Adroit/slide_1.png",
       "/images/Adroit/slide_2.png",
       "/images/Adroit/slide_3.png",
       "/images/Adroit/slide_4.png"
    ],
    tags: ["Logo Design", "Medical Branding"]
  },
  {
    id: "Day-pkkmb",
    title: "Day Pkkmb",
    category: "Visual Design",
    description: "",
    image: "/images/Day-pkkmb/BEM_F_PKKMB_jadwal_1.png",
    gallery: ["/images/Day-pkkmb/BEM_F_PKKMB_jadwal_1.png",
       "/images/Day-pkkmb/BEM_F_PKKMB_jadwal_2.png",
       "/images/Day-pkkmb/BEM_F_PKKMB_jadwal_3.png"
    ],
    tags: ["Logo Design", "Medical Branding"]
  },
  {
    id: "eforto",
    title: "eforto",
    category: "Logo Design",
    description: "Logo design for a medical professional.",
    image: "/images/eforto/slide_1.png",
    gallery: ["/images/eforto/slide_1.png",
       "/images/eforto/slide_2.png",
       "/images/eforto/slide_3.png",
       "/images/eforto/slide_4.png"
    ],
    tags: ["Logo Design"]
  },
  {
    id: "inhabit",
    title: "Inhabit",
    category: "Logo Design",
    description: "",
    image: "/images/Inhabit/slide_1.png",
    gallery: ["/images/Inhabit/slide_1.png",
       "/images/Inhabit/slide_2.png",
       "/images/Inhabit/slide_3.png",
       "/images/Inhabit/slide_4.png"
    ],
    tags: ["Logo Design"]
  },
  {
    id: "lineart",
    title: "Lineart",
    category: "Illustration",
    description: "Digital lineart illustrations.",
    image: "/images/linear/Line_Art_Exported_page0011.png",
    gallery: ["/images/linear/Line_Art_Exported_page0011.png",
    "/images/linear/Line_Art_Exported_page0012.png",
    "/images/linear/Line_Art_Exported_page0013.png",
    "/images/linear/Line_Art_Exported_page0014.png",
    "/images/linear/Line_Art_Exported_page0015.png",
    "/images/linear/Line_Art_Exported_page0021.png",
    "/images/linear/Line_Art_Exported_page0022.png",
    "/images/linear/Line_Art_Exported_page0023.png"
  ],
    tags: ["Illustration"]
  },



  // === PROJECT: The Boomerang ===
  {
    id: "the-boomerang",
    title: "The Boomerang Club",
    category: "Logo Design",
    description: "",
    image: "/images/The-boomerang/slide_3.png",
    gallery: [
       "/images/The-boomerang/slide_1.png",
       "/images/The-boomerang/slide_2.png",
       "/images/The-boomerang/slide_3.png",
    ],
    tags: [""]
  },

  // === PROJECT: Rova ===
  {
    id: "rova",
    title: "Rova",
    category: "Logo Design",
    description: "Logo design project.",
    image: "/images/Rova/slide_1.png",
    gallery: [
       "/images/Rova/slide_1.png",
       "/images/Rova/slide_2.png",
       "/images/Rova/slide_3.png",
       "/images/Rova/slide_4.png",
    ],
    tags: ["Logo Design"]
  },

  // === PROJECT: Sitea ===
  {
    id: "sitea",
    title: "Sitea",
    category: "Logo Design",
    description: "Logo design project.",
    image: "/images/sitea/Hustle_Sitea_Sitea_P_3.png",
    gallery: 
       ["/images/sitea/Hustle_Sitea_Sitea_P_1.png",
      "/images/sitea/Hustle_Sitea_Sitea_P_2.png",
      "/images/sitea/Hustle_Sitea_Sitea_P_3.png"],
    tags: ["Logo Design"]
  },

  // === PROJECT: Tam ===
  {
    id: "tam",
    title: "Tambang Aneka Mineral",
    category: "Logo Design",
    description: "Logo design project.",
    image: "/images/Tam/slide_4.png",
    gallery: [
       "/images/Tam/slide_1.png",
       "/images/Tam/slide_2.png",
       "/images/Tam/slide_3.png",
       "/images/Tam/slide_4.png",
    ],
    tags: ["Logo Design"]
  },

  {
    id: "pkg",
    title: "PKG Tiling and Grout",
    category: "Design",
    description: "PKG design project.",
    image: "/images/pkg/slide_1.png",
    gallery: [
       "/images/pkg/slide_1.png",
       "/images/pkg/slide_2.png",
       "/images/pkg/slide_3.png",
       "/images/pkg/slide_4.png"
    ],
    tags: ["Design"]
  },

  // === PROJECT: T5 ===
  {
    id: "t5",
    title: "T5 Project",
    category: "Logo Design",
    description: "T5 design project.",
    image: "/images/t5/slide_3.png",
    gallery: [
       "/images/t5/slide_1.png",
       "/images/t5/slide_2.png",
       "/images/t5/slide_3.png",
       "/images/t5/slide_4.png",
    ],
    tags: ["Design"]
  },
   {
    id: "mascot-pres",
    title: "Mascot Presentation",
    category: "Presentation Design",
    description: "Credits: Mascot character is a provided asset. My role: Presentation Design & Layout.",
    layout: "carousel",
    image: "/images/mascot-pres/BEM_F_PKKMB_p_mascot_5.jpg",
    gallery: ["/images/mascot-pres/BEM_F_PKKMB_p_mascot_1.jpg",
"/images/mascot-pres/BEM_F_PKKMB_p_mascot_2.jpg",
"/images/mascot-pres/BEM_F_PKKMB_p_mascot_3.jpg",
"/images/mascot-pres/BEM_F_PKKMB_p_mascot_4.jpg",
"/images/mascot-pres/BEM_F_PKKMB_p_mascot_5.jpg",
"/images/mascot-pres/BEM_F_PKKMB_p_mascot_6.jpg",
"/images/mascot-pres/BEM_F_PKKMB_p_mascot_7.jpg",
"/images/mascot-pres/BEM_F_PKKMB_p_mascot_8_(2).jpg",
"/images/mascot-pres/BEM_F_PKKMB_p_mascot_9.jpg"
    ],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Mubes",
    title: "Mubes",
    category: "poster",
    description: "",
    image: "/images/Himafis_Mubes_POSTR_3.3.jpg",
    gallery: ["/images/Himafis_Mubes_POSTR_3.3.jpg"],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Hiller",
    title: "Hiller",
    category: "Logo Design",
    description: "",
    image: "/images/Hiller.jpg",
    gallery: ["/images/Hiller.jpg"],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "bahana",
    title: "Bahana Food",
    category: "Logo Design",
    description: "",
    image: "/images/bahana.jpg",
    gallery: ["/images/bahana.jpg"],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "yohdak",
    title: "yohdak",
    category: "",
    description: "",
    image: "/images/Yohdak-mask/7.jpg",
    gallery: ["/images/Yohdak-mask/1.jpg",
"/images/Yohdak-mask/2.jpg",
"/images/Yohdak-mask/3.jpg",
"/images/Yohdak-mask/4.jpg",
"/images/Yohdak-mask/5.jpg",
"/images/Yohdak-mask/6.jpg",
"/images/Yohdak-mask/7.jpg",
"/images/Yohdak-mask/8.jpg",
"/images/Yohdak-mask/9.jpg",
"/images/Yohdak-mask/10.jpg",
"/images/Yohdak-mask/11.jpg",
"/images/Yohdak-mask/12.jpg",
"/images/Yohdak-mask/13.jpg",
"/images/Yohdak-mask/14.jpg",
"/images/Yohdak-mask/15.jpg",
"/images/Yohdak-mask/16.jpg",
"/images/Yohdak-mask/17.jpg",
"/images/Yohdak-mask/18.jpg",
"/images/Yohdak-mask/19.jpg",
"/images/Yohdak-mask/20.jpg",
"/images/Yohdak-mask/21.jpg",],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Manarat",
    title: "Manarat",
    category: "Logo Design",
    description: "",
    image: "/images/Manarat/Logo_Manarat_Manarat.jpg",
    gallery: ["/images/Manarat/Logo_Manarat_Manarat.jpg",
"/images/Manarat/Logo_Manarat_Manarat_2.0.jpg",
"/images/Manarat/Logo_Manarat_Manarat1.jpg"],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Migas",
    title: "Migas Transindo",
    category: "Logo Design",
    description: "",
    image: "/images/Migas/1.jpg",
    gallery: ["/images/Migas/1.jpg",
"/images/Migas/2.jpg",
"/images/Migas/3.jpg"],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Spex",
    title: "Spex Crete",
    category: "Logo Design",
    description: "",
    image: "/images/Spex/Logo_Spex_Crete_spex_crete.jpg",
    gallery: ["/images/Spex/Logo_Spex_Crete_spex_crete.jpg"
      ],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Mbuh",
    title: "Mbuh",
    category: "Illustration",
    description: "",
    image: "/images/Personal_Project_Yohdaklah_gggg.png",
    gallery: ["/images/Personal_Project_Yohdaklah_gggg.png",
      ],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Synerga",
    title: "Synerga",
    category: "Logo Design",
    description: "",
    image: "/images/Synerga/Logo_Synerga_Synerga_1.0.png",
    gallery: ["/images/Synerga/Logo_Synerga_Synerga_1.0.png",
      "/images/Synerga/Logo_Synerga_Synerga_2.0.png"
      ],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "mekanik",
    title: "Mekanika Fluida",
    category: "Poster",
    description: "",
    image: "/images/Mekflu fly 2.jpg",
    gallery: ["/images/Mekflu fly 2.jpg"],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Bitbot",
    title: "bitbot",
    category: "Logo Design",
    description: "",
    image: "/images/Logo_Bitbot_bitbot_2.0.jpg",
    gallery: ["/images/Logo_Bitbot_bitbot_2.0.jpg"],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "dc",
    title: "D'Colonel",
    category: "Logo Design",
    description: "",
    image: "/images/dc/Logofolio_Satusatu_D'Colonel_D'Colonel_1.0.png",
    gallery: ["/images/dc/Logofolio_Satusatu_D'Colonel_D'Colonel_1.0.png",
    "/images/dc/Logofolio_Satusatu_D'Colonel_D'Colonel_1.1.png",
    "/images/dc/Logofolio_Satusatu_D'Colonel_D'Colonel_2.0.png",
    "/images/dc/Logofolio_Satusatu_D'Colonel_D'Colonel_2.1.png"],    
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Pratama",
    title: "Pratama Graha Adaka",
    category: "Logo Design",
    description: "",
    image: "/images/Logo_Pratama_Graha_Adaka_BNENH.jpg",
    gallery: ["/images/Logo_Pratama_Graha_Adaka_BNENH.jpg"],    
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Renofax",
    title: "Renovax",
    category: "Logo Design",
    description: "",
    image: "/images/Renofax/Logo_Renofax_RENOFAX_a.jpg",
    gallery: [
"/images/Renofax/Logo_Renofax_RENOFAX.jpg"],    
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Rock",
    title: "Rock Ridge",
    category: "Logo Design",
    description: "",
    image: "/images/rockridge.jpg",
    gallery: ["/images/rockridge.jpg",],    
    tags: ["Character Design", "Illustration"]
  },
  
  {
    id: "Hausen",
    title: "Hausen",
    category: "Apparel",
    description: "",
    image: "/images/Hausen/Hustle_Hausen_Hausen_4.png",
    gallery: ["/images/Hausen/Hustle_Hausen_Hausen_4_5_4.png",
"/images/Hausen/Hustle_Hausen_Hausen_4.png"],    
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Lestari-Lautku",
    title: "Lestari-lautku",
    category: "Illustration",
    description: "",
    image: "/images/Lestari Lautku/halaman_1.jpg",
    gallery: ["/images/Lestari Lautku/halaman_1.jpg",
"/images/Lestari Lautku/halaman_2.jpg",
"/images/Lestari Lautku/halaman_3.jpg",
"/images/Lestari Lautku/halaman_4.jpg",
"/images/Lestari Lautku/halaman_5.jpg",
"/images/Lestari Lautku/halaman_6.jpg",
"/images/Lestari Lautku/halaman_7.jpg",
"/images/Lestari Lautku/halaman_8.jpg",
"/images/Lestari Lautku/halaman_9.jpg",
"/images/Lestari Lautku/halaman_10.jpg",
"/images/Lestari Lautku/halaman_11.jpg",
"/images/Lestari Lautku/halaman_12.jpg",
"/images/Lestari Lautku/halaman_13.jpg",
"/images/Lestari Lautku/halaman_14.jpg",
"/images/Lestari Lautku/halaman_15.jpg",
"/images/Lestari Lautku/halaman_16.jpg",
"/images/Lestari Lautku/halaman_17.jpg",
"/images/Lestari Lautku/halaman_18.jpg",
"/images/Lestari Lautku/halaman_19.jpg",
"/images/Lestari Lautku/halaman_20.jpg",
"/images/Lestari Lautku/halaman_21.jpg",
"/images/Lestari Lautku/halaman_22.jpg",
"/images/Lestari Lautku/halaman_23.jpg",
"/images/Lestari Lautku/halaman_24.jpg",
"/images/Lestari Lautku/halaman_25.jpg",
"/images/Lestari Lautku/halaman_26.jpg",
"/images/Lestari Lautku/halaman_27.jpg",
"/images/Lestari Lautku/halaman_28.jpg",
"/images/Lestari Lautku/halaman_29.jpg"],
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Smart-Computer",
    title: "Smart Computer",
    category: "Logo Design",
    description: "",
    image: "/images/smart-computer.jpg",
    gallery: ["/images/smart-computer.jpg",],    
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Wild",
    title: "Wild Riders",
    category: "Logo Design",
    description: "",
    image: "/images/wild-riders.jpg",
    gallery: ["/images/wild-riders.jpg",],    
    tags: ["Character Design", "Illustration"]
  },
  {
    id: "Sepatu",
    title: "Sepatu-kanan",
    category: "Illustration",
    description: "",
    image: "/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0001.jpg",
    gallery: ["/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0001.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0002.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0003.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0004.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0005.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0006.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0007.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0008.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0009.jpg",
"/images/Sepatu-kanan/Sepatu Kanan dan Kiri__page-0010.jpg"],    
    tags: ["Character Design", "Illustration"]
  },
]




export const contactConfig = {
  email: "pramudya760@gmail.com",
  title: "Ready to Build Something Awesome?",
  descriptionn: "Tertarik membahas simulasi gravitasi, game dev, atau butuh desain UI yang logis? Saya terbuka untuk diskusi riset maupun freelance.",
  btnText: "Kirim Email"
};


// src/data.js

export const bentoItems = [
  {
    id: 1,
    title: "Project Alpha",
    subtitle: "Physics Simulation",
    size: "big", // 2x2 (Kotak Besar)
    type: "project",
    image: dawa,
    link: "/project/1"
  },
  {
    id: 2,
    title: "Instagram",
    subtitle: "@jesril.design",
    size: "tall", // 1x2 (Tiang Vertikal)
    type: "social",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
    link: "https://instagram.com"
  },
  {
    id: 3,
    title: "UI Exploration",
    subtitle: "Dribbble Shot",
    size: "normal", // 1x1 (Kotak Kecil)
    type: "image",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "About Me",
    subtitle: "Read Bio",
    size: "normal", // 1x1 (Kotak Kecil Teks)
    type: "text",
    image: null,
    link: "#about"
  },
  {
    id: 5,
    title: "Photography",
    subtitle: "Hobby",
    size: "wide", // 2x1 (Persegi Panjang Tidur)
    type: "image",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "Tech Stack",
    subtitle: "React & Python",
    size: "normal",
    type: "text",
    image: null,
    link: "#"
  },
  {
    id: 7,
    title: "Concept Art",
    subtitle: "Sketchbook",
    size: "normal",
    type: "image",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&q=80",
    link: "#"
  },
];