export default function Home() {
  return (
    <main
      className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory" style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>
      <section className="snap-start h-screen bg-red-500 flex items-center justify-center text-white text-5xl font-bold">
        Page 1
      </section>
      <section className="snap-start h-screen bg-green-500 flex items-center justify-center text-white text-5xl font-bold">
        Page 2
      </section>
      <section className="snap-start h-screen bg-blue-500 flex items-center justify-center text-white text-5xl font-bold">
        Page 3
      </section>
    </main>
  );
}
