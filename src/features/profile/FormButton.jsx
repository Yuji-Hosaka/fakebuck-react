export default function FormButton({ children }) {
  return (
    <button
      className=" px-3 py-1.5 hover:bg-gray-100 text-blue-600 rounded-md"
      onClick={onclick}
    >
      {children}
    </button>
  );
}
