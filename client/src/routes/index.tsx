import { createSignal } from "solid-js";

export default function Home() {
  const [name, setName] = createSignal("");
  const [response, setResponse] = createSignal("");

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/hello/${name()}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.text();
      setResponse(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
      <form onSubmit={handleSubmit} class="mt-4">
        <input
          type="text"
          value={name()}
          onInput={(e) => setName(e.currentTarget.value)}
          placeholder="Enter your name"
          class="p-2 border border-gray-300 rounded"
        />
        <button type="submit" class="ml-2 p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
      {response() && <p class="mt-4">{response()}</p>}
    </main>
  );
}