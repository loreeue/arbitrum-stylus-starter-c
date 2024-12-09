"use client";

import { Fragment, useState } from "react";
import { useRkAccountModal } from "@/lib/rainbowkit";
import { useAccount } from "wagmi";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
}

function Navigation() {
  const { openAccountModal } = useRkAccountModal();
  const { isConnected } = useAccount();

  return (
    <nav className="bg-gradient-to-r from-[#CDC5B4] to-[#B59DA4] py-6 text-[#6D3D14] font-bold shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1"></div>
        <h1 className="text-5xl text-[#6D3D14] font-extrabold tracking-widest">
          Nalanda
        </h1>
        <div className="flex-1 flex justify-end">
          <button
            className="px-6 py-2 bg-[#85756E] text-white rounded-full shadow-lg hover:bg-[#B59DA4] transition"
            onClick={openAccountModal}
          >
            {isConnected ? "Conectado" : "Conectar"}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Highlights() {
  const highlights = [
    {
      id: 1,
      icon: "🎓",
      title: "El Rol de la IA en la Educación",
      description:
        "El 77% de los educadores cree que la IA mejorará significativamente la educación al ofrecer experiencias de aprendizaje personalizadas y una mejor gestión de recursos.",
    },
    {
      id: 2,
      icon: "🌐",
      title: "Tendencias de Accesibilidad Digital",
      description:
        "Más del 90% de los estudiantes ahora confían en recursos en línea para la investigación, destacando un cambio hacia la literatura digital y el acceso al conocimiento.",
    },
    {
      id: 3,
      icon: "🌱",
      title: "Impacto Ambiental de las Bibliotecas Digitales",
      description:
        "Transicionar a bibliotecas digitales podría reducir la huella de carbono en un 25%, ya que disminuyen los recursos físicos y aumenta la eficiencia.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-12 px-6">
      <h2 className="text-3xl font-bold text-center text-[#6D3D14] mb-8">
        ¿Cómo contribuye Nalanda?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white border border-[#B59DA4] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{item.icon}</span>
              <h3 className="text-xl font-bold text-[#6D3D14]">{item.title}</h3>
            </div>
            <p className="text-sm text-[#85756E]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BookCard({ book }: { book: Book }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-[250px] h-[400px] cursor-pointer transition-transform duration-500 ${
        flipped ? "transform rotate-y-180" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Parte Frontal */}
      <div
        className={`absolute w-full h-full bg-gradient-to-b from-[#f7f3ee] to-[#e4ded7] border border-[#B59DA4] rounded-lg shadow-md flex flex-col items-center backface-hidden ${
          flipped ? "hidden" : "block"
        }`}
      >
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />
        <div className="flex flex-col items-center px-4 mt-4">
          <p className="text-center font-bold text-[#6D3D14] text-lg">
            {book.title}
          </p>
          <p className="text-center text-sm text-[#85756E] mt-2 italic">
            {book.author}
          </p>
        </div>
      </div>

      {/* Parte Trasera */}
      <div
        className={`absolute w-full h-full bg-gradient-to-b from-[#f7f3ee] to-[#e4ded7] border border-[#B59DA4] rounded-lg shadow-md flex items-center justify-center p-4 backface-hidden ${
          flipped ? "block" : "hidden"
        }`}
      >
        <p className="text-[#6D3D14] text-center text-sm">{book.description}</p>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div
      className="w-full h-64 bg-cover bg-center"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">¡Bienvenido a Nalanda!</h1>
      </div>
    </div>
  );
}

export default function Container() {
  const books: Book[] = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      image:
        "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "Una novela distópica sobre un régimen totalitario y la vigilancia constante.",
    },
    {
      id: 2,
      title: "Un mundo feliz",
      author: "Aldous Huxley",
      image:
        "https://m.media-amazon.com/images/I/41Qb8TJtPuL._SY445_SX342_.jpg",
      description:
        "Una sociedad futurista donde la felicidad se controla artificialmente.",
    },
    {
      id: 3,
      title: "Las aventuras de Huckleberry Finn",
      author: "Mark Twain",
      image:
        "https://m.media-amazon.com/images/I/51Lx-8BHQYL._SY445_SX342_.jpg",
      description:
        "Un relato clásico sobre la amistad y la libertad en el río Mississippi.",
    },
    {
      id: 4,
      title: "El amante de Lady Chatterley",
      author: "D. H. Lawrence",
      image:
        "https://m.media-amazon.com/images/I/41lm2uusjTL._SY445_SX342_.jpg",
      description:
        "Una historia de amor prohibido en la Inglaterra de principios del siglo XX.",
    },
    {
      id: 5,
      title: "Archipiélago Gulag",
      author: "Aleksandr Solzhenitsyn",
      image:
        "https://m.media-amazon.com/images/I/51p1MqOHInL._SY445_SX342_.jpg",
      description:
        "Un testimonio histórico y político sobre la vida en los campos de trabajo soviéticos.",
    },
  ];

  return (
    <Fragment>
      <Banner />
      <Navigation />
      <Highlights />
      <section className="max-w-7xl mt-12 mx-auto">
        <div className="flex gap-8 overflow-x-auto overflow-visible pb-8 px-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
