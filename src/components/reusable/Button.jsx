function Button({ children }) {
  return (
    <button class="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50 cursor-pointer">
      <span class="relative z-10">{children}</span>
      <span class="absolute inset-0 overflow-hidden rounded-md">
        <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>
    </button>
  );
}

export default Button;
